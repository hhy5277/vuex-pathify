export const root = {

  namespaced: true,

  state: {
    value: 'hello from root',
  },

  getters: {
    value (state) {
      return String(state.value).toUpperCase()
    }
  },

  mutations: {
    SET_VALUE (state, value) {
      state.value = value
    }
  }
}

export const nested = Object.assign({}, root, {
  state: {
    value: 'hello from nested'
  }
})
