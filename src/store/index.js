import { createStore } from 'vuex'

export default createStore({
  state: {
    title:'Vuex Store',
    notes:[]
  },
  mutations: {
    save(state,title){
      state.notes.push(title)
    }
  },
  actions: {
    saveNote({commit},title){
      commit('save', title)

    }
  },
  modules: {
  },
  getters:{
    totalNotes(state){
      return state.notes.length
    }
  }
})
