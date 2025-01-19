<template>
    <div class="bathrooms container">
      <h1>Naše kúpeľne</h1>
      <div class="gallery">
        <div 
          class="card" 
          v-for="(bathroom, index) in bathrooms" 
          :key="index"
        >
          <img :src="bathroom.image" :alt="bathroom.description" />
          <p>{{ bathroom.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BathroomsView',
    data() {
      return {
        bathrooms: [
          { image: 'src/assets/img/bathroom1.png', description: 'Luxusná kúpeľňa 1' },
          { image: 'src/assets/img/bathroom2.png', description: 'Luxusná kúpeľňa 2' },
          { image: 'src/assets/img/bathroom3.png', description: 'Luxusná kúpeľňa 3' },
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
  