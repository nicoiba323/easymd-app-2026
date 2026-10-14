// EasyMD App — modelos de datos derivados del prototipo.
// Moneda: USD (mostrar como "US$31.50"). Fechas: ISO 8601 en API, formato "24 sep 2026" en UI (es-419).

export type ID = string;

export interface User {
  id: ID;
  firstName: string;           // "Nicolás"
  lastName: string;            // "Rivas"
  birthDate: string;           // "1990-04-12"
  nationalId?: string;         // cédula "001-120490-0001A"
  phone: string;               // "+505 8888 0000"
  email: string;
  avatarUrl?: string;          // si no hay, usar iniciales
}

export interface Plan {
  id: ID;
  name: string;                // "Plan Plus"
  priceMonthly: number;        // 14.95
  status: 'activo' | 'vencido' | 'pendiente';
  maxFamilyMembers: number;
  benefits: PlanBenefit[];
}
export interface PlanBenefit {
  icon: string;                // nombre Phosphor
  label: string;               // "Médico 24/7"
  tag: 'Incluido' | 'Ilimitada' | 'Descuento';
}

export interface FamilyMember {
  id: ID;
  fullName: string;
  relationship: string;        // "hija", "padre", "pareja"
  birthDate: string;
  nationalId?: string;
}

export interface MedicalProfile {   // Expediente → Ficha
  bloodType?: string;          // "O+"
  allergies: string[];         // ["Penicilina"]
  conditions: string[];
  currentMedications: string[];
  heightM?: number;            // 1.75
  weightKg?: number;           // 78
  emergencyContact?: { name: string; phone: string };
  updatedAt: string;
}

export type ConsultKind = 'medico' | 'psico';
export type ConsultMethod = 'video' | 'chat';
export interface ConsultRequest {
  kind: ConsultKind;
  patientId: ID;               // usuario o familiar ("¿Para quién?")
  reason: string;              // obligatorio, min 1 carácter no vacío
  method: ConsultMethod;
}
export interface Consultation {
  id: ID;
  kind: ConsultKind;
  type: string;                // "Medicina general" | "Psicología"
  professional: Professional;
  status: 'en_espera' | 'conectando' | 'en_curso' | 'finalizada' | 'cancelada';
  channel: 'Videollamada' | 'Chat' | 'Llamada';
  createdAt: string; startedAt?: string; endedAt?: string;
  durationMin?: number;
  summary?: string;
  prescriptionIds: ID[];
  estimatedWaitMin?: number;   // "menos de 5 min"
}

export interface Professional {
  id: ID;
  name: string;                // "Dr. Emanuel Flores"
  initials: string;            // "EF"
  specialty: string;           // "Medicina interna"
  category: SpecialtyCategory;
  license?: string;            // "Registro 73222"
  place?: string;              // "Clínica Central"
  distanceKm?: number;
  rating?: number;             // 4.8
  price?: number;              // precio con plan
  originalPrice?: number;      // precio sin plan (tachado)
  photoUrl?: string;
}
export type SpecialtyCategory = 'Medicina interna' | 'Ginecología' | 'Dermatología' | 'Pediatría' | 'Cardiología' | 'Fisioterapia' | 'Odontología';

export interface AvailabilityDay { date: string; slots: TimeSlot[] }   // 7 días desde hoy
export interface TimeSlot { start: string; period: 'Mañana' | 'Tarde'; available: boolean }
export interface Appointment {
  id: ID; professionalId: ID; start: string; status: 'confirmada' | 'cancelada' | 'completada';
}

export interface Prescription {
  id: ID; medication: string; dosage: string; // "1 tableta cada 8 horas por 3 días"
  professional: string; date: string; pdfUrl: string;
}
export interface LabResult {
  id: ID; name: string; lab: string; date: string; status: 'pendiente' | 'listo'; pdfUrl?: string;
}

export interface Service {
  id: 'farmacias' | 'easylab' | 'especialistas' | 'clinicas' | 'fisioterapia' | 'odontologia' | 'wellness' | 'medita' | 'paquetes';
  name: string; benefit: string; icon: string; isFavorite: boolean;
}

export interface Pharmacy { id: ID; name: string; distanceKm: number; discountPct?: number }
export interface Product {
  id: ID; name: string; description: string;
  type: 'lab' | 'paquete' | 'medicamento';
  icon: 'flask' | 'package' | 'pill';
  price: number; originalPrice: number;   // "Ahorras X % con tu plan" = round((1 - price/originalPrice)*100)
  providerId: ID;
}
export interface CartItem { productId: ID; qty: number }  // qty 1–10

