import { createStore } from 'vuex'

const store = createStore({
  state: {
    getters: {
      getNotes(state) {
        return state.notes;
      }
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

export default store;