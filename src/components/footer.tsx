import Link from "next/link";
import { Heart } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NTEArchive
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Tu guía completa para Neverness to Everness. Builds, tier list, guías y más.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/personajes" className="text-muted hover:text-primary transition-colors">
                  Personajes
                </Link>
              </li>
              <li>
                <Link href="/tier-list" className="text-muted hover:text-primary transition-colors">
                  Tier List
                </Link>
              </li>
              <li>
                <Link href="/guias" className="text-muted hover:text-primary transition-colors">
                  Guías
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 text-foreground">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
       <Link
  href="https://github.com/dacamposk/ntearchive"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-muted hover:text-primary transition-colors"
>
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
  GitHub
</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p className="text-center md:text-left">
            Sitio hecho por fans, sin afiliación oficial con InfoldGames ni Neverness to Everness.
            Todos los nombres, imágenes y propiedad intelectual pertenecen a sus respectivos dueños.
          </p>
          <p className="flex items-center gap-1 whitespace-nowrap">
            Made with <Heart size={12} className="text-accent fill-accent" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}