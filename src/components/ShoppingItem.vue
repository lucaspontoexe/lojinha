<template>
  <div class="shopping-item">
    <img :src="`products/${data.image}`" alt="Foto do Produto" />
    <h1>{{data.name}}</h1>
    <p>{{data.description}}</p>
    <strong class="price">R$ {{data.price}}</strong>

    <!-- toggle button -->
    <button v-if="!isItemInCart()" class="add-to-cart" @click="addItemToCart">Adicionar ao carrinho</button>
    <button v-else class="remove-from-cart" @click="removeItemFromCart">Remover do carrinho</button>
  </div>
</template>

<style lang="scss" scoped>
.shopping-item {
  position: relative;
  width: 200px;
  background: #f4f4f4;
  border-radius: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 156px;
    object-fit: cover;
    border-radius: 4px 4px 0px 0px;
  }

  h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    margin: 0.5em 14px;
    flex: 1;
  }

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    margin: 0.5em 14px;

    color: #686868;
    flex: 1;
  }

  strong {
    display: block;
    font-weight: bold;
    font-size: 24px;
    line-height: 20px;
    margin-left: 14px;
    flex: 2;
  }
}

button {
  width: 96%;
  height: 40px;
  margin: 8px auto 4px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;

  color: white;
  transition: background-color 500ms;

  &.add-to-cart {
    background-color: #2d9c45;
    &:hover {
      background-color: lighten($color: #4ec969, $amount: 2);
    }
  }

  &.remove-from-cart {
    background-color: #464646;
    &:hover {
      background-color: lighten($color: #727272, $amount: 2);
    }
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from "@/store";
import Product from "@/types/Product";

@Component
export default class ShoppingItem extends Vue {
  @Prop() private data!: Product;

  addItemToCart = () => store.commit("addToCart", this.data);
  removeItemFromCart = () => store.commit("removeItemFromCart", this.data);
  isItemInCart = () =>
    store.state.cartItems.find((item) => item.id === this.data.id) && true;
}
</script>