<template>
  <div id="homepage">
    <h1>Só item barato</h1>
    <section class="shopping-items">
      <ShoppingItem
        v-for="product of productList"
        :data="product"
        :key="product.id"
      />
    </section>
  </div>
</template>

<script>
import ShoppingItem from "@/components/ShoppingItem";
import store from '@/store';

export default {
  components: { ShoppingItem },
  data: function () {
    return { productList: store.state.products };
  },
};
</script>

<style scoped>
#homepage {
  width: 70%;
  margin: 80px auto;
}

h1 {
  font-size: 24pt;
  font-weight: bold;
  margin-bottom: 0.5em;
}

.shopping-items {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

@media screen and (max-width: 942px) {
  .shopping-items {
    justify-content: center;
  }
  h1 {
    text-align: center;
  }
}
</style>