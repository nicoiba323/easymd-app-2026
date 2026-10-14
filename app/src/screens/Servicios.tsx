import { useState } from 'react';
import { useApp } from '../state/store';
import { Icon, type IconName } from '../ui/Icon';
import { Avatar, Button, EmptyState, IconButton, SearchBox, Segmented } from '../ui/components';
import { CartButton } from '../shell/AppShell';
import { DAYS, DOCTORS, PHARMACIES, PRODUCTS, SLOT_GROUPS, SPECIALTIES, SUNDAY_IDX, savePct, usd } from '../data/mock';

export interface Service { id: string; name: string; sub: string; icon: IconName; onClick: () => void }

export function useServices(): Service[] {
  const { go, page } = useApp();
  return [
    { id: 'farmacias', name: 'Farmacias', sub: 'Descuentos y delivery', icon: 'pill', onClick: () => go('farmacia') },
    { id: 'easylab', name: 'Easylab', sub: 'Laboratorio, también a domicilio', icon: 'flask', onClick: () => go('producto', { product: 'lab', qty: 1 }) },
    { id: 'especialistas', name: 'Especialistas', sub: 'Agenda con descuento', icon: 'first-aid', onClick: () => go('especialistas', { cat: 'Todos' }) },
    { id: 'clinicas', name: 'Clínicas', sub: 'Imagen y exámenes con descuento', icon: 'hospital', onClick: () => go('agenda', { target: { name: 'Medlab · Clínica' }, slot: null, dayIdx: 1 }) },
    { id: 'fisioterapia', name: 'Fisioterapia', sub: 'Descuentos en sesiones', icon: 'person-simple-walk', onClick: () => go('especialistas', { cat: 'Fisioterapia' }) },
    { id: 'odontologia', name: 'Odontología', sub: 'Descuentos importantes', icon: 'tooth', onClick: () => go('especialistas', { cat: 'Odontología' }) },
    { id: 'wellness', name: 'Wellness', sub: 'Yoga, spa y más', icon: 'flower-lotus', onClick: () => page('wellness') },
    { id: 'medita', name: 'Medita', sub: 'Respiración guiada', icon: 'wind', onClick: () => page('medita', { breathing: false }) },
    { id: 'paquetes', name: 'Paquetes', sub: 'Chequeos completos', icon: 'package', onClick: () => page('paquetes') },
  ];
}

