import Vue from "vue";
import Vuex from "vuex";
import Product from "@/types/Product";
import productList from "@/products.json";
import asyncTimeout from "@/utils/asyncTimeout";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: productList,
    cartItems: Array<Product>(),
  },
  mutations: {
    addToCart(state, item: Product) {
      state.cartItems.push(item);
    },
    removeItemFromCart(state, product: Product) {
      state.cartItems = state.cartItems.filter(item => item.id !== product.id)
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
  actions: {
    checkout: async ({ state, commit }) => {
      await asyncTimeout(2000);
      // side effect: save to localStorage
      sessionStorage.setItem("cart_test", JSON.stringify(state.cartItems));
      commit("clearCart");
    },
  },
  modules: {},
  getters: {
    itemsInCart: (store) => store.cartItems.length,
    totalCartPrice: (store) =>
      store.cartItems
        .map((i) => i.price)
        .reduce((total, currentItem) => total + currentItem, 0),
  },
});
