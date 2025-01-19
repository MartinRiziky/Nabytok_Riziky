<template>
  <div class="galeria container">
    <h1>Naše realizácie</h1>

    <!-- Filtrovanie kategórií -->
    <div class="filters">
      <button 
        v-for="category in categories" 
        :key="category" 
        @click="filterCategory(category)"
        :class="{ active: selectedCategory === category }"
      >
        {{ category }}
      </button>
    </div>

    <!-- Zobrazenie projektov -->
    <div class="gallery">
      <div 
        class="card" 
        v-for="(project, index) in filteredProjects" 
        :key="index"
        @click="openModal(index)"
      >
        <img :src="project.image" :alt="project.description" />
        <p>{{ project.description }}</p>

        <!-- Hodnotenie hviezdičkami -->
        <div class="rating">
          <span 
            v-for="star in 5" 
            :key="star" 
            @click.stop="rateProject(project.id, star)"
            :class="{ filled: project.rating >= star }"
          >
            ★
          </span>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div :class="['modal', { active: isModalOpen }]" @click="closeModal">
      <div class="modal-content" @click.stop>
        <img :src="selectedImage" alt="Selected project" />
        <p>{{ selectedDescription }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaleriaView',
  data() {
    return {
      projects: [
        { id: 1, image: 'src/assets/img/kitchen1.png', description: 'Moderná kuchyňa', category: 'Kuchyne', rating: 0 },
        { id: 2, image: 'src/assets/img/livingroom1.png', description: 'Elegantná obývačka', category: 'Obývačky', rating: 0 },
        { id: 3, image: 'src/assets/img/bedroom1.png', description: 'Štýlová spálňa', category: 'Spálne', rating: 0 },
      ],
      categories: ['Všetky', 'Kuchyne', 'Obývačky', 'Spálne'],
      selectedCategory: 'Všetky', // Počiatočná kategória
      isModalOpen: false,
      selectedImage: '',
      selectedDescription: '',
    };
  },
  computed: {
    filteredProjects() {
      if (this.selectedCategory === 'Všetky') {
        return this.projects;
      }
      return this.projects.filter(project => project.category === this.selectedCategory);
    },
  },
  methods: {
    // Zmena kategórie pri kliknutí na tlačidlo
    filterCategory(category) {
      this.selectedCategory = category;
    },

    // Otvorenie modalu pre väčší obrázok
    openModal(index) {
      const project = this.filteredProjects[index];
      this.selectedImage = project.image;
      this.selectedDescription = project.description;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.selectedImage = '';
      this.selectedDescription = '';
    },

    // Hodnotenie projektu
    rateProject(projectId, rating) {
      fetch('http://localhost:3000/ratings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projectId, rating }),
      })
        .then(response => {
          if (response.ok) {
            // Po uložených hodnoteniach aktualizuj projekt na klientovi
            this.projects = this.projects.map((project) =>
              project.id === projectId ? { ...project, rating } : project
            );
          }
        })
        .catch(error => {
          console.error('Chyba pri ukladaní hodnotenia:', error);
        });
    },
  },
  mounted() {
  // Načítame hodnotenia zo servera pri načítaní stránky
  fetch('http://localhost:3000/ratings')
    .then(response => response.json())
    .then(data => {
      console.log('Načítané hodnotenia:', data);
      
      // Načítame hodnotenia z databázy a priradíme ich ku projektom
      this.projects = this.projects.map(project => {
        // Nájdeme hodnotenie pre daný projekt
        const savedRating = data.find(item => item.projectId === project.id.toString());
        
        // Ak hodnotenie existuje, priradíme ho k projektu
        return savedRating ? { ...project, rating: savedRating.rating } : project;
      });
    })
    .catch(error => {
      console.error('Chyba pri načítaní hodnotení:', error);
    });
}
,

};
</script>

<style scoped>
/* Kontejner */
.container {
  padding: 20px;
}

/* Filtrovanie */
.filters {
  margin-bottom: 20px;
}

.filters button {
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.filters button.active {
  background-color: #0056b3;
  color: white;
}

.filters button:hover {
  background-color: #004494;
  color: white;
}

/* Galéria */
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
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card:hover img {
  transform: scale(1.05);
}

.card p {
  margin: 10px 0;
  font-size: 1rem;
}

/* Hodnotenie */
.rating {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1000;
}

.rating span {
  font-size: 1.5rem;
  cursor: pointer;
  color: #ddd;
  transition: color 0.3s ease;
}

.rating span.filled {
  color: #f39c12;
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* Vyšší z-index */
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal.active {
  opacity: 1;
  pointer-events: auto;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 600px;
  width: 90%;
  transform: scale(0.8);
  transition: transform 0.3s ease;
  z-index: 3000; /* Obsah modálu má najvyššiu prioritu */
}

.modal.active .modal-content {
  transform: scale(1);
}

.modal img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.modal p {
  margin-top: 10px;
  font-size: 1.2rem;
  color: #555;
}
</style>
