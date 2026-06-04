import Image from "next/image";
import { notFound } from "next/navigation";
import { characters } from "@/data/characters";
import { elementLabels, roleLabels, rarityLabels } from "@/lib/character-labels";

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
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-surface border border-border">
            <Image
              src={character.imagen}
              alt={character.nombre}
              fill
              quality={95}
              priority
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-primary mb-2 tracking-widest uppercase">
              {rarityLabels[character.rareza]}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {character.nombre}
            </h1>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-primary rounded-full" />
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Elemento</p>
                  <p className="font-semibold">{elementLabels[character.elemento]}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-1 h-6 bg-accent rounded-full" />
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">Rol</p>
                  <p className="font-semibold">{roleLabels[character.rol]}</p>
                </div>
              </div>
            </div>

            {character.descripcion && (
              <div className="p-4 rounded-xl bg-surface border border-border">
                <p className="text-muted leading-relaxed italic">
                  &ldquo;{character.descripcion}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}