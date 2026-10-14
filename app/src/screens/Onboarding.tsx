import { useState, type CSSProperties } from 'react';
import { useApp } from '../state/store';
import { Icon } from '../ui/Icon';
import { CheckboxBox, Field, FieldError, IconButton, Segmented, Toggle, Button } from '../ui/components';
import { ONB_ALERGIAS, ONB_CONDICIONES, ONB_PERMS, ONB_PLAN_INCL, PLAN } from '../data/mock';
import logo from '../assets/easymd-icon.png';

const SLIDES = [
  { title: 'Un médico en menos de 5 minutos', body: 'Consulta por video o chat, las 24 horas, desde donde estés.', bg: 'radial-gradient(90% 70% at 100% 0%, rgba(79,209,161,0.45) 0%, transparent 60%), linear-gradient(150deg, var(--navy-deep), var(--navy-900))' },
  { title: 'Psicología ilimitada', body: 'Habla con un psicólogo certificado cuando lo necesites, sin límite de sesiones.', bg: 'radial-gradient(90% 70% at 0% 0%, rgba(178,184,228,0.6) 0%, transparent 60%), linear-gradient(150deg, var(--serene-500), var(--serene-700))' },
  { title: 'Descuentos para ti y tu familia', body: 'Ahorra en farmacia, laboratorio y especialistas con tu plan.', bg: 'radial-gradient(90% 70% at 100% 100%, rgba(119,224,187,0.55) 0%, transparent 60%), linear-gradient(150deg, var(--mint-500), var(--mint-700))' },
];

const abs = (s: CSSProperties): CSSProperties => ({ position: 'absolute', ...s });
const center: CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center' };
const float = (dur: number, reverse = false): CSSProperties => ({ animation: `emdFloat ${dur}s ease-in-out infinite${reverse ? ' reverse' : ''}` });

/* Escenas con volumen (degradados + brillos + sombras). Reemplazables por renders 3D en el mismo espacio de 280 × 270. */
function SceneMedico() {
  return (
    <div style={{ position: 'relative', width: 280, height: 270, perspective: 900 }}>
      <div style={abs({ left: 50, top: 18, width: 170, height: 220, borderRadius: 30, background: 'linear-gradient(160deg, #ffffff 0%, var(--navy-50) 100%)', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.9), inset 0 -10px 20px rgba(11,31,58,0.10), 0 30px 50px rgba(0,10,30,0.45)', transform: 'rotateY(-16deg) rotateX(6deg)', padding: 12, display: 'flex', flexDirection: 'column', gap: 10, ...float(6) })}>
        <div style={{ flex: 1, borderRadius: 20, background: 'radial-gradient(80% 70% at 50% 30%, var(--mint-200) 0%, var(--mint-500) 100%)', position: 'relative', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', overflow: 'hidden' }}>
          <span style={abs({ top: 22, width: 54, height: 54, borderRadius: '50%', background: 'linear-gradient(160deg, #f5d2b8, #d9a37f)', boxShadow: 'inset 0 -6px 10px rgba(120,60,30,0.25)' })} />
          <span style={abs({ top: 14, width: 62, height: 34, borderRadius: '40px 40px 14px 14px', background: 'linear-gradient(160deg, #3b2a22, #1f1510)' })} />
          <span style={{ width: 108, height: 64, borderRadius: '54px 54px 0 0', background: 'linear-gradient(160deg, #ffffff, #dfe7f1)', boxShadow: 'inset 0 3px 0 #fff', position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <span style={{ width: 18, height: 34, marginTop: 4, borderRadius: '0 0 9px 9px', background: 'var(--navy-500)' }} />
          </span>
          <span style={abs({ top: 10, right: 10, display: 'flex', alignItems: 'center', gap: 4, padding: '3px 8px', borderRadius: 999, background: 'rgba(11,31,58,0.75)', color: 'var(--white)', fontSize: 10, fontWeight: 700 })}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--mint-300)' }} />En vivo
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--navy-100)', color: 'var(--navy-800)', ...center }}><Icon name="microphone" size={16} /></span>
          <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'linear-gradient(160deg, #f07a66, var(--danger))', color: 'var(--white)', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.4)', ...center }}><Icon name="phone" size={16} /></span>
          <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--navy-100)', color: 'var(--navy-800)', ...center }}><Icon name="video-camera" size={16} /></span>
        </div>
      </div>
      <div style={abs({ right: 6, top: 6, width: 84, height: 84, borderRadius: 26, background: 'linear-gradient(145deg, var(--mint-300), var(--mint-600))', boxShadow: 'inset 0 3px 0 rgba(255,255,255,0.55), inset 0 -8px 16px rgba(11,31,58,0.25), 0 18px 30px rgba(0,10,30,0.4)', transform: 'rotate(10deg)', ...center, ...float(5, true) })}>
        <Icon name="stethoscope" size={46} color="var(--white)" style={{ filter: 'drop-shadow(0 3px 4px rgba(11,31,58,0.3))' }} />
      </div>
      <div style={abs({ left: 0, bottom: 34, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderRadius: 18, background: 'linear-gradient(160deg, #ffffff, var(--navy-50))', boxShadow: 'inset 0 2px 0 #fff, 0 16px 28px rgba(0,10,30,0.35)', transform: 'rotate(-6deg)', ...float(7) })}>
        <span style={{ width: 30, height: 30, borderRadius: 10, background: 'linear-gradient(145deg, var(--blue-300), var(--cta-blue))', color: 'var(--white)', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.5)', ...center }}><Icon name="clock" size={18} /></span>
        <span className="stack">
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 15, color: 'var(--navy-900)', lineHeight: 1.1 }}>&lt; 5 min</span>
          <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--muted-foreground)' }}>24/7</span>
        </span>
      </div>
    </div>
  );
}

