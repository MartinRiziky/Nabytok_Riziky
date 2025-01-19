<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue'; // Importujeme NavBar komponent
import Footer from './components/Footer.vue'; // Importujeme Footer komponent

// Pridanie triedy nav-open pri otváraní hamburger menu
onMounted(() => {
  const toggleButton = document.querySelector('.navbar-toggler'); // Tlačidlo pre hamburger menu
  const body = document.querySelector('body'); // Hlavný obalový prvok stránky

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('nav-open'); // Prepína triedu nav-open
  });
});
</script>

<template>
  <div id="app">
    <NavBar /> <!-- Navigačný panel -->
    <div class="main-content">
      <router-view></router-view> <!-- Dynamický obsah stránky -->
    </div>
    <Footer /> <!-- Footer na spodok stránky -->
  </div>
</template>

<style>
.main-content {
  padding-top: 3px; /* Prispôsobí sa výške navigácie */
}

/* Štýly pre rámik pri otvorenom menu */
.nav-open .content {
  top: 400px; /* Posun obsahu nižšie, keď je menu otvorené */
}
</style>
