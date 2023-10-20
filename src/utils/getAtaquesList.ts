import { Ataque } from "~/domain";

export default function (): Ataque[] {
  return [
    {
      id: 0,
      alcance: 0,
      dano1mao: "1d4",
      dano2mao: "1d6",
      nome: "coronhada",
      tipo: "impacto",
      atributo: "FOR",
      pericia: "luta",
      critico: 20,
      critBonus: 2,
      especial: "",
      bonus: [],
    },
    {
      id: 1,
      alcance: 9,
      dano1mao: "1d12",
      dano2mao: "",
      nome: "pistola",
      tipo: "balistico",
      atributo: "AGI",
      pericia: "pontaria",
      critico: 18,
      critBonus: 2,
      especial: "",
      bonus: [],
    },
  ];
}
