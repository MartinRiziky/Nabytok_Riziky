<template>
    <div class="about">
      <div id="aboutCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#aboutCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/img/banner1.jpg" class="d-block w-100" alt="Slide 1">
            <div class="carousel-caption">
              <h5>Unikátny nábytok na mieru</h5>
              <p>Vytvárame nábytok, ktorý splní vaše sny.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/banner2.jpg" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption">
              <h5>Profesionálna výroba</h5>
              <p>Precíznosť a kvalita sú našou prioritou.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="@/assets/img/banner3.jpg" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption">
              <h5>Vaša spokojnosť je naším cieľom</h5>
              <p>Zabezpečíme dizajn, výrobu aj montáž.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#aboutCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Predošlý</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#aboutCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Ďalší</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutView',
  };
  </script>
  
  <style scoped>
  
  .carousel-inner img {
  width: 100%; /* Obrázok na celú šírku */
  height: 91.8vh; /* Obrázok na celú výšku obrazovky */
  object-fit: cover; /* Zachová proporcie a oreže obrázok */
}

.carousel {
  position: relative;
  z-index: 0; /* Zaistí, že bude pod navigáciou */
}

.carousel-caption h5 {
  color: #ffc107;
  font-size: 2rem;
  text-shadow: 3px 7px 5px rgba(0, 0, 0, 0.8);
}

.carousel-caption p {
  color: #ffffff;
  font-size: 1.2rem;
  text-shadow: 3px 5px 5px rgba(0, 0, 0, 0.8);
}
.carousel-caption {
  bottom: 50%; /* Posunie text vyššie */
  transform: translateY(0); /* Zruší prípadné ďalšie posuny */
}

  </style>
  