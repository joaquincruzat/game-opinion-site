export const opinionModule = {
  namespaced: true,
  state: {
    opinionList: []
  },
  mutations: {
    SET_OPINIONLIST(state, newOpinionList) {
      state.opinionList.push(newOpinionList)
    },
    REMOVE_OPINIONLIST(state, index) {
      state.opinionList.splice(index, 1)
    },
    EDIT_OPINIONLIST(state, index) {
      state.opinionList[(index[0].id = index[1])]
    }
  },
  actions: {
    addOpinion(context, opinion) {
      context.commit('SET_OPINIONLIST', opinion)
    },
    removeOpinion(context, opinion) {
      context.commit('REMOVE_OPINIONLIST', opinion)
    },
    editOpinion(context, index) {
      context.commit('EDIT_OPINIONLIST', index)
    }
  }
}
