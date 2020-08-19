<template>
  <nav>
    <div class="nav-item">
      <a href="#" class="empty">....</a>
    </div>
    <div class="nav-item">
      <router-link to="/" class="lojinha-logo">lojinha</router-link>
    </div>
    <div class="nav-item">
      <router-link to="/cart">Carrinho (0)</router-link>
    </div>
  </nav>
</template>

<style scoped>
nav {
  position: sticky;
  top: 0px;
  height: 60px;
  background: black;

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
}
</style>