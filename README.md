# Belentani Neural Icons · HBO Noir Glass

Pantalla TV horizontal 16:9 en cascada estilo Smart Watch con 3% luz líquida,
un color propio por proyecto, backend CLI interno y modal de reglas de diseño.

## Stack

Vite 6 + React 19 + TypeScript + Tailwind CSS 4 + motion + lucide-react.
Opcional: Gemini API (`@google/genai`) para funciones AI.

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # solo si usas funciones AI, pon tu GEMINI_API_KEY
npm run dev                  # http://localhost:3000
```

## Scripts

| Comando         | Qué hace                    |
| --------------- | --------------------------- |
| `npm run dev`   | Vite dev en puerto 3000     |
| `npm run build` | Build producción a `dist/`  |
| `npm run preview` | Previsualiza el build     |
| `npm run lint`  | `tsc --noEmit`              |

## Vistas

- `cascade-3d` — cascada 3D de cristal (principal)
- `smartwatch-cascade` — cascada estilo Smart Watch + workbench de iconos
- `zero-text` — una sola palabra por proyecto
- `netflix-cinema` — cartelera cinematográfica

Modales: `IconStudio` (4K), `CustomIconStudio` (laboratorio),
`HarmoniaEscaparatismo` (reglas), `DoctorFix` (diagnóstico),
drawer de artículos de luz líquida y terminal DevOps (tecla `` ` ``).

## Deploy en Vercel

Importa el repo, añade `GEMINI_API_KEY` en Environment Variables solo si
usas las funciones AI, y Deploy (`vercel.json` ya incluido).
