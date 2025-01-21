<template>
  <div class="container">
    <h1>Kuchyne</h1>
    <p>Objavte moderné a na mieru navrhnuté kuchyne, ktoré sa prispôsobia vašim potrebám.</p>

    <!-- Obrázok kuchyne s popisom -->
    <div class="image-container">
      <img src="@/assets/img/kitchen2.jpg" alt="Modern Kitchen" />
      <p class="image-description">Elegantná kuchyňa s dreveným dekorom a moderným dizajnom.</p>
    </div>

    <!-- CTA tlačidlo -->
    <div class="cta-container">
      <router-link to="/kontakt" class="cta-button">Požiadať o návrh</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KitchensView',
};
</script>

<style scoped>
/* Kontejner */
.container {
  text-align: center; /* Zarovná obsah na stred */
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

/* Nadpis */
h1 {
  font-size: 2.5em;
  color: #ffc107; /* Zlatá farba */
  margin-bottom: 10px;
}

/* Text */
p {
  font-size: 1.2em;
  color: #666;
  margin-bottom: 20px;
}

/* Obrázok s popisom */
.image-container {
  margin: 20px auto;
  max-width: 800px; /* Obmedzí maximálnu šírku obrázka */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Jemný tieň */
}

.image-container img {
  width: 100%; /* Obrázok prispôsobí šírke rodiča */
  height: auto; /* Zachová proporcie */
  display: block;
}

.image-description {
  margin-top: 10px;
  font-size: 1rem;
  color: #555;
  font-style: italic;
}

/* CTA tlačidlo */
.cta-container {
  margin-top: 30px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #0056b3; /* Modrá farba tlačidla */
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Jemný tieň */
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #004494; /* Tmavšia modrá pri hover */
  transform: translateY(-2px); /* Jemný pohyb nahor */
}
</style>
