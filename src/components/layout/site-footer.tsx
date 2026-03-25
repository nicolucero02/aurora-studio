export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(4,8,20,0.95)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Aurora Studio
          </p>
          <p className="mt-4 font-serif text-3xl text-white">
            Branding, web y contenido para marcas modernas.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Proyecto demo creado para practicar Codex, estructura Next.js y
            comparar despliegue en Cloudflare y Vercel.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Navegación
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <a href="#servicios" className="transition hover:text-white">
              Servicios
            </a>
            <a href="#casos" className="transition hover:text-white">
              Casos de estudio
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Contacto demo
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>hola@aurorastudio.demo</p>
            <p>Buenos Aires, Argentina</p>
            <p>Disponibilidad limitada para proyectos Q2</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
