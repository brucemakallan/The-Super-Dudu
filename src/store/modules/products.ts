import axios from 'axios';
import Product from '../../models/Product';

interface State {
  products: Product[];
  product: Product;
}

export default {
  state: {
    products: [],
    product: {},
  },

  getters: {
    allProducts: (state: State): Product[] => state.products,
    oneProduct: (state: State): Product => state.product,
  },

  mutations: {
    setAllProducts: (state: State, payload: Product[]) => state.products = payload,
    setOneProduct: (state: State, payload: Product) => state.product = payload,
  },

  actions: {
    fetchAllProducts: async ({ commit }: any) => await axios.get(process.env.VUE_APP_API_URL)
        .then((response) => {
          commit('setAllProducts', response.data);
        })
        .catch((error) => console.log(error)),
  },
};
