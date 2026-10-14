import { useState } from 'react';
import { useApp, type AppApi, type AppState } from '../state/store';
import { Icon, type IconName } from '../ui/Icon';
import { Badge, Button, Field } from '../ui/components';
import { EXERCISES, FAQ, PACKAGES, WELLNESS, type ExitoKey } from '../data/mock';

/** Pantallas secundarias que comparten plantilla: intro, código, filas, campos, nota y CTA. */
interface Row { icon: IconName; label: string; sub?: string; tag?: string; onClick?: () => void }
interface FieldDef { label: string; value?: string; ph?: string; required?: boolean; inputMode?: 'numeric' | 'tel' | 'email' }
interface PageDef {
  title: string; caption: string; icon?: IconName; intro?: string; code?: string; codeTag?: string; anim?: boolean;
  rows?: Row[]; fields?: FieldDef[]; note?: string;
  cta?: string; onCta?: () => void; submit?: ExitoKey; sec?: string; onSec?: () => void;
}

const row = (icon: IconName, label: string, sub?: string, tag?: string, onClick?: () => void): Row => ({ icon, label, sub, tag, onClick });
const fld = (label: string, value = '', ph = '', required = false, inputMode?: FieldDef['inputMode']): FieldDef => ({ label, value, ph, required, inputMode });