export function Servicios() {
  const { st, set } = useApp();
  const list = useServices().filter(s => st.srvTab === 'todos' || st.favs[s.id]);
  return (
    <div className="screen" style={{ gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 className="h-page">Servicios</h1>
        <CartButton />
      </div>
      <Segmented label="Filtrar servicios" value={st.srvTab} onChange={v => set({ srvTab: v })} options={[{ id: 'todos', label: 'Todos' }, { id: 'favs', label: 'Favoritos' }]} />
      {list.length === 0 && (
        <EmptyState variant="plain" icon="heart" iconSize={32} title="Aún no tienes favoritos" body="Toca el corazón de un servicio para tenerlo siempre a mano." />
      )}
      <div className="grid-fill">
        {list.map(s => {
          const fav = !!st.favs[s.id];
          return (
            <div key={s.id} className="card" style={{ position: 'relative' }}>
              <button type="button" onClick={s.onClick} className="tap stack" style={{ padding: 16, gap: 10 }}>
                <span className="icon-box"><Icon name={s.icon} size={20} /></span>
                <span className="stack" style={{ gap: 2, paddingRight: 24 }}>
                  <span className="h-card">{s.name}</span>
                  <span className="t-small" style={{ lineHeight: 1.4 }}>{s.sub}</span>
                </span>
              </button>
              <button type="button" aria-label={fav ? `Quitar ${s.name} de favoritos` : `Agregar ${s.name} a favoritos`} aria-pressed={fav}
                onClick={() => set(x => ({ favs: { ...x.favs, [s.id]: !x.favs[s.id] } }))}
                style={{ position: 'absolute', top: 6, right: 6, width: 44, height: 44, border: 'none', background: 'none', cursor: 'pointer', color: fav ? 'var(--danger)' : 'var(--subtle-foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="heart" size={18} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Especialistas() {
  const { st, set, go, startForm } = useApp();
  const [q, setQ] = useState('');
  const docs = DOCTORS.filter(d => (st.cat === 'Todos' || d.cat === st.cat)
    && (!q.trim() || (d.name + ' ' + d.spec).toLowerCase().includes(q.trim().toLowerCase())));
  return (
    <div className="screen sub" style={{ gap: 14 }}>
      <SearchBox label="Buscar especialista" placeholder="Busca por nombre o especialidad" value={q} onChange={setQ} />
      <div className="scroll-x" role="group" aria-label="Especialidad">
        {SPECIALTIES.map(c => <button key={c} type="button" className="pill" aria-pressed={st.cat === c} onClick={() => set({ cat: c })}>{c}</button>)}
      </div>
      <div className="t-muted" style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="map-pin" size={15} />Hasta 15 km de tu dirección</div>
      {docs.length === 0 && (
        <EmptyState icon="first-aid" title="Sin especialistas cerca" body="Prueba otra especialidad o consulta ahora con un médico general."
          action={<Button variant="secondary" size="md" onClick={() => startForm('medico')}>Hablar con un médico</Button>} />
      )}
      {docs.map(d => (
        <article key={d.name} className="card card-pad stack" style={{ gap: 14 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <Avatar initials={d.i} size={52} />
            <span className="grow stack" style={{ gap: 2 }}>
              <h2 className="h-16" style={{ letterSpacing: 0, lineHeight: 1.4 }}>{d.name}</h2>
              <span className="t-muted">{d.spec}</span>
              <span className="t-muted" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <Icon name="star" size={13} color="var(--warning)" /><span className="sr-only">Calificación</span>{d.rating} · {d.place} · {d.km}
              </span>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="grow stack">
              <span style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17 }}>{usd(d.p)}</span>
                <s className="t-muted"><span className="sr-only">Antes </span>{usd(d.o)}</s>
              </span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--mint-700)' }}>Ahorras {usd(d.o - d.p)}</span>
            </span>
            <Button size="md" style={{ padding: '0 18px' }} onClick={() => go('agenda', { target: d, slot: null, dayIdx: 1 })}>Ver horarios</Button>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Agenda() {
  const { st, set } = useApp();
  const dayTxt = DAYS[st.dayIdx][0].toLowerCase() + ' ' + DAYS[st.dayIdx][1] + ' oct';
  const sunday = st.dayIdx === SUNDAY_IDX;
  const SEL = '2px solid var(--color-primary)', B = '1px solid var(--border)';
  return (
    <div className="screen sub">
      <section className="stack" style={{ gap: 10 }}>
        <h2 className="h-card" style={{ letterSpacing: 0 }}>Octubre 2026</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, minmax(0, 1fr))', gap: 6 }} role="group" aria-label="Día">
          {DAYS.map(([d, n], i) => {
            const on = st.dayIdx === i;
            return (
              <button key={n} type="button" aria-pressed={on} aria-label={`${d} ${n} de octubre`} onClick={() => set({ dayIdx: i, slot: null })}
                style={{ height: 60, borderRadius: 14, border: on ? SEL : B, background: on ? 'var(--color-primary)' : 'var(--white)', color: on ? 'var(--white)' : 'var(--foreground)', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, padding: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 600 }}>{d}</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16 }}>{n}</span>
              </button>
            );
          })}
        </div>
      </section>
      {sunday ? (
        <div className="card card-18" style={{ padding: 20, border: '1px dashed var(--border-strong)', textAlign: 'center', fontSize: 14, color: 'var(--muted-foreground)' }}>Sin horarios este día. Elige otra fecha.</div>
      ) : SLOT_GROUPS.map(g => (
        <div key={g.label} className="stack" style={{ gap: 8 }} role="group" aria-label={g.label}>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted-foreground)' }}>{g.label}</span>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(92px, 1fr))', gap: 8 }}>
            {g.slots.map(t => {
              const on = st.slot === t;
              return <button key={t} type="button" aria-pressed={on} onClick={() => set({ slot: t })}
                style={{ height: 44, borderRadius: 12, border: on ? SEL : B, background: on ? 'var(--blue-50)' : 'var(--white)', color: 'var(--foreground)', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{t}</button>;
            })}
          </div>
        </div>
      ))}
      <div className="push-bottom">
        {/* TODO(API): POST /appointments */}
        <Button full disabled={!st.slot}
          onClick={() => st.slot && set({ route: 'exito', exito: 'cita', stack: [], cita: { name: st.target?.name ?? '', when: dayTxt + ' · ' + st.slot } })}>
          {st.slot ? 'Confirmar · ' + dayTxt + ', ' + st.slot : 'Elige un horario'}
        </Button>
      </div>
    </div>
  );
}

export function Farmacia() {
  const { go } = useApp();
  return (
    <div className="screen sub" style={{ gap: 14 }}>
      <SearchBox label="Buscar medicamento" placeholder="Busca un medicamento" />
      <h2 className="h-16" style={{ letterSpacing: 0 }}>Farmacias cerca de ti</h2>
      {PHARMACIES.map(f => (
        <button key={f.name} type="button" onClick={() => go('producto', { product: 'ibu', qty: 1 })} className="tap card card-18 card-pad" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="icon-box lg" style={{ background: 'var(--mint-50)', color: 'var(--mint-600)' }}><Icon name="pill" size={20} /></span>
          <span className="grow stack" style={{ gap: 2 }}>
            <span className="t-title">{f.name}</span>
            <span className="t-muted">{f.km} · Descuento con tu plan</span>
          </span>
          <Icon name="caret-right" size={18} color="var(--subtle-foreground)" />
        </button>
      ))}
    </div>
  );
}

export function Producto() {
  const { st, set, go, addToCart, toast } = useApp();
  const p = PRODUCTS[st.product];
  return (
    <div className="screen sub" style={{ gap: 16 }}>
      <div className="card" style={{ height: 180, borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--subtle-foreground)' }}><Icon name={p.icon} size={48} /></div>
      <div className="stack" style={{ gap: 4 }}>
        <h2 style={{ fontSize: 22, letterSpacing: 0, lineHeight: 1.3 }}>{p.name}</h2>
        <span style={{ fontSize: 14, color: 'var(--muted-foreground)' }}>{p.desc}</span>
      </div>
      <div className="card card-18 card-pad" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span className="stack" style={{ gap: 2 }}>
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 22 }}>{usd(p.p)}</span>
            <s style={{ fontSize: 14, color: 'var(--muted-foreground)' }}><span className="sr-only">Antes </span>{usd(p.o)}</s>
          </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--mint-700)' }}>{savePct(p)}</span>
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <IconButton square icon="minus" size={18} label="Quitar uno" disabled={st.qty <= 1} onClick={() => set(s => ({ qty: Math.max(1, s.qty - 1) }))} />
          <span aria-live="polite" aria-label={`Cantidad: ${st.qty}`} style={{ minWidth: 32, textAlign: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 17 }}>{st.qty}</span>
          <IconButton square icon="plus" size={18} label="Agregar uno" disabled={st.qty >= 10} onClick={() => set(s => ({ qty: Math.min(10, s.qty + 1) }))} />
        </div>
      </div>
      <div className="push-bottom">
        <Button full onClick={() => { addToCart(); go('carrito'); }}>Comprar ahora</Button>
        <Button full variant="secondary" onClick={() => { addToCart(); toast('Agregado al carrito'); }}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export function Carrito() {
  const { st, set, tab } = useApp();
  const total = st.cart.reduce((a, c) => a + PRODUCTS[c.id].p * c.qty, 0);
  if (!st.cart.length) {
    return (
      <div className="screen sub" style={{ justifyContent: 'center' }}>
        <EmptyState variant="plain" icon="shopping-cart-simple" iconSize={34} title="Tu carrito está vacío" body="Agrega medicamentos o exámenes con el descuento de tu plan."
          action={<Button variant="secondary" size="md" style={{ padding: '0 18px' }} onClick={() => tab('servicios')}>Ver servicios</Button>} />
      </div>
    );
  }
  return (
    <div className="screen sub" style={{ gap: 14 }}>
      <ul className="list-card r18" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {st.cart.map(c => {
          const p = PRODUCTS[c.id];
          return (
            <li key={c.id} className="row">
              <Icon name={p.icon} size={20} color="var(--navy-800)" />
              <span className="grow stack"><span className="t-title">{p.name}</span><span className="t-muted">Cantidad: {c.qty}</span></span>
              <span className="h-card">{usd(p.p * c.qty)}</span>
            </li>
          );
        })}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '0 4px' }}>
        <span style={{ fontSize: 15, color: 'var(--muted-foreground)' }}>Total</span>
        <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 24 }}>{usd(total)}</span>
      </div>
      <div className="push-bottom">
        {/* TODO(API): POST /orders + pasarela de pago */}
        <Button full onClick={() => set({ route: 'exito', exito: 'pedido', stack: [], cart: [] })}>Continuar al pago</Button>
      </div>
    </div>
  );
}
