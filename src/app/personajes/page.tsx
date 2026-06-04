import { characters } from "@/data/characters";
import { CharacterCard } from "@/components/character-card";

export default function PersonajesPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12 pb-8 border-b border-border">
          <p className="text-sm font-semibold text-primary mb-2 tracking-widest uppercase">
            Base de datos
          </p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">Personajes</h1>
              <p className="text-muted">
                Explora todos los personajes disponibles en Neverness to Everness.
              </p>
            </div>
            <div className="text-sm text-muted">
              <span className="font-bold text-foreground text-2xl">{characters.length}</span>{" "}
              {characters.length === 1 ? "personaje" : "personajes"}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </main>
  );
}