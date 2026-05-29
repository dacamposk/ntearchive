import Image from "next/image";
import { characters } from "@/data/characters";
import type { Element, Role, Rarity } from "@/types/character";
import Link from "next/link";

const elementLabels: Record<Element, string> = {
  caos: "Caos",
  cosmos: "Cosmos",
  anima: "Anima",
  psique: "Psique",
  lakshana: "Lakshana",
  encantamiento: "Encantamiento",
};

const roleLabels: Record<Role, string> = {
  "dps-principal": "DPS Principal",
  "dps-rafaga": "DPS de Ráfaga",
  buffer: "Impulso de Daño",
  tank: "Escudo",
  healer: "Curación",
};

const rarityLabels: Record<Rarity, string> = {
  A: "Rango A",
  S: "Rango S",
};

export default function PersonajesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Personajes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character) => (
          <Link
  key={character.id}
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
          ))}
        </div>
      </div>
    </main>
  );
}