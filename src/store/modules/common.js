export default {
  state: {
    loading: false,
    error: null,
    resizeClass: "",
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    getSize (state, payload) {
      state.resizeClass = payload
    },
  },
  actions: {
    setLoading ({commit}, payload) {
      commit('setLoading', payload)
    },
    setError ({commit}, payload) {
      commit('setError', payload)
    },
    clearError ({commit}) {
      commit('clearError')
    },
    setSize ({commit}, screenSize) {
      let className = ""
        if (screenSize >= 1904) className= "xl"
        if (screenSize < 1904) className= "lg"
        if (screenSize < 1264) className= "md"
        if (screenSize < 960) className= "sm"
        if (screenSize  < 600) className ="xs"
      commit('getSize' , className)
    },
  },
  getters: {
    loading (state){
      return state.loading
    },
    error (state){
      return state.error
    },
    resizeClass(state) {
      return state.resizeClass
    },
  }
}
