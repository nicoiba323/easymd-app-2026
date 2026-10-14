import { useApp } from '../state/store';
import { Icon, type IconName } from '../ui/Icon';
import { Badge, IconButton, SearchBox } from '../ui/components';
import { CartButton } from '../shell/AppShell';
import { MOODS, PLAN, USER } from '../data/mock';
import { useServices } from './Servicios';

export function ConciergeCard() {
  const { go } = useApp();
  return (
    <button type="button" onClick={() => go('concierge')} className="tap card row press" style={{ background: 'linear-gradient(110deg, var(--white) 40%, var(--mint-50) 100%)' }}>
      <span className="icon-box" style={{ background: 'var(--grad-navy-icon)', color: 'var(--mint-300)' }}><Icon name="sparkle" size={22} /></span>
      <span className="grow stack" style={{ gap: 2 }}>
        <span className="h-card">Asistente EasyMD</span>
        <span className="t-small">Tu asistente de salud con IA</span>
      </span>
      <Badge tone="soon">Muy pronto</Badge>
    </button>
  );
}

function HeroCard({ kind, title, sub, icon, onClick }: { kind: 'medico' | 'psico'; title: string; sub: string; icon: IconName; onClick: () => void }) {
  const medico = kind === 'medico';
  return (
    <button type="button" onClick={onClick} className={`hero-card press-strong ${kind}`}>
      <span className="hero-icon" style={{ background: medico ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.16)', color: medico ? 'var(--mint-300)' : 'var(--white)' }}>
        <Icon name={icon} size={28} />
      </span>
      <span className="stack" style={{ gap: 4 }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>{title}</span>
        <span style={{ fontSize: 12, opacity: 0.9 }}>{sub}</span>
      </span>
      <span className="hero-cta" style={{ color: medico ? 'var(--navy-900)' : 'var(--serene-700)' }}>
        Iniciar
        <span className="hero-cta-dot" style={{ background: medico ? 'var(--mint-500)' : 'var(--serene-500)' }}><Icon name="arrow-right" size={15} /></span>
      </span>
    </button>
  );
}

export function Inicio() {
  const { st, go, tab, startForm, openSheet } = useApp();
  const services = useServices().slice(0, 4);
  const mood = MOODS.find(m => m.id === st.mood);
  return (
    <div className="screen">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button type="button" aria-label="Mi cuenta" onClick={() => go('cuenta')} className="avatar" style={{ width: 44, height: 44, border: 'none', background: 'var(--color-primary)', color: 'var(--white)', fontSize: 16, cursor: 'pointer' }}>{USER.initial}</button>
        <span className="grow stack" style={{ gap: 3 }}>
          <h1 style={{ margin: 0, fontSize: 20, letterSpacing: 0, lineHeight: 1.3 }}>Hola, {USER.first}</h1>
          <Badge tone="ok" style={{ alignSelf: 'flex-start', padding: '2px 9px' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--mint-500)' }} />{PLAN.name} activo
          </Badge>
        </span>
        <IconButton icon="chat-circle-dots" label="Mensajes, 1 nuevo" dot onClick={() => go('mensajes')} />
        <CartButton />
      </div>

      <SearchBox label="Buscar" placeholder="Busca un médico, examen o medicamento" />

      <section className="stack" style={{ gap: 10, animation: 'emdUp .45s ease-out both' }} aria-label="Iniciar atención">
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: 'var(--mint-700)' }}>
          <span className="live-dot" />Profesionales en línea ahora
        </span>
        <div className="grid-2">
          <HeroCard kind="medico" title="Consulta médica" sub="24/7 · menos de 5 min" icon="stethoscope" onClick={() => startForm('medico')} />
          <HeroCard kind="psico" title="Consulta psicológica" sub="Ilimitada en tu plan" icon="brain" onClick={() => startForm('psico')} />
        </div>
      </section>

      <button type="button" onClick={() => go('animo')} className="tap card row press" style={{ background: 'linear-gradient(90deg, var(--mint-50) 0%, var(--blue-50) 100%)', animation: 'emdUp .45s .08s ease-out both' }}>
        <span className="icon-box" style={{ background: 'var(--white)' }}><Icon name="smiley-meh" size={22} /></span>
        <span className="grow stack" style={{ gap: 2 }}>
          <span className="h-card">¿Cómo te sientes hoy?</span>
          <span className="t-small">{st.moodSaved && mood ? 'Hoy: ' + mood.label : 'Registra cómo te sientes'}</span>
        </span>
        <Icon name="caret-right" size={18} color="var(--muted-foreground)" />
      </button>

      <ConciergeCard />

      <button type="button" onClick={() => openSheet('beneficios')} className="tap row" style={{ padding: 16, gap: 14, borderRadius: 20, background: 'var(--grad-plan)', color: 'var(--white)' }}>
        <Icon name="seal-check" size={24} color="var(--mint-300)" />
        <span className="grow stack" style={{ gap: 2 }}>
          <span className="h-card" style={{ color: 'var(--white)' }}>Qué incluye tu plan</span>
          <span style={{ fontSize: 13, opacity: 0.85 }}>Médico 24/7, psicología y descuentos</span>
        </span>
        <Icon name="caret-right" size={20} />
      </button>

      <section className="stack" style={{ gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 className="h-section" style={{ margin: 0, letterSpacing: 0 }}>Servicios</h2>
          <button type="button" className="btn btn-ghost btn-md" onClick={() => tab('servicios')}>Ver todos</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(72px, 1fr))', gap: 10 }}>
          {services.map(s => (
            <button key={s.id} type="button" onClick={s.onClick} className="tap card" style={{ padding: '12px 4px', borderRadius: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <Icon name={s.icon} size={22} color="var(--navy-800)" />
              <span style={{ fontSize: 12, fontWeight: 600 }}>{s.name}</span>
            </button>
          ))}
        </div>
      </section>

      <button type="button" onClick={() => go('detalle')} className="tap card card-18 row">
        <Icon name="file-text" size={20} color="var(--muted-foreground)" />
        <span className="grow stack">
          <span className="t-title" style={{ fontSize: 14 }}>Última consulta · 24 sep</span>
          <span className="t-muted">Dr. Emanuel Flores · Receta disponible</span>
        </span>
        <Icon name="caret-right" size={18} color="var(--subtle-foreground)" />
      </button>
    </div>
  );
}
