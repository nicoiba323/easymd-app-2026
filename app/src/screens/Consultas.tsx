import { useApp } from '../state/store';
import { Icon } from '../ui/Icon';
import { Badge, Button, EmptyState, Field, IconBox, NavRow, Segmented, Toggle } from '../ui/components';
import { CONCIERGE_FEATURES, CONSULT_FOR } from '../data/mock';
import { ConciergeCard } from './Inicio';

export function Consultas() {
  const { st, go, tab, startForm } = useApp();
  const goEsp = () => go('especialistas', { cat: 'Todos' });
  return (
    <div className="screen">
      <h1 className="h-page">Consultas</h1>
      <div className="grid-fit">
        {([['medico', 'stethoscope', 'Médico 24/7', 'Espera menor a 5 min', 'var(--mint-50)', 'var(--mint-600)'],
          ['psico', 'brain', 'Psicología', 'Ilimitada', 'var(--color-wellness-soft)', 'var(--color-wellness)']] as const).map(([k, icon, t, sub, bg, fg]) => (
          <button key={k} type="button" onClick={() => startForm(k)} className="tap card card-pad stack" style={{ gap: 10 }}>
            <IconBox icon={icon} size={20} bg={bg} fg={fg} />
            <span className="h-card">{t}</span>
            <span className="t-small">{sub}</span>
          </button>
        ))}
      </div>
      <NavRow icon="first-aid" title="Agenda con un especialista" sub="Presencial, con descuento" onClick={goEsp} />
      <ConciergeCard />
      <section className="stack" style={{ gap: 10 }}>
        <h2 className="h-section" style={{ margin: 0, letterSpacing: 0 }}>Próximas citas</h2>
        {st.cita ? (
          <div className="card card-18 card-pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Icon name="calendar-check" size={22} color="var(--mint-600)" />
            <span className="grow stack">
              <span className="t-title">{st.cita.name}</span>
              <span className="t-muted">{st.cita.when}</span>
            </span>
            <Badge tone="info">Confirmada</Badge>
          </div>
        ) : (
          <EmptyState variant="dashed" icon="calendar-blank" iconSize={26} body="No tienes citas próximas."
            action={<button type="button" className="btn btn-ghost btn-md" onClick={goEsp}>Agendar con especialista</button>} />
        )}
      </section>
      <Button variant="secondary" size="ml" icon="clipboard-text" iconSize={18} onClick={() => tab('expediente', { expTab: 'historial' })}>Ver consultas anteriores</Button>
    </div>
  );
}

