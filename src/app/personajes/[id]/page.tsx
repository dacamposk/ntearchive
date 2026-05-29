import Image from "next/image";
import { notFound } from "next/navigation";
import { characters } from "@/data/characters";
import type { Element, Role, Rarity } from "@/types/character";

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

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PersonajePage({ params }: PageProps) {
  const { id } = await params;
  const character = characters.find((c) => c.id === id);

  if (!character) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative w-full aspect-square bg-slate-200 dark:bg-slate-700 rounded-lg overflow-hidden">
            <Image
              src={character.imagen}
              alt={character.nombre}
              fill
              quality={90}
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-4">{character.nombre}</h1>

            <div className="space-y-2 mb-6">
              <p className="text-lg">
                <span className="font-semibold">Elemento:</span>{" "}
                {elementLabels[character.elemento]}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Rol:</span>{" "}
                {roleLabels[character.rol]}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Rareza:</span>{" "}
                {rarityLabels[character.rareza]}
              </p>
            </div>

            {character.descripcion && (
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {character.descripcion}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}