export interface Order {
  id: ID; type: 'Farmacia' | 'Laboratorio clínico';
  provider: string; date: string; status: 'En curso' | 'Completada';
  invoiceId: ID;
}
export interface Invoice {
  id: ID; number: string;     // "000184"
  lines: { label: string; amount: number }[];
  planDiscount: number; shipping: number; total: number;
  paymentMethodLabel: string; // "Visa •••• 4821"
  pdfUrl: string;
}

export interface PaymentMethod { id: ID; brand: 'Visa' | 'Mastercard' | string; last4: string; exp: string; isDefault: boolean }
export interface Address { id: ID; label: string; line: string; city: string; phone: string; isDefault: boolean }

export type Mood = 'feliz' | 'normal' | 'estresado' | 'triste' | 'enojado';
export interface MoodEntry { date: string; mood: Mood }
// Si mood ∈ {estresado, triste, enojado} tras guardar → sugerir consulta psicológica.

export interface Conversation { id: ID; name: string; icon: string; lastMessage: string; lastAt: string; unread: number }
export interface Message { id: ID; conversationId: ID; fromMe: boolean; text: string; sentAt: string }

export interface WellnessPartner { id: ID; name: string; category: string; distanceKm?: number; discountPct: number }
export interface Coupon { code: string; partnerId: ID; validWhilePlanActive: boolean }

// ---------- Datos de ejemplo del prototipo ----------
export const SAMPLE = {
  professionals: [
    { initials: 'NI', name: 'Dr. Nicolás Ibáñez', specialty: 'Fisioterapia', place: 'Medlab, Managua', distanceKm: 6.3, rating: 5.0, price: 33, originalPrice: 40 },
    { initials: 'MM', name: 'Dra. Marcela Miranda', specialty: 'Ginecología y obstetricia', place: 'Clínica San Juan', distanceKm: 6.4, rating: 4.9, price: 26, originalPrice: 35 },
    { initials: 'EF', name: 'Dr. Emanuel Flores', specialty: 'Medicina interna', place: 'Clínica Central', distanceKm: 3.1, rating: 4.8, price: 30, originalPrice: 38 },
    { initials: 'LS', name: 'Dra. Lucía Solís', specialty: 'Odontología', place: 'Clínica Dental Sonríe', distanceKm: 2.2, rating: 4.9, price: 20, originalPrice: 30 },
    { initials: 'RP', name: 'Dr. Ramón Pérez', specialty: 'Pediatría', place: 'Hospital Infantil', distanceKm: 8.0, rating: 4.7, price: 28, originalPrice: 34 },
  ],
  products: [
    { id: 'lab', name: 'CA 19-9', description: 'Examen de laboratorio en sangre · Easylab', type: 'lab', price: 31.5, originalPrice: 35 },
    { id: 'paq1', name: 'Chequeo general', description: 'Biometría, glucosa y perfil lipídico · Easylab', type: 'paquete', price: 45, originalPrice: 60 },
    { id: 'paq2', name: 'Chequeo de la mujer', description: 'Exámenes ginecológicos y hormonales · Easylab', type: 'paquete', price: 55, originalPrice: 72 },
    { id: 'paq3', name: 'Chequeo cardiovascular', description: 'Perfil lipídico y electrocardiograma · Easylab', type: 'paquete', price: 60, originalPrice: 80 },
    { id: 'ibu', name: 'Ibuprofeno 600 mg', description: 'Caja de 10 tabletas · Farmacia Hermanos Guerrero', type: 'medicamento', price: 4.5, originalPrice: 5 },
  ],
  pharmacies: [
    { name: 'Farmacia Hermanos Guerrero', distanceKm: 4.5 },
    { name: 'Farmacia Centroamericana Villa Fontana', distanceKm: 5.2 },
  ],
  timeSlots: { Mañana: ['8:00 AM', '8:30 AM', '9:00 AM', '10:30 AM', '11:00 AM'], Tarde: ['1:30 PM', '2:00 PM', '3:00 PM', '4:30 PM'] },
  wellness: [
    { name: 'Estudio Yoga Vida', category: 'Yoga', distanceKm: 2.1, discountPct: 20 },
    { name: 'Spa Serena', category: 'Spa y masajes', distanceKm: 3.4, discountPct: 15 },
    { name: 'Medicina Natural Raíz', category: 'Medicina naturista', distanceKm: 4.0, discountPct: 10 },
    { name: 'Tienda Fit', category: 'Proteínas y suplementos', discountPct: 10 },
  ],
  plan: { name: 'Plan Plus', priceMonthly: 14.95 },
} as const;
