<template>
    <div class="built-in-wardrobes container">
      <h1>Naše vstavané skrine</h1>
      <div class="gallery">
        <div 
          class="card" 
          v-for="(wardrobe, index) in wardrobes" 
          :key="index"
        >
          <img :src="wardrobe.image" :alt="wardrobe.description" />
          <p>{{ wardrobe.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BuiltInWardrobesView',
    data() {
      return {
        wardrobes: [
          { image: 'src/assets/img/wardrobe1.png', description: 'Elegantná skriňa 1' },
          { image: 'src/assets/img/wardrobe2.png', description: 'Elegantná skriňa 2' },
          { image: 'src/assets/img/wardrobe3.png', description: 'Elegantná skriňa 3' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .card {
    width: 300px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .card img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .card p {
    margin: 10px 0;
    font-size: 1rem;
  }
  </style>
  