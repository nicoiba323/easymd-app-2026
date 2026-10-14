// Datos de ejemplo del prototipo. En producción vienen del backend (ver design_handoff/api-contract.md).
import type { IconName } from '../ui/Icon';
import type { Tone } from '../ui/components';

export const usd = (n: number) => 'US$' + n.toFixed(2);

export const USER = { first: 'Nicolás', full: 'Nicolás Rivas', initial: 'N', phone: '+505 8888 0000' };
export const PLAN = { name: 'Plan Plus', price: 14.95, renews: '14 nov' };

export interface Doctor { i: string; name: string; spec: string; cat: string; place: string; km: string; rating: string; p: number; o: number }
export const DOCTORS: Doctor[] = [
  { i: 'NI', name: 'Dr. Nicolás Ibáñez', spec: 'Fisioterapia', cat: 'Fisioterapia', place: 'Medlab, Managua', km: '6.3 km', rating: '5.0', p: 33, o: 40 },
  { i: 'MM', name: 'Dra. Marcela Miranda', spec: 'Ginecología y obstetricia', cat: 'Ginecología', place: 'Clínica San Juan', km: '6.4 km', rating: '4.9', p: 26, o: 35 },
  { i: 'EF', name: 'Dr. Emanuel Flores', spec: 'Medicina interna', cat: 'Medicina interna', place: 'Clínica Central', km: '3.1 km', rating: '4.8', p: 30, o: 38 },
  { i: 'LS', name: 'Dra. Lucía Solís', spec: 'Odontología', cat: 'Odontología', place: 'Clínica Dental Sonríe', km: '2.2 km', rating: '4.9', p: 20, o: 30 },
  { i: 'RP', name: 'Dr. Ramón Pérez', spec: 'Pediatría', cat: 'Pediatría', place: 'Hospital Infantil', km: '8.0 km', rating: '4.7', p: 28, o: 34 },
];
export const SPECIALTIES = ['Todos', 'Medicina interna', 'Ginecología', 'Dermatología', 'Pediatría', 'Cardiología', 'Fisioterapia', 'Odontología'];

export type ProductId = 'lab' | 'paq1' | 'paq2' | 'paq3' | 'ibu';
export interface Product { name: string; desc: string; icon: IconName; p: number; o: number }
export const PRODUCTS: Record<ProductId, Product> = {
  lab: { name: 'CA 19-9', desc: 'Examen de laboratorio en sangre · Easylab', icon: 'flask', p: 31.5, o: 35 },
  paq1: { name: 'Chequeo general', desc: 'Biometría, glucosa y perfil lipídico · Easylab', icon: 'package', p: 45, o: 60 },
  paq2: { name: 'Chequeo de la mujer', desc: 'Exámenes ginecológicos y hormonales · Easylab', icon: 'package', p: 55, o: 72 },
  paq3: { name: 'Chequeo cardiovascular', desc: 'Perfil lipídico y electrocardiograma · Easylab', icon: 'package', p: 60, o: 80 },
  ibu: { name: 'Ibuprofeno 600 mg', desc: 'Caja de 10 tabletas · Farmacia Hermanos Guerrero', icon: 'pill', p: 4.5, o: 5 },
};
export const savePct = (p: Product) => 'Ahorras ' + Math.round((1 - p.p / p.o) * 100) + ' % con tu plan';

export const PHARMACIES = [
  { name: 'Farmacia Hermanos Guerrero', km: '4.5 km' },
  { name: 'Farmacia Centroamericana Villa Fontana', km: '5.2 km' },
];

export const DAYS: [string, number][] = [['Mar', 13], ['Mié', 14], ['Jue', 15], ['Vie', 16], ['Sáb', 17], ['Dom', 18], ['Lun', 19]];
export const SUNDAY_IDX = 5;
export const SLOT_GROUPS = [
  { label: 'Mañana', slots: ['8:00 AM', '8:30 AM', '9:00 AM', '10:30 AM', '11:00 AM'] },
  { label: 'Tarde', slots: ['1:30 PM', '2:00 PM', '3:00 PM', '4:30 PM'] },
];

