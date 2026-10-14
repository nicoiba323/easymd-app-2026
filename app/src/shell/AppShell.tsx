import { useEffect, useRef, type ReactNode } from 'react';
import { useApp, TABS, type Route, type TabRoute } from '../state/store';
import { Icon, type IconName } from '../ui/Icon';
import { Badge, Button, IconButton } from '../ui/components';
import { BENEFITS, PLAN } from '../data/mock';
import { pageMeta } from '../screens/Pantalla';
import { Inicio } from '../screens/Inicio';
import { Consultas, ConsultaForm, Conectando, Concierge } from '../screens/Consultas';
import { Servicios, Especialistas, Agenda, Farmacia, Producto, Carrito } from '../screens/Servicios';
import { Animo, Expediente, Detalle } from '../screens/Salud';
import { Ordenes, Mensajes, Chat, ChatComposer } from '../screens/Ordenes';
import { Cuenta, Login, Exito } from '../screens/Cuenta';
import { Pantalla } from '../screens/Pantalla';
import { Onboarding } from '../screens/Onboarding';

const NAV: [TabRoute, string, IconName][] = [
  ['inicio', 'Inicio', 'house'], ['consultas', 'Consultas', 'stethoscope'], ['servicios', 'Servicios', 'squares-four'],
  ['expediente', 'Expediente', 'clipboard-text'], ['ordenes', 'Órdenes', 'receipt'],
];

const SCREENS: Record<Route, () => ReactNode> = {
  inicio: Inicio, consultas: Consultas, form: ConsultaForm, conectando: Conectando, concierge: Concierge,
  servicios: Servicios, especialistas: Especialistas, agenda: Agenda, farmacia: Farmacia, producto: Producto, carrito: Carrito,
  animo: Animo, expediente: Expediente, detalle: Detalle, ordenes: Ordenes, mensajes: Mensajes, chat: Chat,
  cuenta: Cuenta, pantalla: Pantalla, login: Login, exito: Exito, onb: Onboarding,
};

function useTitles(): [string, string] {
  const { st } = useApp();
  const psico = st.kind === 'psico';
  const t: Partial<Record<Route, [string, string]>> = {
    form: [psico ? 'Consulta psicológica' : 'Consulta médica', psico ? 'Con un psicólogo certificado' : 'Médico general 24/7'],
    conectando: ['Conectando', st.metodo === 'video' ? 'Videollamada' : 'Chat'],
    especialistas: ['Especialistas', 'Agenda presencial con descuento'],
    agenda: ['Elige un horario', st.target?.name ?? ''],
    farmacia: ['Farmacias', 'Descuento con tu plan'],
    producto: ['Detalle', st.product === 'ibu' ? 'Farmacia' : 'Easylab'],
    chat: [st.chatWith || '', st.chatWith === 'Soporte EasyMD' ? 'Respondemos en minutos' : 'Médico general'],
    concierge: ['Asistente EasyMD', 'Muy pronto'],
    carrito: ['Tu carrito', ''],
    animo: ['Estado de ánimo', 'Hoy, martes 13 de octubre'],
    detalle: ['Detalle de la consulta', '24 sep 2026'],
    mensajes: ['Mensajes', 'Médicos y soporte'],
    cuenta: ['Mi cuenta', 'Nicolás Rivas'],
    pantalla: pageMeta(st),
  };
  return t[st.route] ?? ['', ''];
}

export function CartButton() {
  const { st, go } = useApp();
  const count = st.cart.reduce((a, c) => a + c.qty, 0);
  return <IconButton icon="shopping-cart-simple" label={count ? `Carrito, ${count} artículos` : 'Carrito'} count={count} onClick={() => go('carrito')} />;
}

function SubHeader() {
  const { st, back } = useApp();
  const [title, caption] = useTitles();
  const showCart = ['farmacia', 'producto', 'especialistas'].includes(st.route);
  return (
    <header className="subheader">
      <IconButton icon="arrow-left" label="Regresar" size={20} onClick={back} />
      <span className="subheader-text">
        <h1 className="subheader-title" style={{ margin: 0 }}>{title}</h1>
        {caption && <span className="subheader-caption">{caption}</span>}
      </span>
      {showCart && <CartButton />}
    </header>
  );
}

