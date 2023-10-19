import {
  Roleplay,
  Atributos,
  Pericia,
  Origem,
  Classe,
  Ataque,
  Inventario,
} from ".";

// TODO: temporary points / states
export default interface Personagem {
  roleplay: Roleplay;
  atributos: Atributos;
  pericias: Pericia[];
  origem: Origem;
  classe: Classe;
  ataques: Ataque[];
  inventario: Inventario;
  limite_de_item: number[];
  limite_de_credito: number;
  carga: number[];
  patente: number;
  name: string;
  game?: string;
  nex: number;
  deslocamento: number;
  pontos_de_vida: number[];
  pontos_de_esforco: number[];
  pontos_de_sanidade: number[];
  protecao: number;
  resistencias: string[];
}
