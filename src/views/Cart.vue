<template>
<div id="page-cart">
    <h1>Carrinho</h1>

    no items (yet)
    <CartItem/>
    
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

</style>

<script>
import CartItem from '@/components/CartItem'

export default {
    components: {CartItem}
}
</script>