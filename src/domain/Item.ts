import { Ataque, Bonus } from "./";

export default interface Item {
  id: number;
  nome: string;
  descricao: string;
  categoria: number;
  espaco: number;
  quantidade: number;
  tipo: string;
  tipoId: number;
  tipoItem: string;
  bonus: Bonus[];
  ataques?: Ataque[];
  protecao?: number;
}
