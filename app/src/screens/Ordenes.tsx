import { useEffect, useRef, useState } from 'react';
import { useApp } from '../state/store';
import { Icon } from '../ui/Icon';
import { Badge, Button, EmptyState, ErrorState, IconBox, Segmented, SkeletonList } from '../ui/components';
import { CONVERSATIONS, ORDERS } from '../data/mock';

export function Ordenes() {
  const { st, set, tab, page, dataState, retry } = useApp();
  const list = ORDERS.filter(o => (st.ordTab === 'curso') === (o.status === 'En curso'));
  const empty = dataState === 'vacio' || (dataState === 'normal' && list.length === 0);
  return (
    <div className="screen" style={{ gap: 16 }}>
      <h1 className="h-page">Órdenes</h1>
      <Segmented label="Estado de las órdenes" value={st.ordTab} onChange={v => set({ ordTab: v })} options={[{ id: 'curso', label: 'En curso' }, { id: 'completadas', label: 'Completadas' }]} />
      {dataState === 'cargando' && <SkeletonList height={88} widths={['55%', '75%']} />}
      {dataState === 'error' && <ErrorState title="No pudimos cargar tus órdenes" body="Algo salió mal de nuestro lado. Intenta de nuevo en un momento." onRetry={retry} />}
      {empty && (
        <EmptyState icon="receipt" title={st.ordTab === 'curso' ? 'No tienes órdenes en curso' : 'Aún no tienes órdenes completadas'} body="Tus pedidos de farmacia y laboratorio aparecerán aquí."
          action={<Button variant="secondary" size="md" onClick={() => tab('servicios')}>Ver servicios</Button>} />
      )}
      {dataState === 'normal' && list.map(o => (
        <article key={o.prov + o.date} className="card card-18 card-pad stack" style={{ gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <IconBox icon={o.icon} />
            <span className="grow stack" style={{ gap: 2 }}><span className="t-title">{o.type}</span><span className="t-muted">{o.prov}</span></span>
            <Badge tone={o.status === 'En curso' ? 'info' : 'ok'}>{o.status}</Badge>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="t-muted">{o.date}</span>
            <button type="button" className="btn btn-ghost btn-md" style={{ gap: 4 }} onClick={() => page('factura', { fac: o })}>Ver factura<Icon name="caret-right" size={16} /></button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Mensajes() {
  const { go, dataState, retry } = useApp();
  return (
    <div className="screen sub" style={{ gap: 10 }}>
      {dataState === 'cargando' && <SkeletonList height={68} round widths={['50%', '70%']} />}
      {dataState === 'error' && <ErrorState title="No pudimos cargar tus mensajes" onRetry={retry} />}
      {dataState === 'vacio' && <EmptyState variant="plain" icon="chat-circle-dots" iconSize={32} title="Sin mensajes por ahora" body="Aquí verás las conversaciones con tus médicos y con soporte." />}
      {dataState === 'normal' && CONVERSATIONS.map(c => (
        <button key={c.name} type="button" onClick={() => go('chat', { chatWith: c.name })} className="tap card card-18 row">
          <span className="avatar" style={{ width: 44, height: 44 }}><Icon name={c.icon} size={18} /></span>
          <span className="grow stack" style={{ gap: 2 }}>
            <span className="t-title">{c.name}</span>
            <span className="t-muted" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.last}</span>
          </span>
          <span className="t-small">{c.when}</span>
        </button>
      ))}
    </div>
  );
}

export function Chat() {
  const { st } = useApp();
  const msgs = st.chats[st.chatWith ?? ''] ?? [];
  const end = useRef<HTMLDivElement>(null);
  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }); }, [msgs.length]);
  return (
    <div className="screen sub" style={{ padding: '4px var(--gutter) 16px', gap: 10 }} role="log" aria-live="polite">
      {msgs.map((m, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: m.me ? 'flex-end' : 'flex-start' }}>
          <span className={`bubble ${m.me ? 'me' : 'them'}`}><span className="sr-only">{m.me ? 'Tú: ' : st.chatWith + ': '}</span>{m.t}</span>
        </div>
      ))}
      <div ref={end} />
    </div>
  );
}

export function ChatComposer() {
  const { sendChat } = useApp();
  const [draft, setDraft] = useState('');
  const send = () => { sendChat(draft); setDraft(''); };
  return (
    <form className="composer" onSubmit={e => { e.preventDefault(); send(); }}>
      <input aria-label="Escribe un mensaje" placeholder="Escribe un mensaje" value={draft} onChange={e => setDraft(e.target.value)} />
      <button type="submit" aria-label="Enviar" className="btn btn-primary" style={{ width: 46, height: 46, borderRadius: '50%', padding: 0, flexShrink: 0 }}><Icon name="paper-plane-right" size={19} /></button>
    </form>
  );
}
