import Bonus from "./Bonus";

export default interface Ataque {
  id: number;
  nome: string;
  atributo: string;
  pericia: string;
  dano1mao: string;
  dano2mao: string;
  critico: number;
  critBonus: number;
  alcance: number;
  especial: string;
  tipo: string;
  bonus: Bonus[];
}
