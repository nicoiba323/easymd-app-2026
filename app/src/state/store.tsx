import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { INITIAL_CHATS, type Doctor, type ExitoKey, type MoodId, type Order, type ProductId } from '../data/mock';

export type TabRoute = 'inicio' | 'consultas' | 'servicios' | 'expediente' | 'ordenes';
export type Route = TabRoute | 'form' | 'conectando' | 'especialistas' | 'agenda' | 'farmacia' | 'producto' | 'carrito'
  | 'animo' | 'detalle' | 'mensajes' | 'chat' | 'cuenta' | 'pantalla' | 'concierge' | 'onb' | 'login' | 'exito';
export const TABS: TabRoute[] = ['inicio', 'consultas', 'servicios', 'expediente', 'ordenes'];

export type PageKey = 'wellness' | 'cupon' | 'medita' | 'paquetes' | 'datos' | 'pagos' | 'tarjeta' | 'direcciones' | 'direccion' | 'familiar' | 'factura' | 'documento' | 'faq';
export type SheetKey = 'cancelar' | 'beneficios' | 'logout' | 'urgencias';
/** Estado de datos de las listas (Expediente, Órdenes, Mensajes). En producción lo da la API; aquí se fuerza con ?estado=. */
export type DataState = 'normal' | 'cargando' | 'vacio' | 'error';
export type Target = Pick<Doctor, 'name'> & Partial<Doctor>;

export interface AppState {
  route: Route; stack: Route[]; sheet: SheetKey | null;
  kind: 'medico' | 'psico'; who: string; motivo: string; metodo: 'video' | 'chat'; submitting: boolean; error: string;
  cat: string; target: Target | null; dayIdx: number; slot: string | null; cita: { name: string; when: string } | null;
  product: ProductId; qty: number; cart: { id: ProductId; qty: number }[];
  moodTab: 'hoy' | 'semana'; mood: MoodId | null; moodSaved: boolean;
  srvTab: 'todos' | 'favs'; favs: Record<string, boolean>;
  page: PageKey | null; chatWith: string | null; chats: Record<string, { me: boolean; t: string }[]>;
  notify: boolean; breathing: boolean; exercise: string | null;
  expTab: 'ficha' | 'historial' | 'recetas' | 'resultados'; ordTab: 'curso' | 'completadas';
  exito: ExitoKey | null; showTiempos: boolean; retried: boolean;
  fac: Order | null; doc: 'receta' | 'resultado' | null; docTitle: string | null; cupon: string | null; cuponTag: string | null;
}

const ONB_KEY = 'emd.onboarded';
const readOnboarded = () => { try { return localStorage.getItem(ONB_KEY) === '1'; } catch { return true; } };
const params = new URLSearchParams(window.location.search);

const initial = (): AppState => ({
  route: params.has('onb') || !readOnboarded() ? 'onb' : 'inicio', stack: [], sheet: null,
  kind: 'medico', who: 'yo', motivo: '', metodo: 'video', submitting: false, error: '',
  cat: 'Todos', target: null, dayIdx: 1, slot: null, cita: null,
  product: 'lab', qty: 1, cart: [],
  moodTab: 'hoy', mood: null, moodSaved: false,
  srvTab: 'todos', favs: { farmacias: true },
  page: null, chatWith: null, chats: INITIAL_CHATS,
  notify: false, breathing: false, exercise: null,
  expTab: 'ficha', ordTab: 'curso', exito: null, showTiempos: false, retried: false,
  fac: null, doc: null, docTitle: null, cupon: null, cuponTag: null,
});

type Patch = Partial<AppState> | ((s: AppState) => Partial<AppState>);

export interface AppApi {
  st: AppState;
  dataState: DataState;
  toastMsg: string | null;
  set: (p: Patch) => void;
  go: (r: Route, extra?: Partial<AppState>) => void;
  tab: (r: TabRoute, extra?: Partial<AppState>) => void;
  back: () => void;
  page: (k: PageKey, extra?: Partial<AppState>) => void;
  done: (k: ExitoKey, extra?: Partial<AppState>) => void;
  toast: (msg: string) => void;
  openSheet: (k: SheetKey) => void;
  closeSheet: () => void;
  startForm: (kind: 'medico' | 'psico') => void;
  submitConsult: () => void;
  addToCart: () => void;
  sendChat: (text: string) => void;
  startOnboarding: () => void;
  finishOnboarding: (thenConsult?: boolean) => void;
  retry: () => void;
}

