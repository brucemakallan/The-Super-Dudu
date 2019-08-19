interface State {
  isLoading: boolean;
}

export default {
  state: {
    isLoading: false,
  },
  getters: {
    isLoading: (state: State): boolean => state.isLoading,
  },
  mutations: {
    setIsLoading: (state: State): void => {
      state.isLoading = !state.isLoading;
    },
  },
  actions: {
    toggleIsLoading: ({ commit }: any): void => {
      commit('setIsLoading');
    },
  },
};
