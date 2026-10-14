import { useState, type ReactNode } from 'react';
import { Icon } from '../ui/Icon';
import { Badge, Button, CheckboxBox, EmptyState, ErrorState, Field, IconButton, SearchBox, Segmented, SkeletonList, Toggle, type Tone } from '../ui/components';
import logo from '../assets/easymd-icon.png';

const SWATCHES = [
  ['var(--color-primary)', 'Navy', 'Texto y CTA', '#0B1F3A'], ['var(--mint-500)', 'Menta', 'Marca y activo', '#2BB98A'],
  ['var(--cta-blue)', 'Azul', 'Enlaces y foco', '#0EA5E9'], ['var(--serene-600)', 'Serene', 'Psicología', '#5F68B0'],
  ['var(--app-bg)', 'Fondo', 'Pantallas', '#F1F4F7'], ['var(--warning)', 'Ámbar', 'Advertencia', '#F59E0B'], ['var(--danger)', 'Rojo', 'Error y destruir', '#E0533D'],
];
const BADGES: [string, Tone][] = [['Plan activo', 'ok'], ['Incluido', 'ok'], ['Descuento', 'info'], ['En curso', 'info'], ['Pendiente', 'warn'], ['Cancelada', 'danger'], ['Verificado', 'neutral'], ['Psicología', 'wellness'], ['Muy pronto', 'soon']];

function Panel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card stack" style={{ borderRadius: 22, padding: 20, gap: 14 }}>
      <h2 className="h-16" style={{ letterSpacing: 0 }}>{title}</h2>
      {children}
    </section>
  );
}

