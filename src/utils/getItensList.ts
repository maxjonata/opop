import { Item } from "~/domain";
import getAtaquesList from "./getAtaquesList";

export default function (): Item[] {
  const ataques = getAtaquesList();
  return [
    {
      id: 0,
      ataques: [ataques[0], ataques[1]],
      bonus: [],
      categoria: 1,
      descricao:
        "Uma arma de mão comum entre policiais e militares por ser facilmente recarregável.",
      espaco: 1,
      nome: "pistola",
      quantidade: 1,
      tipo: "arma de fogo - leve",
      tipoId: 5,
      tipoItem: "arma",
    },
    {
      id: 1,
      bonus: [],
      categoria: 1,
      descricao:
        "Jaqueta de couro pesada ou umcolete de kevlar. Essa proteção é tipicamente usada por seguranças e policiais.",
      espaco: 2,
      nome: "protecao leve",
      quantidade: 1,
      tipoItem: "protecao",
      tipo: "leve",
      tipoId: 1,
    },
    {
      id: 2,
      ataques: [],
      bonus: [],
      categoria: 1,
      descricao:
        "Um item comum que tenha uma utilidade específica, como um canivete, uma lupa, um smartphone ou um notebook.",
      espaco: 1,
      nome: "Utensílio",
      quantidade: 1,
      tipo: "acessorio",
      tipoId: 1,
      tipoItem: "geral",
    },
  ];
}
