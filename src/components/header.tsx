import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-border bg-surface/80 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/nte-logo.png"
            alt="NTEArchive logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            NTEArchive
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/personajes"
            className="text-sm text-muted hover:text-foreground transition-colors font-medium"
          >
            Personajes
          </Link>
          <Link
            href="/tier-list"
            className="text-sm text-muted hover:text-foreground transition-colors font-medium"
          >
            Tier List
          </Link>
          <Link
            href="/guias"
            className="text-sm text-muted hover:text-foreground transition-colors font-medium"
          >
            Guías
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}