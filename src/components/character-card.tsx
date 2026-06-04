import Image from "next/image";
import Link from "next/link";
import type { Character } from "@/types/character";
import { elementLabels, roleLabels, rarityLabels } from "@/lib/character-labels";

type CharacterCardProps = {
  character: Character;
};

export function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link
      href={`/personajes/${character.id}`}
      className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden bg-slate-50 dark:bg-slate-800 hover:scale-105 transition-transform block"
    >
      <div className="relative w-full h-48 bg-slate-200 dark:bg-slate-700">
        <Image
          src={character.imagen}
          alt={character.nombre}
          fill
          quality={90}
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{character.nombre}</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Elemento: {elementLabels[character.elemento]}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Rol: {roleLabels[character.rol]}
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Rareza: {rarityLabels[character.rareza]}
        </p>
      </div>
    </Link>
  );
}