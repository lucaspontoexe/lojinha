<template>
  <div class="cart-item">
    <img :src="`products/${data.image}`" alt="Foto do Corsa não-capotado" />

    <section class="details">
      <h1>{{data.name}}</h1>
      <p>{{data.description}}</p>
    </section>

    <div class="price">R$ {{data.price}}</div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  position: relative;
  width: 100%;
  height: 180px;
  background: #f4f4f4;
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  padding: 12px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;

  margin-bottom: 30px;
}

img {
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}

.details {
  flex: 1;
  padding-left: 20px;

  h1 {
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    color: #a3a3a3;
  }
}

.price {
  font-size: 32px;
  line-height: 40px;
  text-align: right;
  margin-right: 10px;
  line-height: 60px;
}

@media screen and (max-width: 920px) {
  .cart-item {
    flex-direction: column;
    height: auto;
  }
  img {
    height: auto;
  }
  h1 {
    margin-top: 8px;
  }

  .details {
    padding-left: 0px;
  }
  .price {
    font-size: 28px;
    margin-right: 0px;
  }
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Product from "@/types/Product";

@Component
export default class CartItem extends Vue {
  @Prop() private data!: Product;
}
</script>