export function DesignSystemPage() {
  const [seg, setSeg] = useState<'a' | 'b'>('a');
  const [on, setOn] = useState(true);
  const [chk, setChk] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: '40px 24px 80px', maxWidth: 1320, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
      <header className="stack" style={{ gap: 14, maxWidth: 860 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src={logo} alt="EasyMD" width={40} height={40} />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted-foreground)' }}>Design system · App de pacientes v2</span>
        </div>
        <h1 style={{ fontSize: 42, lineHeight: 1.1 }}>Componentes del rediseño</h1>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--muted-foreground)', maxWidth: 720 }}>
          Sobre los tokens de EasyMD. El navy reemplaza al menta en los botones principales para cumplir contraste AA; el menta queda para marca, éxito y estado activo.
        </p>
        <nav style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }} aria-label="Vistas de la app">
          <a className="btn btn-primary btn-md" style={{ color: 'var(--white)' }} href="./">Abrir la app</a>
          <a className="btn btn-secondary btn-md" href="./?onb">Ver onboarding</a>
          <a className="btn btn-secondary btn-md" href="./?estado=cargando">Listas cargando</a>
          <a className="btn btn-secondary btn-md" href="./?estado=vacio">Listas vacías</a>
          <a className="btn btn-secondary btn-md" href="./?estado=error">Listas con error</a>
        </nav>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: 16 }}>
        <Panel title="Color">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
            {SWATCHES.map(([v, n, use, hex]) => (
              <span key={n} className="stack" style={{ gap: 4 }}>
                <span style={{ height: 48, borderRadius: 12, background: v, border: '1px solid var(--border)' }} />
                <span style={{ fontSize: 12, fontWeight: 600 }}>{n} <span style={{ fontWeight: 400, color: 'var(--muted-foreground)' }}>{hex}</span></span>
                <span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{use}</span>
              </span>
            ))}
          </div>
          <div className="stack" style={{ gap: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Degradados de marca</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
              {[['var(--grad-medico)', 'Médico'], ['var(--grad-psico)', 'Psicología'], ['var(--grad-plan)', 'Plan']].map(([g, n]) => (
                <span key={n} className="stack" style={{ gap: 4 }}><span style={{ height: 48, borderRadius: 12, background: g }} /><span style={{ fontSize: 11, color: 'var(--muted-foreground)' }}>{n}</span></span>
              ))}
            </div>
          </div>
        </Panel>

        <Panel title="Tipografía">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 26, letterSpacing: '-0.02em' }}>Título 26 · Jakarta</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 18 }}>Subtítulo 18 · Jakarta</span>
          <span style={{ fontSize: 15, lineHeight: 1.55 }}>Cuerpo 15–16 · Inter, interlineado 1.5</span>
          <span className="t-muted">Secundario 13 · Inter</span>
          <span style={{ fontSize: 12, fontWeight: 600 }}>Etiqueta 12 · Inter semibold</span>
          <span className="t-small" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            Iconos Phosphor duotone 18–22 px
            <Icon name="stethoscope" size={20} color="var(--navy-800)" /><Icon name="brain" size={20} color="var(--serene-600)" /><Icon name="pill" size={20} color="var(--mint-600)" />
          </span>
        </Panel>

        <Panel title="Botones">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Button size="md">Primario</Button>
            <Button size="md" variant="secondary">Secundario</Button>
            <Button size="md" variant="ghost">Ghost</Button>
            <Button size="md" variant="danger">Destructivo</Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <Button size="sm">sm</Button><Button size="md">md</Button><Button size="ml">ml</Button><Button size="lg">lg</Button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <Button size="md" style={{ outline: '2px solid var(--cta-blue)', outlineOffset: 2 }}>Foco</Button>
            <Button size="md" loading={loading} onClick={() => { setLoading(true); setTimeout(() => setLoading(false), 1500); }}>{loading ? 'Cargando' : 'Probar carga'}</Button>
            <Button size="md" disabled>Deshabilitado</Button>
            <Button size="md" variant="success" icon="check">Listo</Button>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <IconButton icon="chat-circle-dots" label="Mensajes" dot />
            <IconButton icon="shopping-cart-simple" label="Carrito" count={2} />
            <IconButton icon="arrow-left" label="Regresar" size={20} />
          </div>
        </Panel>

        <Panel title="Campos">
          <Field label="Nombre completo">{id => <input id={id} className="input" defaultValue="Nicolás Rivas" />}</Field>
          <Field label="Teléfono" error="Escribe los 8 dígitos de tu número.">{id => <input id={id} className="input" defaultValue="8909" aria-invalid />}</Field>
          <SearchBox label="Buscar" placeholder="Busca un médico, examen o medicamento" />
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <button type="button" role="checkbox" aria-checked={chk} onClick={() => setChk(!chk)} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, border: 'none', background: 'none', cursor: 'pointer', minHeight: 44 }}><CheckboxBox on={chk} />Checkbox</button>
            <button type="button" role="switch" aria-checked={on} onClick={() => setOn(!on)} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, border: 'none', background: 'none', cursor: 'pointer', minHeight: 44 }}><Toggle on={on} />Toggle</button>
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, height: 44, padding: '0 12px', borderRadius: 12, border: '1px solid var(--border-strong)', fontSize: 14 }}><Icon name="calendar-blank" size={16} color="var(--muted-foreground)" />14 oct 2026</span>
          </div>
          <Segmented label="Ejemplo" value={seg} onChange={setSeg} options={[{ id: 'a', label: 'En curso' }, { id: 'b', label: 'Completadas' }]} />
        </Panel>

        <Panel title="Badges">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {BADGES.map(([t, tone]) => <Badge key={t} tone={tone} style={{ padding: '4px 10px' }}>{t}</Badge>)}
          </div>
          <span className="t-small">Siempre con texto; el color nunca es el único indicador.</span>
        </Panel>

        <Panel title="Estados">
          <SkeletonList height={64} />
          <div className="note ok" style={{ fontSize: 13, padding: '10px 12px', borderRadius: 12 }}><Icon name="check-circle" size={16} color="var(--mint-600)" />Éxito: qué pasó y qué sigue</div>
          <div className="note warn" style={{ padding: '10px 12px', borderRadius: 12 }}><Icon name="warning" size={16} color="var(--warning-700)" />Advertencia: acción recomendada</div>
          <div className="note danger" style={{ padding: '10px 12px', borderRadius: 12 }}><Icon name="warning-circle" size={16} color="var(--danger-700)" />Error empático con reintento</div>
          <EmptyState variant="dashed" icon="tray" iconSize={22} body="Vacío: explicación + CTA" action={<Button variant="ghost" size="md">Acción</Button>} />
          <ErrorState title="No pudimos cargar tus órdenes" onRetry={() => {}} />
        </Panel>
      </div>
    </div>
  );
}