export type MoodId = 'feliz' | 'normal' | 'estresado' | 'triste' | 'enojado';
export const MOODS: { id: MoodId; label: string; icon: IconName }[] = [
  { id: 'feliz', label: 'Feliz', icon: 'smiley' },
  { id: 'normal', label: 'Normal', icon: 'smiley-meh' },
  { id: 'estresado', label: 'Estresado', icon: 'smiley-nervous' },
  { id: 'triste', label: 'Triste', icon: 'smiley-sad' },
  { id: 'enojado', label: 'Enojado', icon: 'smiley-angry' },
];
export const LOW_MOODS: MoodId[] = ['estresado', 'triste', 'enojado'];

export interface Order { type: string; icon: IconName; prov: string; date: string; status: 'En curso' | 'Completada' }
export const ORDERS: Order[] = [
  { type: 'Farmacia', icon: 'pill', prov: 'Farmacia Hermanos Guerrero', date: '18 ene 2025', status: 'En curso' },
  { type: 'Laboratorio clínico', icon: 'flask', prov: 'Golab by Medlab', date: '3 jul 2024', status: 'Completada' },
  { type: 'Farmacia', icon: 'pill', prov: 'Farmacia Centroamericana Villa Fontana', date: '6 may 2024', status: 'En curso' },
  { type: 'Farmacia', icon: 'pill', prov: 'Farmacia Centroamericana Villa Fontana', date: '29 mar 2024', status: 'Completada' },
];

export const FICHA: [IconName, string, string][] = [
  ['drop', 'Tipo de sangre', 'O+'], ['warning', 'Alergias', 'Penicilina'], ['heartbeat', 'Condiciones', 'Ninguna registrada'],
  ['pill', 'Medicamentos actuales', 'Ninguno'], ['ruler', 'Estatura y peso', '1.75 m · 78 kg'], ['phone', 'Contacto de emergencia', 'Ana Rivas'],
];
export const HISTORIAL: { icon: IconName; tipo: string; doc: string; fecha: string; bg: string; fg: string }[] = [
  { icon: 'stethoscope', tipo: 'Medicina general', doc: 'Dr. Emanuel Flores', fecha: '24 sep 2026', bg: 'var(--mint-50)', fg: 'var(--mint-700)' },
  { icon: 'brain', tipo: 'Psicología', doc: 'Lic. Carla Méndez', fecha: '2 sep 2026', bg: 'var(--color-wellness-soft)', fg: 'var(--color-wellness)' },
  { icon: 'stethoscope', tipo: 'Medicina general', doc: 'Dra. Ana Torres', fecha: '11 ago 2026', bg: 'var(--mint-50)', fg: 'var(--mint-700)' },
];
export const RECETAS = [['Ibuprofeno 600 mg', 'Dr. Emanuel Flores · 24 sep 2026'], ['Loratadina 10 mg', 'Dra. Ana Torres · 11 ago 2026']];
export const RESULTADOS = [['CA 19-9', 'Golab by Medlab · 3 jul 2024'], ['Biometría hemática', 'Golab by Medlab · 3 jul 2024']];
export const DETALLE = [['Fecha', '24 sep 2026'], ['Hora', '5:14 PM'], ['Canal', 'Llamada'], ['Duración', '2 min']];
export const TIEMPOS = [['Creada', '4:14 PM'], ['Iniciada', '4:15 PM'], ['Finalizada', '4:18 PM'], ['Tipo', 'General']];

export const CONVERSATIONS: { icon: IconName; name: string; last: string; when: string }[] = [
  { icon: 'lifebuoy', name: 'Soporte EasyMD', last: '¿En qué te podemos ayudar?', when: 'Hoy' },
  { icon: 'stethoscope', name: 'Dr. Emanuel Flores', last: 'Tu receta ya está en tu expediente.', when: '24 sep' },
];
export const INITIAL_CHATS: Record<string, { me: boolean; t: string }[]> = {
  'Soporte EasyMD': [{ me: false, t: 'Hola, Nicolás. ¿En qué te podemos ayudar?' }],
  'Dr. Emanuel Flores': [{ me: false, t: 'Hola, Nicolás. Tu receta ya está en tu expediente. ¿Cómo sigues?' }],
};

export const FAMILY = [['NR', 'Nicolás'], ['AR', 'Ana'], ['MR', 'Mateo']];
export const CONSULT_FOR = [['yo', 'Para mí (Nicolás)'], ['ana', 'Ana · pareja'], ['mateo', 'Mateo · hijo']];

