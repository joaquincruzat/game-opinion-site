import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import { opinionModule } from './modules/OpinionModule'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: []
  },

  mutations: {
    GET_GAMES(state, games) {
      state.games = games
    }
  },
  actions: {
    async getGames({ commit }) {
      const { data: games } = await axios.get('/games.json')
      commit('GET_GAMES', games)
    }
  },
  getters: {
    gameByID: (state) => (id) => {
      const game = state.games.find((g) => g.id == id)
      return game
    }
  },
  modules: {
    opinionUser: opinionModule
  }
})