export function ConsultaForm() {
  const { st, set, go, submitConsult, openSheet } = useApp();
  const psico = st.kind === 'psico';
  return (
    <div className="screen sub" style={{ gap: 20 }}>
      <Badge tone="ok" style={{ alignSelf: 'flex-start', fontSize: 13, padding: '4px 10px', gap: 6 }}>
        <Icon name="seal-check" size={14} />{psico ? 'Ilimitada en tu plan' : 'Incluida en tu plan · menos de 5 min'}
      </Badge>
      <Field label="¿Para quién es la consulta?" roomy>
        {id => (
          <select id={id} className="input" value={st.who} onChange={e => set({ who: e.target.value })}>
            {CONSULT_FOR.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        )}
      </Field>
      <Field label="¿Qué sientes?" error={st.error || undefined} roomy>
        {id => (
          <textarea id={id} className="input" rows={3} value={st.motivo} aria-invalid={!!st.error}
            placeholder={psico ? 'Ej.: me siento ansioso y no duermo bien' : 'Ej.: dolor de cabeza y fiebre desde ayer'}
            onChange={e => set({ motivo: e.target.value, error: '' })} />
        )}
      </Field>
      <div className="field roomy">
        <span className="field-label" id="metodo-label">¿Cómo prefieres?</span>
        <Segmented label="¿Cómo prefieres?" tall value={st.metodo} onChange={v => set({ metodo: v })}
          options={[{ id: 'video', label: 'Videollamada', icon: 'video-camera' }, { id: 'chat', label: 'Chat', icon: 'chat-text' }]} />
      </div>
      <div className="note">
        <Icon name="lock-simple" size={16} style={{ marginTop: 1 }} />
        <span>El profesional verá tu ficha médica para atenderte mejor.{' '}
          <button type="button" onClick={() => go('expediente', { expTab: 'ficha' })} style={{ padding: 0, border: 'none', background: 'none', cursor: 'pointer', font: 'inherit', fontWeight: 600, color: 'var(--cta-blue)', textDecoration: 'underline' }}>Revisar mi ficha</button>
        </span>
      </div>
      <div className="push-bottom">
        <Button loading={st.submitting} onClick={submitConsult} full>
          {st.submitting ? 'Preparando tu consulta…' : psico ? 'Iniciar consulta psicológica' : 'Iniciar consulta médica'}
        </Button>
        <Button variant="danger-text" size="md" icon="siren" onClick={() => openSheet('urgencias')}>¿Es una emergencia?</Button>
      </div>
    </div>
  );
}

export function Conectando() {
  const { st, openSheet } = useApp();
  return (
    <div className="screen sub" style={{ padding: '8px 20px 24px', gap: 22, animation: 'none' }}>
      <div className="stack" style={{ alignItems: 'center', gap: 14, textAlign: 'center', paddingTop: 12 }} aria-live="polite">
        <span style={{ width: 96, height: 96, borderRadius: '50%', background: 'var(--mint-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--white)', color: 'var(--mint-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
            <Icon name={st.metodo === 'video' ? 'video-camera' : 'chat-text'} size={28} />
          </span>
        </span>
        <h2 style={{ fontSize: 22, letterSpacing: 0, lineHeight: 1.3 }}>Buscando a tu {st.kind === 'psico' ? 'psicólogo' : 'médico'}</h2>
        <p className="t-body" style={{ maxWidth: 280, lineHeight: 1.5 }}>Tiempo estimado: menos de 5 min. Busca un lugar tranquilo.</p>
      </div>
      <ul className="list-card r18" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {([['camera', 'Cámara'], ['microphone', 'Micrófono'], ['wifi-high', 'Conexión estable']] as const).map(([icon, label]) => (
          <li key={label} className="row">
            <Icon name={icon} size={18} color="var(--muted-foreground)" />
            <span className="grow" style={{ fontSize: 15 }}>{label}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 600, color: 'var(--mint-700)' }}><Icon name="check-circle" size={16} />Listo</span>
          </li>
        ))}
      </ul>
      <div className="push-bottom">
        <Button variant="secondary" full onClick={() => openSheet('cancelar')}>Cancelar consulta</Button>
      </div>
    </div>
  );
}

export function Concierge() {
  const { st, set, toast, startForm } = useApp();
  return (
    <div className="screen sub" style={{ gap: 16 }}>
      <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 26, padding: 22, color: 'var(--white)', display: 'flex', flexDirection: 'column', gap: 14,
        background: 'radial-gradient(90% 70% at 100% 0%, rgba(79,209,161,0.5) 0%, transparent 60%), radial-gradient(80% 60% at 0% 100%, rgba(144,152,214,0.55) 0%, transparent 60%), linear-gradient(160deg, var(--navy-deep) 0%, var(--navy-900) 100%)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ width: 52, height: 52, borderRadius: 18, background: 'rgba(255,255,255,0.14)', color: 'var(--mint-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="sparkle" size={30} /></span>
          <span className="chip" style={{ fontWeight: 700, padding: '4px 12px', background: 'var(--mint-300)', color: 'var(--navy-900)' }}>Muy pronto</span>
        </div>
        <h2 style={{ fontSize: 24, letterSpacing: 0, lineHeight: 1.2, color: 'var(--white)' }}>Tu asistente de salud con IA</h2>
        <p style={{ fontSize: 15, lineHeight: 1.55, opacity: 0.92 }}>Resolverá tus dudas y hará trámites por ti, en español y a cualquier hora.</p>
      </div>
      <ul className="list-card" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {CONCIERGE_FEATURES.map(([icon, t]) => (
          <li key={t} className="row"><IconBox icon={icon} size={20} /><span style={{ fontSize: 14, lineHeight: 1.45 }}>{t}</span></li>
        ))}
      </ul>
      <button type="button" role="switch" aria-checked={st.notify} className="tap card row"
        onClick={() => { toast(st.notify ? 'Aviso desactivado' : 'Te avisaremos cuando esté listo'); set(s => ({ notify: !s.notify })); }}>
        <Icon name="bell-ringing" size={22} color="var(--navy-800)" />
        <span className="grow stack">
          <span className="t-title">Avísame cuando esté listo</span>
          <span className="t-muted">Te enviaremos una notificación</span>
        </span>
        <Toggle on={st.notify} />
      </button>
      <div className="push-bottom" style={{ gap: 8, textAlign: 'center' }}>
        <span className="t-muted">Mientras tanto, un médico te atiende en menos de 5 min.</span>
        <Button full onClick={() => startForm('medico')}>Iniciar consulta médica</Button>
      </div>
    </div>
  );
}
