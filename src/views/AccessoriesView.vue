<template>
    <div class="accessories container">
      <h1>Rôzne výrobky a doplnky</h1>
      <div class="gallery">
        <div 
          class="card" 
          v-for="(accessory, index) in accessories" 
          :key="index"
        >
          <img :src="accessory.image" :alt="accessory.description" />
          <p>{{ accessory.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccessoriesView',
    data() {
      return {
        accessories: [
          { image: 'src/assets/img/accessory1.png', description: 'Doplnok 1' },
          { image: 'src/assets/img/accessory2.png', description: 'Doplnok 2' },
          { image: 'src/assets/img/accessory3.png', description: 'Doplnok 3' },
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
  