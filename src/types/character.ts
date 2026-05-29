export type Element =
  | "caos"
  | "cosmos"
  | "anima"
  | "psique"
  | "lakshana"
  | "encantamiento";

export type Rarity = "A" | "S";

export type Role =
  | "dps-principal"
  | "dps-rafaga"
  | "buffer"
  | "tank"
  | "healer";

export type Character = {
  id: string;
  nombre: string;
  imagen: string;
  rareza: Rarity;
  elemento: Element;
  rol: Role;
  descripcion?: string;
};