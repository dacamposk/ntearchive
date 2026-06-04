import type { Element, Role, Rarity } from "@/types/character";

export const elementLabels: Record<Element, string> = {
  caos: "Caos",
  cosmos: "Cosmos",
  anima: "Anima",
  psique: "Psique",
  lakshana: "Lakshana",
  encantamiento: "Encantamiento",
};

export const roleLabels: Record<Role, string> = {
  "dps-principal": "DPS Principal",
  "dps-rafaga": "DPS de Ráfaga",
  buffer: "Impulso de Daño",
  tank: "Escudo",
  healer: "Curación",
};

export const rarityLabels: Record<Rarity, string> = {
  A: "Rango A",
  S: "Rango S",
};