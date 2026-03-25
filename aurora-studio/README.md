# Aurora Studio

Demo profesional construida con Next.js, TypeScript y Tailwind CSS para practicar Codex y comparar despliegue en Cloudflare y Vercel.

## Correr localmente

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
npm run cf:build
npm run preview
npm run deploy
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Estado local y datos mock en español

## Despliegue en Cloudflare

Este proyecto quedó preparado para Cloudflare Workers con OpenNext.

1. Autenticación:

```bash
npx wrangler login
```

2. Build compatible con Workers:

```bash
npm run cf:build
```

3. Preview local del runtime de Cloudflare:

```bash
npm run preview
```

4. Deploy:

```bash
npm run deploy
```

Archivos importantes:

- `wrangler.jsonc`: configuración del Worker
- `open-next.config.ts`: adaptador OpenNext
- `.dev.vars`: variables para desarrollo local del runtime de Cloudflare
- `public/_headers`: caché larga para assets estáticos

Nota práctica:

- Para una app Next.js con App Router como esta, Cloudflare hoy empuja el flujo de Workers/OpenNext. Cloudflare Pages sigue siendo útil, pero queda más cómodo para export estático o setups menos full-stack.

## Despliegue en Vercel

La compatibilidad con Vercel se mantiene sin cambios especiales. Podés:

```bash
npm install
npm run build
```

Y luego importar el repo en Vercel o usar:

```bash
npx vercel
```
