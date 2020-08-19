<template>
  <div id="homepage">
    <h1>Lista</h1>

    <ShoppingItem/>
    
    <ul>
      <li><b>nome: </b>descrição (opcional), <b>preço</b></li>
      <li><b>nome: </b>descrição (opcional), <b>preço</b></li>
      <li>aaab</li>
    </ul>
  </div>
</template>

<script>
import ShoppingItem from '@/components/ShoppingItem'

export default {
  components: {ShoppingItem}
}
</script>