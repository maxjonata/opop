import { Ataque, Bonus } from "./";

export default interface Item {
  nome: string;
  descricao: string;
  categoria: number;
  espaco: number;
  quantidade: number;
  tipo: string;
  tipoid: number;
  bonus: Bonus[];
  Ataques: Ataque[];
}
