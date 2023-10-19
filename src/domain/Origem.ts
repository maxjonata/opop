import { Pericia, Habilidade } from "./";

export default interface Origem {
  nome: string;
  descricao: string;
  pericias: Pericia[];
  habilidade: Habilidade;
}
