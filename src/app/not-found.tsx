import Image from "next/image";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground flex items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="relative w-full aspect-square max-w-md mx-auto">
          <Image
            src="/images/404.png"
            alt="Error 404"
            fill
            quality={90}
            className="object-contain"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-primary mb-2 tracking-widest uppercase">
            Error 404
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Esta página{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              no existe
            </span>
          </h1>
          <p className="text-muted mb-8 text-lg">
            La página que buscas se perdió en una anomalía dimensional, o nunca existió.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Home size={18} />
              Volver al inicio
            </Link>
            <Link
              href="/personajes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-surface transition-colors font-medium"
            >
              <ArrowLeft size={18} />
              Ver personajes
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}