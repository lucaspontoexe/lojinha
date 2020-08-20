import Vue from "vue";
import Vuex from "vuex";
import productList from "@/products.json";
import Product from "@/types/Product";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: productList,
    cartItems: Array<Product>(),
  },
  mutations: {
    addToCart(state, item) {
      state.cartItems.push(item);
    },
  },
  actions: {},
  modules: {},
});