function ScenePsico() {
  const bubble: CSSProperties = { fontSize: 12, fontWeight: 600, lineHeight: 1.35, padding: '10px 12px' };
  return (
    <div style={{ position: 'relative', width: 280, height: 270 }}>
      <div style={abs({ left: 60, top: 40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle at 35% 28%, #ffffff 0%, var(--serene-200) 22%, var(--serene-400) 60%, var(--serene-700) 100%)', boxShadow: 'inset -10px -16px 30px rgba(40,44,100,0.35), 0 30px 50px rgba(20,20,70,0.45)', ...center, ...float(6) })}>
        <Icon name="brain" size={84} color="var(--white)" style={{ filter: 'drop-shadow(0 4px 6px rgba(40,44,100,0.4))' }} />
      </div>
      <div style={abs({ left: 0, top: 8, maxWidth: 150, borderRadius: '18px 18px 18px 6px', background: 'linear-gradient(160deg, #ffffff, var(--serene-50))', boxShadow: 'inset 0 2px 0 #fff, 0 14px 24px rgba(20,20,70,0.3)', color: 'var(--navy-900)', transform: 'rotate(-5deg)', ...bubble, ...float(7, true) })}>¿Cómo te sientes hoy?</div>
      <div style={abs({ right: 0, top: 150, maxWidth: 140, borderRadius: '18px 18px 6px 18px', background: 'linear-gradient(160deg, var(--navy-700), var(--navy-900))', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.15), 0 14px 24px rgba(20,20,70,0.35)', color: 'var(--white)', transform: 'rotate(4deg)', ...bubble, ...float(6.5) })}>Mucho mejor, gracias</div>
      <div style={abs({ right: 14, top: 10, width: 62, height: 62, borderRadius: 20, background: 'linear-gradient(145deg, #ff9f8f, var(--danger))', boxShadow: 'inset 0 3px 0 rgba(255,255,255,0.45), inset 0 -6px 12px rgba(120,20,10,0.25), 0 14px 24px rgba(20,20,70,0.35)', transform: 'rotate(12deg)', ...center, ...float(5) })}>
        <Icon name="heart" size={34} color="var(--white)" />
      </div>
      <div style={abs({ left: 14, bottom: 34, display: 'flex', alignItems: 'center', gap: 6, padding: '8px 12px', borderRadius: 999, background: 'linear-gradient(145deg, var(--mint-300), var(--mint-600))', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.5), 0 12px 22px rgba(20,20,70,0.3)', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 13, transform: 'rotate(-4deg)' })}>
        <Icon name="infinity" size={18} />Sesiones ilimitadas
      </div>
    </div>
  );
}

function SceneDescuentos() {
  const av = (bg: string, ml = 0): CSSProperties => ({ width: 28, height: 28, marginLeft: ml, borderRadius: '50%', background: bg, border: '2px solid #fff', color: '#fff', fontSize: 10, fontWeight: 700, ...center });
  return (
    <div style={{ position: 'relative', width: 280, height: 270 }}>
      <div style={abs({ left: 44, top: 50, width: 180, padding: 14, borderRadius: 24, background: 'linear-gradient(160deg, #ffffff, var(--mint-50))', boxShadow: 'inset 0 2px 0 #fff, inset 0 -8px 16px rgba(11,31,58,0.06), 0 30px 50px rgba(0,40,30,0.4)', transform: 'rotate(-4deg)', display: 'flex', flexDirection: 'column', gap: 8, ...float(6) })}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 34, height: 34, borderRadius: 11, background: 'linear-gradient(145deg, var(--blue-300), var(--navy-500))', color: 'var(--white)', boxShadow: 'inset 0 2px 0 rgba(255,255,255,0.45)', ...center }}><Icon name="flask" size={20} /></span>
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy-900)' }}>Chequeo general</span>
        </span>
        <span style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 22, color: 'var(--navy-900)' }}>US$45</span>
          <s style={{ fontSize: 12, color: 'var(--muted-foreground)' }}>US$60</s>
        </span>
        <span style={{ height: 6, borderRadius: 999, background: 'var(--mint-100)' }}><span style={{ display: 'block', width: '75%', height: '100%', borderRadius: 999, background: 'var(--mint-500)' }} /></span>
      </div>
      <div style={abs({ right: 4, top: 4, width: 76, height: 76, borderRadius: '50%', background: 'radial-gradient(circle at 35% 30%, #ffd9a8 0%, var(--warning) 55%, #c97a06 100%)', boxShadow: 'inset 0 -6px 12px rgba(120,60,0,0.3), 0 16px 26px rgba(0,40,30,0.4)', color: 'var(--white)', fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 20, transform: 'rotate(12deg)', textShadow: '0 2px 3px rgba(120,60,0,0.35)', ...center, ...float(5, true) })}>-25%</div>
      <div style={abs({ left: 6, top: 0, width: 92, height: 38, borderRadius: 999, overflow: 'hidden', display: 'flex', transform: 'rotate(-28deg)', boxShadow: '0 16px 24px rgba(0,40,30,0.35)', ...float(7) })}>
        <span style={{ flex: 1, background: 'linear-gradient(180deg, #ffffff 0%, #e8edf3 60%, #c9d3df 100%)' }} />
        <span style={{ flex: 1, background: 'linear-gradient(180deg, var(--blue-300) 0%, var(--cta-blue) 60%, var(--navy-500) 100%)' }} />
      </div>
      <div style={abs({ left: 60, bottom: 30, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px 8px 8px', borderRadius: 999, background: 'linear-gradient(160deg, #ffffff, var(--navy-50))', boxShadow: 'inset 0 2px 0 #fff, 0 14px 24px rgba(0,40,30,0.3)', transform: 'rotate(3deg)' })}>
        <span style={{ display: 'flex' }}>
          <span style={av('linear-gradient(145deg, var(--navy-400), var(--navy-700))')}>NR</span>
          <span style={av('linear-gradient(145deg, var(--serene-300), var(--serene-600))', -8)}>AR</span>
          <span style={av('linear-gradient(145deg, var(--mint-300), var(--mint-600))', -8)}>MR</span>
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--navy-900)' }}>Tu familia incluida</span>
      </div>
    </div>
  );
}

const SCENES = [SceneMedico, ScenePsico, SceneDescuentos];

interface OnbData {
  phone: string; otp: string; name: string; birth: string; sexo: 'f' | 'm' | 'o' | null; terms: boolean;
  plan: 'empresa' | 'individual'; code: string; ficha: Record<'alergias' | 'cond', string[]>; perms: Record<string, boolean>;
}

const H = ({ title, sub }: { title: string; sub: string }) => (
  <div className="stack" style={{ gap: 6 }}>
    <h1 className="h-page">{title}</h1>
    <p className="t-body">{sub}</p>
  </div>
);

export function Onboarding() {
  const { set: setApp, finishOnboarding, toast } = useApp();
  const [step, setStep] = useState(0);
  const [slide, setSlide] = useState(0);
  const [err, setErr] = useState('');
  const [d, setD] = useState<OnbData>({ phone: '', otp: '', name: '', birth: '', sexo: null, terms: false, plan: 'empresa', code: '', ficha: { alergias: [], cond: [] }, perms: {} });
  const up = (p: Partial<OnbData>) => { setD(x => ({ ...x, ...p })); setErr(''); };
  const goStep = (n: number) => { setStep(n); setErr(''); window.scrollTo(0, 0); };

  // TODO(API): POST /auth/otp (paso 1), POST /auth/verify (2), PUT /me (3), POST /plans/activate o checkout (4), PUT /me/medical-profile (5).
  const next = () => {
    if (step === 1 && d.phone.replace(/\D/g, '').length < 8) return setErr('Escribe un número de 8 dígitos.');
    if (step === 2 && d.otp.length !== 6) return setErr('El código tiene 6 dígitos. Revisa tu SMS o WhatsApp.');
    if (step === 3 && !d.name.trim()) return setErr('Escribe tu nombre para continuar.');
    if (step === 3 && !d.terms) return setErr('Acepta los términos para crear tu cuenta.');
    if (step === 4 && d.plan === 'empresa' && !d.code.trim()) return setErr('Escribe el código que te dio tu empresa.');
    goStep(step + 1);
  };
  const toggleChip = (key: 'alergias' | 'cond', o: string) => setD(x => {
    const cur = x.ficha[key];
    const nx = cur.includes(o) ? cur.filter(v => v !== o) : o === 'Ninguna' ? ['Ninguna'] : [...cur.filter(v => v !== 'Ninguna'), o];
    return { ...x, ficha: { ...x.ficha, [key]: nx } };
  });
  const errBorder = err ? '1.5px solid var(--danger)' : undefined;
  const Scene = SCENES[slide];

  return (
    <div className="screen" style={{ padding: '20px 20px 24px', animation: 'none' }}>
      {step >= 1 && step <= 6 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconButton icon="arrow-left" label="Regresar" size={20} onClick={() => goStep(step - 1)} />
          <div className="grow stack" style={{ gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--muted-foreground)' }}>Paso {step} de 6</span>
            <div className="progress" role="progressbar" aria-valuemin={0} aria-valuemax={6} aria-valuenow={step} aria-label="Progreso del registro"><div style={{ width: Math.round(step / 6 * 100) + '%' }} /></div>
          </div>
        </div>
      )}

      {step === 0 && (
        <div className="stack" style={{ flex: 1, gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src={logo} alt="EasyMD" width={40} height={40} style={{ borderRadius: 10 }} />
            <Button variant="muted" size="md" style={{ padding: '0 12px' }} onClick={() => goStep(1)}>Omitir</Button>
          </div>
          <div key={slide} className="onb-stage" style={{ background: SLIDES[slide].bg }} aria-hidden>
            <span style={abs({ width: 240, height: 240, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', top: -60, right: -60 })} />
            <span style={abs({ width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', bottom: -40, left: -30 })} />
            <span style={abs({ left: '50%', bottom: 26, width: 220, height: 28, marginLeft: -110, borderRadius: '50%', background: 'radial-gradient(closest-side, rgba(11,31,58,0.35), transparent)' })} />
            <Scene />
          </div>
          <div className="stack" style={{ gap: 8 }} aria-live="polite">
            <h1 className="h-page" style={{ textWrap: 'pretty' }}>{SLIDES[slide].title}</h1>
            <p className="t-body">{SLIDES[slide].body}</p>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {SLIDES.map((_, i) => (
              <button key={i} type="button" aria-label={'Ir a la pantalla ' + (i + 1)} aria-current={i === slide || undefined} onClick={() => setSlide(i)}
                style={{ width: i === slide ? 24 : 8, height: 8, borderRadius: 999, border: 'none', padding: 0, cursor: 'pointer', background: i === slide ? 'var(--color-primary)' : 'var(--gray-300)', transition: 'width .3s ease-out' }} />
            ))}
          </div>
          <div className="stack" style={{ gap: 10 }}>
            <Button style={{ borderRadius: 16 }} onClick={() => (slide < 2 ? setSlide(slide + 1) : goStep(1))}>{slide < 2 ? 'Siguiente' : 'Crea tu cuenta'}</Button>
            <Button variant="secondary" size="ml" style={{ borderRadius: 16 }} onClick={() => setApp({ route: 'login', stack: [] })}>Ya tengo cuenta</Button>
          </div>
        </div>
      )}

      {step === 1 && (
        <form className="stack" style={{ flex: 1, gap: 18, animation: 'emdUp .35s ease-out both' }} noValidate onSubmit={e => { e.preventDefault(); next(); }}>
          <H title="Crea tu cuenta" sub="Usaremos tu número para enviarte un código y avisarte de tus consultas." />
          <Field label="Número de teléfono" hint="Te enviaremos un código por SMS o WhatsApp." error={err || undefined}>
            {(id, hint) => (
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="input" style={{ width: 'auto', display: 'flex', alignItems: 'center', padding: '0 12px', fontWeight: 600 }} aria-label="Código de país">+505</span>
                <input id={id} className="input" style={{ flex: 1, border: errBorder }} type="tel" inputMode="tel" autoComplete="tel-national" placeholder="8888 0000"
                  value={d.phone} aria-invalid={!!err} aria-describedby={hint} onChange={e => up({ phone: e.target.value })} />
              </div>
            )}
          </Field>
          <div className="push-bottom">
            <Button type="submit" style={{ borderRadius: 16 }}>Enviar código</Button>
            <span className="t-small" style={{ lineHeight: 1.5, textAlign: 'center' }}>Tus datos de salud están cifrados y solo los ven tus médicos.</span>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className="stack" style={{ flex: 1, gap: 18, animation: 'emdUp .35s ease-out both' }} noValidate onSubmit={e => { e.preventDefault(); next(); }}>
          <H title="Escribe el código" sub={`Lo enviamos a +505 ${d.phone}.`} />
          <Field label="Código de 6 dígitos" error={err || undefined}>
            {id => <input id={id} className="input otp" style={{ border: errBorder }} inputMode="numeric" maxLength={6} placeholder="000000" autoComplete="one-time-code"
              value={d.otp} aria-invalid={!!err} onChange={e => up({ otp: e.target.value.replace(/\D/g, '').slice(0, 6) })} />}
          </Field>
          <Button variant="ghost" size="md" icon="arrow-clockwise" style={{ alignSelf: 'flex-start', padding: 0 }} onClick={() => toast('Código reenviado')}>Reenviar código</Button>
          <div className="push-bottom"><Button type="submit" full style={{ borderRadius: 16 }}>Verificar</Button></div>
        </form>
      )}

      {step === 3 && (
        <form className="stack" style={{ flex: 1, gap: 16, animation: 'emdUp .35s ease-out both' }} noValidate onSubmit={e => { e.preventDefault(); next(); }}>
          <H title="Cuéntanos de ti" sub="Tus médicos usarán estos datos para atenderte." />
          <Field label="Nombre completo">
            {id => <input id={id} className="input" style={{ border: err && !d.name.trim() ? errBorder : undefined }} autoComplete="name" placeholder="Nombre y apellido"
              value={d.name} aria-invalid={!!err && !d.name.trim()} onChange={e => up({ name: e.target.value })} />}
          </Field>
          <Field label="Fecha de nacimiento">
            {id => <input id={id} className="input" inputMode="numeric" placeholder="dd/mm/aaaa" autoComplete="bday" value={d.birth} onChange={e => up({ birth: e.target.value })} />}
          </Field>
          <div className="field">
            <span className="field-label">Sexo</span>
            <Segmented label="Sexo" value={d.sexo} onChange={v => up({ sexo: v })} options={[{ id: 'f', label: 'Femenino' }, { id: 'm', label: 'Masculino' }, { id: 'o', label: 'Otro' }]} />
          </div>
          <button type="button" role="checkbox" aria-checked={d.terms} onClick={() => up({ terms: !d.terms })}
            style={{ textAlign: 'left', display: 'flex', alignItems: 'flex-start', gap: 12, padding: '4px 0', border: 'none', background: 'none', cursor: 'pointer', minHeight: 44 }}>
            <CheckboxBox on={d.terms} />
            <span style={{ fontSize: 13, lineHeight: 1.5 }}>Acepto los <span style={{ color: 'var(--cta-blue)', fontWeight: 600 }}>Términos y condiciones</span> y el <span style={{ color: 'var(--cta-blue)', fontWeight: 600 }}>Aviso de privacidad</span> de EasyMD.</span>
          </button>
          {err && <FieldError>{err}</FieldError>}
          <div className="push-bottom"><Button type="submit" full style={{ borderRadius: 16 }}>Continuar</Button></div>
        </form>
      )}

      {step === 4 && (
        <form className="stack" style={{ flex: 1, gap: 16, animation: 'emdUp .35s ease-out both' }} noValidate onSubmit={e => { e.preventDefault(); next(); }}>
          <H title="Activa tu plan" sub="¿Cómo tienes EasyMD?" />
          <div role="radiogroup" aria-label="Cómo tienes EasyMD" className="stack" style={{ gap: 16 }}>
            {([['empresa', 'buildings', 'Mi empresa me dio EasyMD', 'Actívalo con el código de tu empresa'], ['individual', 'user-circle', 'Quiero contratar un plan', 'Para ti y tu familia']] as const).map(([id, icon, title, sub]) => {
              const on = d.plan === id;
              return (
                <button key={id} type="button" role="radio" aria-checked={on} onClick={() => up({ plan: id })}
                  style={{ textAlign: 'left', padding: 16, borderRadius: 20, border: on ? '2px solid var(--color-primary)' : '1px solid var(--border)', background: on ? 'var(--blue-50)' : 'var(--white)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span className="icon-box lg" style={{ borderRadius: 14, background: 'var(--mint-50)', color: 'var(--mint-700)' }}><Icon name={icon} size={24} /></span>
                  <span className="grow stack" style={{ gap: 2 }}><span className="h-card">{title}</span><span className="t-muted">{sub}</span></span>
                  <span className={'radio' + (on ? ' on' : '')} />
                </button>
              );
            })}
          </div>
          {d.plan === 'empresa' && (
            <Field label="Código de tu empresa" hint="Lo encuentras en el correo de bienvenida de Recursos Humanos." error={err || undefined}>
              {(id, hint) => <input id={id} className="input" style={{ textTransform: 'uppercase', border: errBorder }} placeholder="Ej.: EMPRESA2026" autoCapitalize="characters"
                value={d.code} aria-invalid={!!err} aria-describedby={hint} onChange={e => up({ code: e.target.value })} />}
            </Field>
          )}
          {d.plan === 'individual' && (
            <div className="stack" style={{ padding: 16, borderRadius: 20, color: 'var(--white)', background: 'var(--grad-plan)', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17 }}>{PLAN.name}</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 20 }}>US${PLAN.price}<span style={{ fontSize: 13, fontWeight: 500, opacity: 0.85 }}>/mes</span></span>
              </div>
              {ONB_PLAN_INCL.map(t => <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}><Icon name="check-circle" size={16} color="var(--mint-300)" />{t}</span>)}
            </div>
          )}
          <div className="push-bottom"><Button type="submit" full style={{ borderRadius: 16 }}>{d.plan === 'empresa' ? 'Activar plan' : 'Contratar ' + PLAN.name}</Button></div>
        </form>
      )}

      {step === 5 && (
        <div className="stack" style={{ flex: 1, gap: 18, animation: 'emdUp .35s ease-out both' }}>
          <H title="Tu ficha médica" sub="Ayuda a tu médico desde la primera consulta. Puedes editarla en Expediente." />
          {([['alergias', 'Alergias', 'warning', ONB_ALERGIAS], ['cond', 'Condiciones', 'heartbeat', ONB_CONDICIONES]] as const).map(([key, label, icon, opts]) => (
            <div key={key} className="stack" style={{ gap: 10 }} role="group" aria-label={label}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600 }}><Icon name={icon} size={18} color="var(--navy-800)" />{label}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {opts.map(o => <button key={o} type="button" className="pill" aria-pressed={d.ficha[key].includes(o)} onClick={() => toggleChip(key, o)}>{o}</button>)}
              </div>
            </div>
          ))}
          <div className="push-bottom" style={{ gap: 8 }}>
            <Button style={{ borderRadius: 16 }} onClick={next}>Guardar y continuar</Button>
            <Button variant="muted" size="md" onClick={next}>Completar después</Button>
          </div>
        </div>
      )}

      {step === 6 && (
        <div className="stack" style={{ flex: 1, gap: 18, animation: 'emdUp .35s ease-out both' }}>
          <H title="Prepara tu teléfono" sub="Así tu primera consulta empieza sin esperas." />
          <div className="card" style={{ padding: '4px 16px' }}>
            {ONB_PERMS.map((p, i) => {
              const on = !!d.perms[p.k];
              return (
                <button key={p.k} type="button" role="switch" aria-checked={on} onClick={() => setD(x => ({ ...x, perms: { ...x.perms, [p.k]: !x.perms[p.k] } }))}
                  style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 0', border: 'none', borderTop: i ? '1px solid var(--border)' : 'none', background: 'none', cursor: 'pointer' }}>
                  <span className="icon-box" style={{ background: 'var(--blue-50)' }}><Icon name={p.icon} size={22} /></span>
                  <span className="grow stack" style={{ gap: 2 }}><span className="t-title">{p.title}</span><span className="t-muted" style={{ lineHeight: 1.4 }}>{p.sub}</span></span>
                  <Toggle on={on} wide />
                </button>
              );
            })}
          </div>
          <div className="push-bottom" style={{ gap: 8 }}>
            <Button style={{ borderRadius: 16 }} onClick={next}>Continuar</Button>
            <Button variant="muted" size="md" onClick={next}>Ahora no</Button>
          </div>
        </div>
      )}

      {step === 7 && (
        <div className="stack" style={{ flex: 1, gap: 16 }}>
          <div className="stack" role="status" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 14 }}>
            <span style={{ animation: 'emdNav .5s ease-out both', width: 104, height: 104, borderRadius: 34, background: 'linear-gradient(150deg, var(--mint-400), var(--mint-600))', color: 'var(--white)', boxShadow: '0 18px 36px rgba(31,154,114,0.3)', ...center }}>
              <Icon name="seal-check" size={56} />
            </span>
            <h1 className="h-page">Todo listo, {d.name.trim().split(' ')[0] || 'Nicolás'}</h1>
            <p className="t-body" style={{ maxWidth: 300 }}>Tu plan está activo. Ya puedes hablar con un médico o un psicólogo cuando lo necesites.</p>
          </div>
          <div className="stack" style={{ gap: 10 }}>
            <Button icon="stethoscope" iconSize={20} style={{ borderRadius: 16 }} onClick={() => finishOnboarding(true)}>Pide tu primera consulta</Button>
            <Button variant="secondary" size="ml" style={{ borderRadius: 16 }} onClick={() => finishOnboarding()}>Ir al inicio</Button>
          </div>
        </div>
      )}
    </div>
  );
}
