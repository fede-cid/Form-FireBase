<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/">Mi Sitio</router-link>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Inicio</router-link>
          <router-link to="/about" class="navbar-item">Acerca de</router-link>
          <router-link to="/results" class="navbar-item">Resultados</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
}

.navbar {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
}

.navbar-brand {
  font-size: 2rem;
  font-weight: bold;
}

.navbar-start {
  display: flex;
  align-items: center;
}

.navbar-item {
  padding: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}

.navbar-item:hover {
  transform: scale(1.1);
}

.router-link-active .navbar-item {
  color: #151435;
}
</style>