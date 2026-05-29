import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
         <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/nte-logo.png"
            alt="NTEArchive logo"
            width={50}
            height={50}
            className="rounded-lg"
            
          />
          <span className="text-2xl font-bold text-slate-900 dark:text-white">
            NTEArchive
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/personajes"
            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Personajes
          </Link>
          <Link
            href="/tier-list"
            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Tier List
          </Link>
          <Link
            href="/guias"
            className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            Guías
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}