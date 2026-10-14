# EasyMD · App de pacientes (rediseño v2)

Implementación en React + Vite + TypeScript del prototipo `project/EasyMD Redesign v2.dc.html`.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

## Vistas
- `/`: la app. La primera vez abre el onboarding (se guarda en `localStorage` con la clave `emd.onboarded`).
- `/?onb`: fuerza el onboarding.
- `/?estado=cargando|vacio|error`: estado de las listas de Expediente → Historial, Órdenes y Mensajes. Reemplaza el control "Estado de datos" del prototipo.
- `/#/design-system`: colores, tipografía, botones, campos, badges y estados con los componentes reales.

## Estructura
- `src/styles/tokens/`: tokens del design system de EasyMD, copiados sin cambios.
- `src/styles/app.css`: tokens propios del rediseño (degradados, `--danger-700`, `--warning-700`), animaciones y clases de componentes.
- `src/ui/`: `Icon` (Phosphor duotone; solo se empaqueta ese peso) y componentes (Button, IconButton, Badge, Segmented, Field, SearchBox, Toggle, EmptyState, ErrorState, SkeletonList…).
- `src/state/store.tsx`: navegación con pila (`go`, `tab`, `back`) y estado de la app, igual que la lógica del prototipo.
- `src/screens/`: las pantallas. `Pantalla.tsx` agrupa las secundarias con la misma plantilla (Wellness, cupón, Medita, Paquetes, datos, pagos, tarjeta, direcciones, familiar, factura, documento, FAQ).
- `src/data/mock.ts`: datos de ejemplo. Los `TODO(API)` marcan dónde va cada llamada de `design_handoff_easymd_app/api-contract.md`.
