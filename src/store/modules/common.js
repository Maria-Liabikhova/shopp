export default {
  state: {
    loading: false,
    error: null,
    resizeClass: " ",
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
    getMobile (state, payload) {
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
    setMobile ({commit}, payload) {
      commit('getMobile' , payload)
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
