<template>
  <div id="homepage">
    <h1>Só item barato</h1>
    <section class="shopping-items">
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
    </section>
  </div>
</template>

<script>
import ShoppingItem from "@/components/ShoppingItem";

export default {
  components: { ShoppingItem },
};
</script>

<style scoped>
#homepage {
  width: 70%;
  margin: 80px auto;
}

.shopping-items {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}
</style>