function TabBar() {
  const { st, tab } = useApp();
  return (
    <nav className="tabbar" aria-label="Navegación principal">
      {NAV.map(([id, label, icon]) => (
        <button key={id} type="button" onClick={() => tab(id)} aria-current={st.route === id ? 'page' : undefined}>
          <span className="tab-pill"><Icon name={icon} size={20} /></span>
          <span className="tab-label">{label}</span>
        </button>
      ))}
    </nav>
  );
}

function Sheet() {
  const { st, closeSheet, tab, toast, set } = useApp();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!st.sheet) return;
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.querySelector<HTMLElement>('button')?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeSheet(); };
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); prev?.focus?.(); };
  }, [st.sheet, closeSheet]);
  if (!st.sheet) return null;
  const titleId = 'sheet-title';
  return (
    <div className="sheet-backdrop">
      <button type="button" aria-label="Cerrar" className="sheet-dismiss" onClick={closeSheet} />
      <div ref={ref} role="dialog" aria-modal="true" aria-labelledby={titleId} className="sheet">
        <span className="sheet-handle" />
        {st.sheet === 'cancelar' && <>
          <h2 id={titleId} className="sheet-title">¿Cancelar la consulta?</h2>
          <p className="t-body">Perderás tu lugar en la fila. Puedes iniciar otra cuando quieras.</p>
          {/* TODO(API): DELETE /consultations/:id */}
          <Button variant="danger" onClick={() => { tab('inicio'); toast('Consulta cancelada'); }}>Sí, cancelar</Button>
          <Button variant="secondary" size="ml" onClick={closeSheet}>Seguir esperando</Button>
        </>}
        {st.sheet === 'beneficios' && <>
          <h2 id={titleId} className="sheet-title">Tu {PLAN.name} incluye</h2>
          <ul className="stack" style={{ gap: 12, listStyle: 'none', margin: 0, padding: 0 }}>
            {BENEFITS.map(b => (
              <li key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="icon-box"><Icon name={b.icon} size={19} /></span>
                <span className="grow" style={{ fontSize: 15, fontWeight: 500 }}>{b.label}</span>
                <Badge tone={b.tone}>{b.tag}</Badge>
              </li>
            ))}
          </ul>
          <Button variant="secondary" size="ml" onClick={closeSheet}>Entendido</Button>
        </>}
        {st.sheet === 'logout' && <>
          <h2 id={titleId} className="sheet-title">¿Cerrar sesión?</h2>
          <p className="t-body">Tus datos quedan guardados. Podrás entrar de nuevo con tu número.</p>
          <Button variant="danger" onClick={() => set({ route: 'login', stack: [], sheet: null })}>Cerrar sesión</Button>
          <Button variant="secondary" size="ml" onClick={closeSheet}>Cancelar</Button>
        </>}
        {st.sheet === 'urgencias' && <>
          <h2 id={titleId} className="sheet-title">Si es una emergencia</h2>
          <p className="t-body">Dolor de pecho, dificultad para respirar, sangrado fuerte o pérdida de conciencia: llama a emergencias o ve al hospital más cercano.</p>
          {/* TODO(producto): número de emergencias por país → convertir en enlace tel:. */}
          <Button variant="danger" icon="phone" onClick={closeSheet}>Llamar a emergencias</Button>
          <Button variant="secondary" size="ml" onClick={closeSheet}>Volver</Button>
        </>}
      </div>
    </div>
  );
}

export function AppShell() {
  const { st, toastMsg } = useApp();
  const r = st.route;
  const isTab = (TABS as Route[]).includes(r);
  const hasBack = !isTab && r !== 'exito' && r !== 'login' && r !== 'onb';
  const Screen = SCREENS[r];
  return (
    <div className="shell">
      <main className="shell-main" inert={!!st.sheet || undefined}>
        {hasBack && <SubHeader />}
        <Screen key={r + (st.page ?? '') + (st.chatWith ?? '')} />
      </main>
      {r === 'chat' && <ChatComposer />}
      {isTab && <TabBar />}
      {toastMsg && (
        <div role="status" className="toast"><Icon name="check-circle" size={18} color="var(--mint-300)" />{toastMsg}</div>
      )}
      <Sheet />
    </div>
  );
}
