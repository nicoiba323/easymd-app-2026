import { useState } from 'react';
import { useApp } from '../state/store';
import { Icon, type IconName } from '../ui/Icon';
import { Avatar, Button, Field } from '../ui/components';
import { EXITO, FAMILY, PLAN, USER } from '../data/mock';
import logo from '../assets/easymd-icon.png';

export function Cuenta() {
  const { tab, page, go, openSheet } = useApp();
  const ajustes: [IconName, string, () => void][] = [
    ['heart', 'Favoritos', () => tab('servicios', { srvTab: 'favs' })],
    ['user', 'Datos personales', () => page('datos')],
    ['credit-card', 'Métodos de pago', () => page('pagos')],
    ['map-pin', 'Direcciones', () => page('direcciones')],
    ['question', 'Preguntas frecuentes', () => page('faq')],
    ['lifebuoy', 'Ayuda y soporte', () => go('mensajes')],
    ['siren', 'Urgencias', () => openSheet('urgencias')],
  ];
  return (
    <div className="screen sub" style={{ gap: 14 }}>
      <section className="stack" aria-label="Tu plan" style={{ background: 'radial-gradient(120% 90% at 100% 0%, rgba(79,209,161,0.35) 0%, transparent 55%), linear-gradient(160deg, var(--navy-deep) 0%, var(--navy-900) 100%)', borderRadius: 22, padding: 18, gap: 14, color: 'var(--white)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <span className="stack" style={{ gap: 2 }}>
            <span style={{ fontSize: 13, opacity: 0.85 }}>Tu plan</span>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22 }}>{PLAN.name}</span>
          </span>
          <span className="chip" style={{ fontWeight: 700, padding: '4px 10px', background: 'var(--mint-300)', color: 'var(--navy-900)' }}>Activo</span>
        </div>
        <span style={{ fontSize: 14 }}>US${PLAN.price} al mes · Renueva el {PLAN.renews}</span>
        <button type="button" onClick={() => openSheet('beneficios')} className="btn btn-md" style={{ border: '1px solid rgba(255,255,255,0.4)', background: 'none', color: 'var(--white)', fontWeight: 700 }}>Ver qué incluye</button>
      </section>
      <section className="card card-pad stack" style={{ gap: 12 }}>
        <h2 className="h-card" style={{ letterSpacing: 0 }}>Familia</h2>
        <ul style={{ display: 'flex', gap: 14, flexWrap: 'wrap', listStyle: 'none', margin: 0, padding: 0 }}>
          {FAMILY.map(([i, n]) => (
            <li key={n} className="stack" style={{ alignItems: 'center', gap: 6 }}><Avatar initials={i} size={48} /><span className="t-small">{n}</span></li>
          ))}
          <li>
            <button type="button" onClick={() => page('familiar')} className="stack" style={{ alignItems: 'center', gap: 6, border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}>
              <span style={{ width: 48, height: 48, borderRadius: '50%', border: '1.5px dashed var(--border-strong)', color: 'var(--muted-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="plus" size={20} /></span>
              <span className="t-small">Agregar</span>
            </button>
          </li>
        </ul>
      </section>
      <nav className="list-card" aria-label="Ajustes">
        {ajustes.map(([icon, label, onClick]) => (
          <button key={label} type="button" onClick={onClick} className="tap" style={{ display: 'flex', alignItems: 'center', gap: 14, minHeight: 52, padding: '0 16px' }}>
            <Icon name={icon} size={19} color="var(--muted-foreground)" />
            <span className="grow" style={{ fontSize: 15 }}>{label}</span>
            <Icon name="caret-right" size={18} color="var(--subtle-foreground)" />
          </button>
        ))}
      </nav>
      <Button variant="danger-text" size="ml" onClick={() => openSheet('logout')}>Cerrar sesión</Button>
    </div>
  );
}

export function Login() {
  const { tab, toast, startOnboarding } = useApp();
  const [phone, setPhone] = useState(USER.phone);
  const [err, setErr] = useState('');
  const submit = () => {
    if (phone.replace(/\D/g, '').length < 8) return setErr('Escribe tu número completo.');
    // TODO(API): POST /auth/otp → pantalla de código.
    tab('inicio'); toast('Sesión iniciada');
  };
  return (
    <form className="screen" style={{ padding: 24, gap: 18 }} noValidate onSubmit={e => { e.preventDefault(); submit(); }}>
      <img src={logo} alt="EasyMD" width={64} height={64} style={{ marginTop: 24 }} />
      <h1 style={{ fontSize: 28, lineHeight: 1.2 }}>Te damos la bienvenida a EasyMD</h1>
      <p className="t-body">Médico 24/7, psicología ilimitada y descuentos en un solo lugar.</p>
      <Field label="Número de teléfono" hint="Te enviaremos un código por SMS." error={err || undefined}>
        {(id, hint) => <input id={id} className="input" type="tel" inputMode="tel" autoComplete="tel" value={phone} aria-invalid={!!err} aria-describedby={hint}
          onChange={e => { setPhone(e.target.value); setErr(''); }} />}
      </Field>
      <div className="push-bottom" style={{ gap: 8 }}>
        <Button type="submit" full>Entrar</Button>
        <Button variant="ghost" size="md" onClick={startOnboarding}>¿Eres nuevo? Crea tu cuenta</Button>
      </div>
    </form>
  );
}

export function Exito() {
  const { st, tab } = useApp();
  const ex = st.exito === 'cita'
    ? { title: EXITO.cita.title, body: `${st.cita?.name ?? ''}, ${st.cita?.when.replace(' · ', ' a las ') ?? ''}. La verás en Consultas.` }
    : st.exito ? EXITO[st.exito] : { title: '', body: '' };
  return (
    <div className="screen" role="status" style={{ padding: 24, alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 14 }}>
      <span style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--mint-50)', color: 'var(--mint-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={40} /></span>
      <h1 style={{ fontSize: 24, letterSpacing: 0, lineHeight: 1.3, textWrap: 'pretty' }}>{ex.title}</h1>
      <p className="t-body" style={{ maxWidth: 290 }}>{ex.body}</p>
      <div className="stack" style={{ width: '100%', marginTop: 10 }}>
        <Button full onClick={() => tab('inicio')}>Volver al inicio</Button>
      </div>
    </div>
  );
}
