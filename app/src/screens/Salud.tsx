import { useApp } from '../state/store';
import { Icon } from '../ui/Icon';
import { Avatar, Badge, Button, EmptyState, ErrorState, IconBox, IconButton, Segmented, SkeletonList } from '../ui/components';
import { DETALLE, FICHA, HISTORIAL, LOW_MOODS, MOODS, RECETAS, RESULTADOS, TIEMPOS } from '../data/mock';

export function Animo() {
  const { st, set, startForm } = useApp();
  const cur = MOODS.find(m => m.id === st.mood);
  const low = !!st.mood && LOW_MOODS.includes(st.mood);
  return (
    <div className="screen sub">
      <Segmented label="Periodo" value={st.moodTab} onChange={v => set({ moodTab: v })} options={[{ id: 'hoy', label: 'Hoy' }, { id: 'semana', label: 'Esta semana' }]} />
      {st.moodTab === 'hoy' ? <>
        <h2 style={{ fontSize: 20, letterSpacing: 0, lineHeight: 1.3 }}>¿Cómo te sientes hoy?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 6 }} role="group" aria-label="Estado de ánimo">
          {MOODS.map(m => {
            const on = st.mood === m.id;
            return (
              <button key={m.id} type="button" aria-pressed={on} onClick={() => set({ mood: m.id, moodSaved: false })}
                style={{ padding: '12px 2px', borderRadius: 16, border: on ? '2px solid var(--color-primary)' : '1px solid var(--border)', background: on ? 'var(--blue-50)' : 'var(--white)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <Icon name={m.icon} size={26} color="var(--navy-800)" />
                <span style={{ fontSize: 11, fontWeight: 600 }}>{m.label}</span>
              </button>
            );
          })}
        </div>
        {st.moodSaved && <div className="note ok" role="status"><Icon name="check-circle" size={18} color="var(--mint-600)" />Registro guardado. Gracias por contarnos.</div>}
        {st.moodSaved && low && (
          <div className="stack" style={{ background: 'var(--color-wellness-soft)', borderRadius: 18, padding: 16, gap: 12 }}>
            <span style={{ fontSize: 14, lineHeight: 1.5 }}>Hablar con alguien puede ayudarte. Tu plan incluye psicología ilimitada.</span>
            <Button variant="wellness" size="ml" style={{ borderRadius: 12, fontWeight: 700 }} onClick={() => startForm('psico')}>Iniciar consulta psicológica</Button>
          </div>
        )}
        {/* TODO(API): POST /moods */}
        {!st.moodSaved && <Button disabled={!st.mood} onClick={() => st.mood && set({ moodSaved: true })}>Guardar registro</Button>}
      </> : st.moodSaved && cur ? (
        <div className="card card-18 card-pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Icon name={cur.icon} size={24} color="var(--navy-800)" />
          <span className="grow stack"><span className="t-title">{cur.label}</span><span className="t-muted">Hoy, martes 13</span></span>
        </div>
      ) : (
        <EmptyState icon="chart-line-up" title="Aún no hay registros esta semana" body="Registra cómo te sientes en 5 segundos y verás tu semana aquí."
          action={<Button variant="secondary" size="md" onClick={() => set({ moodTab: 'hoy' })}>Registrar hoy</Button>} />
      )}
    </div>
  );
}

function DocRow({ icon, bg, fg, title, meta, actionIcon, actionLabel, onClick }: {
  icon: 'pill' | 'flask'; bg: string; fg: string; title: string; meta: string; actionIcon: 'download-simple' | 'file-text'; actionLabel: string; onClick: () => void;
}) {
  return (
    <div className="card card-18 card-pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <IconBox icon={icon} bg={bg} fg={fg} />
      <span className="grow stack" style={{ gap: 2 }}><span className="t-title">{title}</span><span className="t-muted">{meta}</span></span>
      <IconButton square icon={actionIcon} size={18} label={actionLabel} onClick={onClick} style={{ borderColor: 'var(--border)', color: 'var(--navy-800)' }} />
    </div>
  );
}