const Ctx = createContext<AppApi | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [st, setSt] = useState<AppState>(initial);
  const [toastMsg, setToast] = useState<string | null>(null);
  const stRef = useRef(st);
  useEffect(() => { stRef.current = st; }, [st]);
  const timers = useRef<Record<string, number>>({});
  const later = (k: string, fn: () => void, ms: number) => { clearTimeout(timers.current[k]); timers.current[k] = window.setTimeout(fn, ms); };
  useEffect(() => () => Object.values(timers.current).forEach(clearTimeout), []);

  const set = useCallback((p: Patch) => setSt(s => ({ ...s, ...(typeof p === 'function' ? p(s) : p) })), []);

  const api = useMemo<Omit<AppApi, 'st' | 'toastMsg' | 'dataState'>>(() => {
    const go = (r: Route, extra?: Partial<AppState>) => set(s => ({ route: r, stack: [...s.stack, s.route], sheet: null, ...extra }));
    const tab = (r: TabRoute, extra?: Partial<AppState>) => set({ route: r, stack: [], sheet: null, ...extra });
    const toast = (msg: string) => { setToast(msg); later('toast', () => setToast(null), 2200); };
    const startForm = (kind: 'medico' | 'psico') => go('form', { kind, motivo: '', error: '', submitting: false, who: 'yo', metodo: 'video' });
    return {
      set, go, tab, toast, startForm,
      back: () => set(s => { const stack = [...s.stack]; return { route: stack.pop() || 'inicio', stack }; }),
      page: (k, extra) => go('pantalla', { page: k, ...extra }),
      done: (k, extra) => set({ route: 'exito', exito: k, stack: [], ...extra }),
      openSheet: k => set({ sheet: k }),
      closeSheet: () => set({ sheet: null }),
      submitConsult: () => {
        if (!stRef.current.motivo.trim()) return set({ error: 'Cuéntanos brevemente qué sientes para asignarte al profesional adecuado.' });
        set({ submitting: true, error: '' });
        // TODO(API): POST /consultations — reemplaza el retardo simulado.
        later('submit', () => set(s => ({ submitting: false, route: 'conectando', stack: [...s.stack, s.route] })), 1200);
      },
      addToCart: () => set(s => {
        const ex = s.cart.find(c => c.id === s.product);
        return { cart: ex ? s.cart.map(c => (c.id === s.product ? { ...c, qty: c.qty + s.qty } : c)) : [...s.cart, { id: s.product, qty: s.qty }] };
      }),
      sendChat: text => {
        const t = text.trim();
        if (!t) return;
        const w = stRef.current.chatWith || '';
        set(s => ({ chats: { ...s.chats, [w]: [...(s.chats[w] || []), { me: true, t }] } }));
        later('chat', () => set(s => ({ chats: { ...s.chats, [w]: [...(s.chats[w] || []), { me: false, t: 'Gracias, Nicolás. Te respondemos en unos minutos.' }] } })), 1200);
      },
      startOnboarding: () => set({ route: 'onb', stack: [], sheet: null }),
      finishOnboarding: thenConsult => {
        try { localStorage.setItem(ONB_KEY, '1'); } catch { /* sin almacenamiento: se vuelve a mostrar */ }
        set({ route: 'inicio', stack: [] });
        if (thenConsult) startForm('medico');
      },
      retry: () => { set({ retried: true }); toast('Datos cargados'); },
    };
  }, [set]);

  // Al cambiar de ruta, el scroll vuelve arriba.
  useEffect(() => { window.scrollTo(0, 0); }, [st.route]);

  const estado = params.get('estado') as DataState | null;
  const demo: DataState = estado && ['normal', 'cargando', 'vacio', 'error'].includes(estado) ? estado : 'normal';
  const dataState = st.retried ? 'normal' : demo;

  return <Ctx.Provider value={{ ...api, st, toastMsg, dataState }}>{children}</Ctx.Provider>;
}

export function useApp() {
  const v = useContext(Ctx);
  if (!v) throw new Error('useApp fuera de AppProvider');
  return v;
}