export const BENEFITS: { icon: IconName; label: string; tag: string; tone: Tone }[] = [
  { icon: 'stethoscope', label: 'Médico 24/7', tag: 'Incluido', tone: 'ok' },
  { icon: 'brain', label: 'Psicología', tag: 'Ilimitada', tone: 'ok' },
  { icon: 'pill', label: 'Farmacia', tag: 'Descuento', tone: 'info' },
  { icon: 'flask', label: 'Laboratorio', tag: 'Descuento', tone: 'info' },
  { icon: 'scan', label: 'Imagen', tag: 'Descuento', tone: 'info' },
  { icon: 'tooth', label: 'Odontología', tag: 'Descuento', tone: 'info' },
];

export const CONCIERGE_FEATURES: [IconName, string][] = [
  ['pill', 'Confirma tu receta y pide la entrega en un toque'],
  ['flask', 'Te explica tus resultados en palabras simples'],
  ['calendar-check', 'Agenda tus seguimientos y te recuerda tus citas'],
  ['bell', 'Te recuerda tomar tus medicamentos'],
];

export const WELLNESS: [string, string, string][] = [
  ['Estudio Yoga Vida', 'Yoga · 2.1 km', '-20 %'], ['Spa Serena', 'Spa y masajes · 3.4 km', '-15 %'],
  ['Medicina Natural Raíz', 'Medicina naturista · 4.0 km', '-10 %'], ['Tienda Fit', 'Proteínas y suplementos', '-10 %'],
];
export const EXERCISES: [string, string][] = [['Respiración 4-4', '1 min · baja el estrés'], ['Calma antes de dormir', '3 min'], ['Pausa en el trabajo', '2 min']];
export const PACKAGES: [ProductId, string, string][] = [
  ['paq1', 'Chequeo general', 'Biometría, glucosa y perfil lipídico'],
  ['paq2', 'Chequeo de la mujer', 'Exámenes ginecológicos y hormonales'],
  ['paq3', 'Chequeo cardiovascular', 'Perfil lipídico y electrocardiograma'],
];
export const FAQ: [string, string][] = [
  ['¿Cuánto tarda el médico?', 'Menos de 5 minutos, las 24 horas.'],
  ['¿La psicología tiene límite?', 'No. Es ilimitada en tu plan.'],
  ['¿Qué incluye mi plan?', 'Abre Mi cuenta y toca "Ver qué incluye".'],
  ['¿Cómo uso un descuento?', 'Abre el servicio y muestra el código o compra en la app.'],
];

export const ONB_PLAN_INCL = ['Médico general 24/7 por video o chat', 'Psicología ilimitada', 'Descuentos en farmacia, laboratorio y especialistas'];
export const ONB_ALERGIAS = ['Ninguna', 'Penicilina', 'Aspirina', 'Mariscos', 'Otra'];
export const ONB_CONDICIONES = ['Ninguna', 'Diabetes', 'Hipertensión', 'Asma', 'Otra'];
export const ONB_PERMS: { k: 'notif' | 'cam' | 'loc'; icon: IconName; title: string; sub: string }[] = [
  { k: 'notif', icon: 'bell-ringing', title: 'Notificaciones', sub: 'Te avisamos cuando el médico se conecte y cuando tu receta esté lista.' },
  { k: 'cam', icon: 'video-camera', title: 'Cámara y micrófono', sub: 'Para tus videoconsultas.' },
  { k: 'loc', icon: 'map-pin', title: 'Ubicación', sub: 'Para mostrarte farmacias y clínicas cercanas.' },
];

export const EXITO = {
  cita: { title: 'Cita agendada', body: '' },
  pedido: { title: 'Pedido confirmado', body: 'Puedes seguir el estado de tu pedido en Órdenes.' },
  datos: { title: 'Datos guardados', body: 'Tus médicos verán la información actualizada.' },
  tarjeta: { title: 'Tarjeta guardada', body: 'Ya puedes usarla en tus pagos.' },
  direccion: { title: 'Dirección guardada', body: 'La verás al confirmar tus pedidos.' },
  familiar: { title: 'Familiar agregado', body: 'Ya puedes pedir consultas para esta persona.' },
  ficha: { title: 'Ficha actualizada', body: 'Tus médicos verán la información más reciente en tu próxima consulta.' },
};
export type ExitoKey = keyof typeof EXITO;
