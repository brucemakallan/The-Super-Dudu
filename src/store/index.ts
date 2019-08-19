import Vue from 'vue';
import Vuex from 'vuex';
import products from './modules/products';
import loading from './modules/loading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products,
    loading,
  },
});