export function Expediente() {
  const { st, set, go, page, done, startForm, dataState, retry } = useApp();
  return (
    <div className="screen" style={{ gap: 16 }}>
      <div className="stack" style={{ gap: 4 }}>
        <h1 className="h-page">Expediente</h1>
        <span className="t-muted" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="lock-simple" size={14} />Privado. Solo tú y tus médicos lo ven.</span>
      </div>
      <Segmented label="Sección del expediente" size="small" value={st.expTab} onChange={v => set({ expTab: v })}
        options={[{ id: 'ficha', label: 'Ficha' }, { id: 'historial', label: 'Historial' }, { id: 'recetas', label: 'Recetas' }, { id: 'resultados', label: 'Resultados' }]} />

      {st.expTab === 'ficha' && <>
        <dl className="list-card" style={{ margin: 0 }}>
          {FICHA.map(([icon, k, v]) => (
            <div key={k} className="row">
              <Icon name={icon} size={18} color="var(--muted-foreground)" />
              <dt className="grow" style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>{k}</dt>
              <dd style={{ margin: 0, fontSize: 14, fontWeight: 600, textAlign: 'right' }}>{v}</dd>
            </div>
          ))}
        </dl>
        <Button variant="secondary" full onClick={() => done('ficha')}>Actualizar mi ficha médica</Button>
      </>}

      {st.expTab === 'historial' && (
        dataState === 'cargando' ? <SkeletonList /> :
        dataState === 'error' ? <ErrorState title="No pudimos cargar tu historial" body="Revisa tu conexión e intenta de nuevo. Tus datos están seguros." onRetry={retry} /> :
        dataState === 'vacio' ? <EmptyState icon="clipboard-text" title="Aún no tienes consultas" body="Cuando te atienda un médico, aquí verás el resumen y tus recetas."
          action={<Button size="md" onClick={() => startForm('medico')}>Iniciar consulta médica</Button>} /> :
        HISTORIAL.map(h => (
          <button key={h.fecha} type="button" onClick={() => go('detalle')} className="tap card card-18 row">
            <IconBox icon={h.icon} bg={h.bg} fg={h.fg} />
            <span className="grow stack" style={{ gap: 2 }}><span className="t-title">{h.tipo}</span><span className="t-muted">{h.doc} · {h.fecha}</span></span>
            <Badge tone="ok">Completada</Badge>
          </button>
        ))
      )}

      {st.expTab === 'recetas' && RECETAS.map(([med, meta]) => (
        <DocRow key={med} icon="pill" bg="var(--mint-50)" fg="var(--mint-600)" title={med} meta={meta} actionIcon="download-simple" actionLabel={`Descargar receta de ${med} en PDF`}
          onClick={() => page('documento', { doc: 'receta', docTitle: med })} />
      ))}

      {st.expTab === 'resultados' && RESULTADOS.map(([name, meta]) => (
        <DocRow key={name} icon="flask" bg="var(--blue-50)" fg="var(--navy-800)" title={name} meta={meta} actionIcon="file-text" actionLabel={`Ver resultado de ${name} en PDF`}
          onClick={() => page('documento', { doc: 'resultado', docTitle: name })} />
      ))}
    </div>
  );
}

export function Detalle() {
  const { st, set, page, toast } = useApp();
  return (
    <div className="screen sub" style={{ gap: 14 }}>
      <div className="card card-pad stack" style={{ gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar initials="EF" size={52} />
          <span className="grow stack" style={{ gap: 2 }}>
            <span className="h-16">Dr. Emanuel Flores</span>
            <span className="t-muted">Médico general · Registro 73222</span>
          </span>
          <Badge tone="ok">Completada</Badge>
        </div>
        <dl style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, margin: 0 }}>
          {DETALLE.map(([k, v]) => (
            <div key={k} className="stack" style={{ gap: 2 }}><dt style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>{k}</dt><dd style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{v}</dd></div>
          ))}
        </dl>
      </div>
      <h2 className="h-16" style={{ letterSpacing: 0 }}>Receta</h2>
      <div className="card card-18 card-pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Icon name="pill" size={20} color="var(--mint-600)" />
        <span className="grow stack"><span className="t-title">Ibuprofeno 600 mg</span><span className="t-muted">Receta #1</span></span>
        <Button variant="secondary" size="md" icon="download-simple" iconSize={15} style={{ padding: '0 14px' }} aria-label="Descargar receta en PDF"
          onClick={() => page('documento', { doc: 'receta', docTitle: 'Ibuprofeno 600 mg' })}>PDF</Button>
      </div>
      <button type="button" aria-expanded={st.showTiempos} onClick={() => set(s => ({ showTiempos: !s.showTiempos }))} className="btn btn-ghost btn-md" style={{ alignSelf: 'flex-start', padding: 0 }}>
        <Icon name="clock" size={15} />{st.showTiempos ? 'Ocultar registro de tiempos' : 'Ver registro de tiempos'}
      </button>
      {st.showTiempos && (
        <dl className="list-card r18" style={{ margin: 0 }}>
          {TIEMPOS.map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', fontSize: 14 }}><dt style={{ color: 'var(--muted-foreground)' }}>{k}</dt><dd style={{ margin: 0, fontWeight: 600 }}>{v}</dd></div>
          ))}
        </dl>
      )}
      {/* TODO(API): GET /consultations/:id/summary.pdf */}
      <Button full onClick={() => toast('Descargando resumen en PDF')}>Descargar resumen en PDF</Button>
    </div>
  );
}
