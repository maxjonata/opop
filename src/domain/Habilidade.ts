import Bonus from "./Bonus";

export default interface Habilidade {
  nome: string;
  descricao: string;
  gasto: number;
  barra_gasta: "pontos_de_vida" | "pontos_de_esforco" | undefined;
  tipo: "passiva" | "ativa";
  Bonus: Bonus[];
}
