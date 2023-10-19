import { Habilidade, Pericia, Proficiencia } from ".";

export default interface Classe {
  ponto_de_vida_inicial: number;
  ponto_de_vida_por_nivel: number;
  pontos_de_esforco_inicial: number;
  pontos_de_esforco_por_nivel: number;
  sanidade_inicial: number;
  sanidade_por_nivel: number;
  proficiencias: Proficiencia[];
  pericias_treinadas: Pericia[][] | Pericia[];
  pericias_escolha: number;
  habilidades: Habilidade[];
}
