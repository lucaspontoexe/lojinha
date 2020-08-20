import Vue from "vue";
import Vuex from "vuex";
import Product from "@/types/Product";
import productList from "@/products.json";

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
  getters: {
    itemsInCart: store => store.cartItems.length
  }
});
