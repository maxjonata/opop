import { defineStore } from "pinia";
import { Personagem } from "~/domain";

export const usePersonagensStore = defineStore("personagens", {
  state: () => ({
    charactersheets: [],
  }),
  getters: {},
  actions: {
    getPersonagensDe(nomeDoJogador: string): Personagem[] | undefined {
      return this.charactersheets.reduce(
        (personagens: Personagem[], personagem: Personagem): Personagem[] => {
          if (personagem.nome_do_jogador === nomeDoJogador) {
            personagens.push(personagem);
          }

          return personagens;
        },
        [],
      );
    },
  },
});
