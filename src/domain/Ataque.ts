import Bonus from "./Bonus";

export default interface Ataque {
  nome: string;
  dado: string;
  dano: string;
  critico: number;
  alcance: number;
  especial: string;
  bonus: Bonus[];
}
