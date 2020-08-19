<template>
  <div class="cart-item">
    <img src="@/assets/corsa.png" alt="Foto do Corsa não-capotado" />

    <section class="details">
      <h1>Corsa Horizon</h1>
      <p>Dá pra fazer altos drifts com ele</p>
    </section>

    <div class="price">R$ 8000</div>
  </div>
</template>

<style lang="scss" scoped>
.cart-item {
  position: relative;
  width: 100%;
  height: 280px;
  background: #f4f4f4;
  border-radius: 4px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  padding: 12px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
}

img {
  // height: calc(100% - 12px);
  height: 256px;
  border-radius: 4px;
}

.details {
  flex: 1;
  padding-left: 10px;

  h1 {
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
  }

  p {
    font-size: 18px;
    line-height: 21px;
    color: #a3a3a3;
  }
}

.price {
  font-size: 32px;
  line-height: 37px;
  text-align: right;
}
</style>
