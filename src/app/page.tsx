import Link from "next/link";
import { ArrowRight, Users, BarChart3, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--primary)_0%,_transparent_50%)] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--accent)_0%,_transparent_50%)] opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-muted">Guía no oficial · Actualizado</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight max-w-4xl">
            Domina cada batalla en{" "}
            <span className="text-primary">Neverness to Everness</span>
          </h1>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed">
            Builds optimizadas, tier lists actualizadas y guías detalladas para sacar el máximo de cada personaje.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/personajes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Explorar personajes
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/tier-list"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border bg-surface rounded-lg hover:border-primary transition-colors font-medium"
            >
              Ver tier list
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href="/personajes"
            className="group p-6 border border-border rounded-xl bg-surface hover:border-primary transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Users className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Personajes</h3>
            <p className="text-sm text-muted leading-relaxed">
              Información detallada de cada personaje, builds recomendadas y equipos óptimos.
            </p>
          </Link>

          <Link
            href="/tier-list"
            className="group p-6 border border-border rounded-xl bg-surface hover:border-primary transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <BarChart3 className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Tier List</h3>
            <p className="text-sm text-muted leading-relaxed">
              Ranking actualizado según el meta actual del juego.
            </p>
          </Link>

          <Link
            href="/guias"
            className="group p-6 border border-border rounded-xl bg-surface hover:border-primary transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <BookOpen className="text-primary" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Guías</h3>
            <p className="text-sm text-muted leading-relaxed">
              Tutoriales de misiones, mecánicas y estrategias avanzadas.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}