function buildPage(st: AppState, a: AppApi): PageDef {
  const fac = st.fac || { prov: 'Farmacia Hermanos Guerrero', date: '18 ene 2025', type: 'Farmacia' };
  const isRes = st.doc === 'resultado';
  const docName = st.docTitle || (isRes ? 'Resultado de laboratorio' : 'Ibuprofeno 600 mg');
  switch (st.page) {
    case 'wellness': return { title: 'Wellness', caption: 'Descuentos con tu plan', icon: 'flower-lotus', intro: 'Yoga, spa, medicina natural y productos con precio especial para ti.',
      rows: WELLNESS.map(([n, sb, t]) => row('storefront', n, sb, t, () => a.page('cupon', { cupon: n, cuponTag: t }))) };
    case 'cupon': return { title: 'Tu descuento', caption: st.cupon || '', icon: 'ticket', intro: 'Muestra este código al pagar. Es personal y no tiene costo.',
      code: 'EMD-' + (1000 + (st.cupon || 'x').length * 731), codeTag: (st.cuponTag || '') + ' con tu plan', note: 'Válido mientras tu plan esté activo.' };
    case 'medita': {
      const sel = st.exercise || EXERCISES[0][0];
      return { title: 'Medita', caption: 'Respiración guiada', anim: true,
        rows: EXERCISES.map(([n, sb]) => row('wind', n, sb, sel === n ? 'Elegido' : '', () => a.set({ exercise: n, breathing: false }))),
        cta: st.breathing ? 'Terminar' : 'Empezar', onCta: () => a.set(s => ({ breathing: !s.breathing })) };
    }
    case 'paquetes': return { title: 'Paquetes', caption: 'Chequeos con descuento', icon: 'package', intro: 'Grupos de exámenes de laboratorio a mejor precio.',
      rows: PACKAGES.map(([k, n, sb]) => row('package', n, sb, 'Descuento', () => a.go('producto', { product: k, qty: 1 }))) };
    case 'datos': return { title: 'Datos personales', caption: 'Así te identifican tus médicos',
      fields: [fld('Nombre completo', 'Nicolás Rivas', '', true), fld('Fecha de nacimiento', '12/04/1990', 'dd/mm/aaaa', true, 'numeric'), fld('Cédula', '001-120490-0001A'), fld('Teléfono', '+505 8888 0000', '', true, 'tel'), fld('Correo', 'nicolas@correo.com', '', false, 'email')],
      cta: 'Guardar cambios', submit: 'datos' };
    case 'pagos': return { title: 'Métodos de pago', caption: 'Pagos cifrados y seguros',
      rows: [row('credit-card', 'Visa •••• 4821', 'Vence 08/28', 'Principal'), row('credit-card', 'Mastercard •••• 1290', 'Vence 02/27'), row('plus', 'Agregar tarjeta', '', '', () => a.page('tarjeta'))],
      note: 'Tu plan se cobra a la tarjeta principal.' };
    case 'tarjeta': return { title: 'Agregar tarjeta', caption: 'Pagos cifrados y seguros',
      fields: [fld('Número de tarjeta', '', '0000 0000 0000 0000', true, 'numeric'), fld('Vencimiento', '', 'mm/aa', true, 'numeric'), fld('CVV', '', '3 dígitos', true, 'numeric'), fld('Nombre en la tarjeta', 'Nicolás Rivas', '', true)],
      cta: 'Guardar tarjeta', submit: 'tarjeta' };
    case 'direcciones': return { title: 'Direcciones', caption: 'Para entregas a domicilio',
      rows: [row('house', 'Casa', 'Villa Fontana, Managua', 'Principal'), row('briefcase', 'Trabajo', 'Los Robles, Managua'), row('plus', 'Agregar dirección', '', '', () => a.page('direccion'))] };
    case 'direccion': return { title: 'Nueva dirección', caption: 'Para entregas a domicilio',
      fields: [fld('Nombre', '', 'Ej.: Casa de mamá', true), fld('Dirección', '', 'Barrio, calle y referencia', true), fld('Ciudad', 'Managua', '', true), fld('Teléfono de contacto', '+505 8888 0000', '', false, 'tel')],
      cta: 'Guardar dirección', submit: 'direccion' };
    case 'familiar': return { title: 'Agregar familiar', caption: 'Revisa en Mi plan cuántos incluye',
      fields: [fld('Nombre completo', '', 'Nombre y apellido', true), fld('Parentesco', '', 'Ej.: hija, padre, pareja', true), fld('Fecha de nacimiento', '', 'dd/mm/aaaa', true, 'numeric'), fld('Cédula (opcional)')],
      cta: 'Agregar familiar', submit: 'familiar' };
    case 'factura': return { title: 'Factura', caption: fac.prov, icon: 'receipt', intro: fac.type + ' · ' + fac.date + ' · N.º 000184',
      rows: [row('pill', 'Ibuprofeno 600 mg × 1', '', 'US$4.50'), row('truck', 'Envío', '', 'US$0.00'), row('seal-check', 'Descuento del plan', '', '-US$0.50')],
      note: 'Total pagado: US$4.00 con Visa •••• 4821', cta: 'Descargar factura en PDF', onCta: () => a.toast('Factura descargada') };
    case 'documento': return { title: isRes ? 'Resultado' : 'Receta', caption: docName, icon: 'file-text',
      intro: isRes ? 'Golab by Medlab · 3 jul 2024' : 'Dr. Emanuel Flores · Registro 73222',
      rows: isRes ? [row('flask', docName, 'Resultado disponible en PDF', 'Listo')] : [row('pill', docName, '1 tableta cada 8 horas por 3 días')],
      note: isRes ? 'Si tienes dudas sobre tu resultado, consulta con un médico.' : 'Presenta esta receta en cualquier farmacia de la red.',
      cta: 'Descargar PDF', onCta: () => a.toast('PDF descargado'),
      sec: isRes ? 'Consultar con un médico' : 'Pedir a domicilio', onSec: isRes ? () => a.startForm('medico') : () => a.go('producto', { product: 'ibu', qty: 1 }) };
    default: return { title: 'Preguntas frecuentes', caption: 'Ayuda rápida', rows: FAQ.map(([q, ans]) => row('question', q, ans)),
      cta: 'Escribir a soporte', onCta: () => a.go('chat', { chatWith: 'Soporte EasyMD' }) };
  }
}

const NOOP_API = { page: () => {}, set: () => {}, go: () => {}, toast: () => {}, startForm: () => {} } as unknown as AppApi;
export const pageMeta = (st: AppState): [string, string] => { const p = buildPage(st, NOOP_API); return [p.title, p.caption]; };

