<template>
  <nav>
    <div class="nav-item">
      <a href="#" class="empty">....</a>
    </div>
    <div class="nav-item">
      <router-link to="/" class="lojinha-logo">lojinha</router-link>
    </div>
    <div class="nav-item cart-icon">
      <router-link to="/cart">Carrinho ({{itemsInCart}})</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0px;
  height: 60px;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-around;
}

a {
  text-decoration: none;
  color: white;
}

.nav-item {
  flex: 1;
}

.lojinha-logo {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.nav-item.cart-icon {
  text-align: right;
  margin-right: 20px;
}
</style>

<script>
import store from "@/store";

export default {
  computed: {
    itemsInCart: () => store.getters.itemsInCart,
  },
};
</script>