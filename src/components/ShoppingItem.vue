<template>
  <div class="shopping-item">
    <img :src="`products/${data.image}`" alt="Foto do Produto" />
    <h1>{{data.name}}</h1>
    <p>{{data.description}}</p>
    <strong class="price">R$ {{data.price}}</strong>
    <button class="add-to-cart" @click="addItemToCart">+</button>
  </div>
</template>

<style lang="scss" scoped>
.shopping-item {
  position: relative;
  width: 200px;
  height: 280px;
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
  position: absolute;
  top: 6px;
  right: 6px;
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: 0;
  background: #94ffab;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from '@/store'
import Product from '@/types/Product'

@Component
export default class ShoppingItem extends Vue {
  @Prop() private data!: Product;

  addItemToCart() {
    store.commit('addToCart', this.data);
  }
}
</script>