function Breath({ on, label }: { on: boolean; label: string }) {
  return (
    <div aria-live="polite" style={{ width: 170, height: 170, borderRadius: '50%', background: 'radial-gradient(circle at 50% 35%, var(--mint-300), var(--serene-500))', animation: on ? 'emdBreath 8s ease-in-out infinite' : 'none', transform: on ? undefined : 'scale(.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16, textAlign: 'center', padding: 16, transition: 'transform .4s ease-out' }}>
      {on ? 'Inhala… y exhala' : label}
    </div>
  );
}

export function Pantalla() {
  const api = useApp();
  const { st } = api;
  const pg = buildPage(st, api);
  const [values, setValues] = useState<string[]>(() => (pg.fields || []).map(f => f.value || ''));
  const [errors, setErrors] = useState<boolean[]>([]);

  const onCta = () => {
    if (pg.submit) {
      const errs = (pg.fields || []).map((f, i) => !!f.required && !values[i].trim());
      setErrors(errs);
      if (errs.some(Boolean)) return;
      // TODO(API): PUT/POST según la pantalla (perfil, tarjeta, dirección, familiar).
      return api.done(pg.submit);
    }
    pg.onCta?.();
  };

  return (
    <div className="screen sub" style={{ gap: 16 }}>
      {pg.intro && (
        <div className="card card-pad" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="icon-box" style={{ width: 48, height: 48, borderRadius: 16, background: 'linear-gradient(150deg, var(--mint-50), var(--blue-50))' }}><Icon name={pg.icon || 'info'} size={26} /></span>
          <span style={{ fontSize: 14, lineHeight: 1.5 }}>{pg.intro}</span>
        </div>
      )}
      {pg.code && (
        <div className="stack" style={{ borderRadius: 22, padding: 22, textAlign: 'center', color: 'var(--white)', background: 'var(--grad-medico)', gap: 6 }}>
          <span style={{ fontSize: 13, opacity: 0.9 }}>Código de descuento</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 30, letterSpacing: '.08em' }}>{pg.code}</span>
          <span className="chip" style={{ alignSelf: 'center', fontWeight: 700, padding: '3px 10px', background: 'var(--mint-300)', color: 'var(--navy-900)' }}>{pg.codeTag}</span>
        </div>
      )}
      {pg.anim && (
        <div className="card stack" style={{ padding: 20, alignItems: 'center', gap: 12 }}>
          <Breath on={st.breathing} label={st.exercise || EXERCISES[0][0]} />
          <span className="t-muted">{st.breathing ? 'Sigue el círculo: crece al inhalar, se achica al exhalar.' : 'Elige un ejercicio y toca Empezar.'}</span>
        </div>
      )}
      {pg.rows && (
        <div className="list-card">
          {pg.rows.map(r => {
            const inner = <>
              <span className="icon-box"><Icon name={r.icon} size={20} /></span>
              <span className="grow stack" style={{ gap: 2 }}>
                <span className="t-title">{r.label}</span>
                {r.sub && <span className="t-muted" style={{ lineHeight: 1.45 }}>{r.sub}</span>}
              </span>
              {r.tag && <Badge tone="ok" style={{ fontWeight: 700 }}>{r.tag}</Badge>}
              {r.onClick && <Icon name="caret-right" size={18} color="var(--subtle-foreground)" />}
            </>;
            return r.onClick
              ? <button key={r.label} type="button" onClick={r.onClick} className="tap row" style={{ minHeight: 60, padding: '12px 16px' }}>{inner}</button>
              : <div key={r.label} className="row" style={{ minHeight: 60, padding: '12px 16px' }}>{inner}</div>;
          })}
        </div>
      )}
      {pg.fields && (
        <form className="stack" style={{ gap: 14 }} noValidate onSubmit={e => { e.preventDefault(); onCta(); }}>
          {pg.fields.map((f, i) => (
            <Field key={f.label} label={f.label} error={errors[i] ? 'Completa este campo.' : undefined}>
              {id => <input id={id} className="input" value={values[i]} placeholder={f.ph} inputMode={f.inputMode} aria-invalid={!!errors[i]} aria-required={f.required}
                onChange={e => { const v = [...values]; v[i] = e.target.value; setValues(v); if (errors[i]) { const er = [...errors]; er[i] = false; setErrors(er); } }} />}
            </Field>
          ))}
          <button type="submit" hidden />
        </form>
      )}
      {pg.note && <div className="note"><Icon name="info" size={16} style={{ marginTop: 1 }} />{pg.note}</div>}
      <div className="push-bottom">
        {pg.cta && <Button full onClick={onCta}>{pg.cta}</Button>}
        {pg.sec && <Button full variant="secondary" size="ml" onClick={pg.onSec}>{pg.sec}</Button>}
      </div>
    </div>
  );
}
