<template>
  <div id="page-cart">
    <h1>Carrinho</h1>

    <CartItem :data="item" v-for="(item, index) in cartItems" :key="index" />

    <form @submit.prevent="postForm" class="checkout">
      <h1>Total: R$ {{totalPrice}}</h1>

      <div class="field">
        <label for="address">Endereço</label>
        <input
          type="text"
          name="address"
          id="address"
          disabled
          placeholder="Não precisa digitar. Nós já sabemos. 🕵️‍♀️"
        />
      </div>

      <div class="field">
        <label for="card-number">Número do Cartão de Crédito</label>
        <input
          type="text"
          name="card-number"
          id="card-number"
          placeholder="Esse é só pra gente ter certeza"
        />
      </div>

      <button type="submit">Finalizar Compra</button>
    </form>
  </div>
</template>

<style scoped>
#page-cart {
  width: 60%;
  margin: 80px auto;
}

h1 {
  font-size: 24pt;
  font-weight: bold;
  margin-bottom: 0.5em;
}

input,
label {
  display: block;
}

form {
  width: 100%;
  background-color: #fafafa;
  padding: 20px;
}

.field {
  margin-bottom: 20px;
}

input {
  margin-top: 4px;
  min-width: 300px;
}
</style>

<script>
import CartItem from "@/components/CartItem";
import store from "@/store";

export default {
  components: { CartItem },
  computed: {
    totalPrice: () => store.getters.totalCartPrice,
    cartItems: () => store.state.cartItems,
  },
  methods: {
    postForm() {
      store
        .dispatch("checkout")
        .then(() => alert("tá comprado. Vou ver ali e te aviso."));
    },
  },
};
</script>