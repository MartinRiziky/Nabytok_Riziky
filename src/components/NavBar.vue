<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Nábytok Riziky</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto">
          <li class="nav-item" v-for="(item, index) in navItems" :key="index">
            <router-link :to="item.link" class="nav-link">
              {{ item.label }}
            </router-link>
          </li>
        </ul>
        <form class="d-flex" @submit.prevent="handleSearch">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Hľadať"
            v-model="searchQuery"
          />
          <button class="btn btn-outline-success" type="submit">Hľadať</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      searchQuery: '',
      navItems: [
        { label: 'O nás', link: '/onas' }, // Odkaz na novú podstránku O nás
        { label: 'Vstavané skrine', link: '/vstavane-skrine' },
        { label: 'Kuchyne', link: '/kitchens' },
        { label: 'Obývačky', link: '/living-rooms' },
        { label: 'Spálne', link: '/bedrooms' },
        { label: 'Kúpeľne', link: '/kupelne' },
        { label: 'Rôzne výrobky', link: '/rozne-vyrobky' },
        { label: 'Galéria', link: '/galeria' },
        { label: 'Kontakt', link: '/kontakt' },
        { label: 'Realizácia', link: '/realizacia' },
      ],
    };
  },
  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({ name: 'search', query: { q: this.searchQuery } });
      }
    },
  },
};
</script>
<style scoped>


/* Vlastné Bootstrap štýly pre animácie a vzhľad */
.custom-navbar {
  background: linear-gradient(90deg, #0b0e10, #0d1117, #121417, #1a1a1a);
  

  padding: 15px 20px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 15px 20px rgba(0, 0, 0, 0.9);
}

.custom-navbar::after {
  content: '';
  display: block;
  height: 2px;
  background-color: #ffc107;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}

.navbar-nav {
  display: flex;
  justify-content: space-between; /* Rozdelí položky rovnomerne */
  align-items: center;
  flex-wrap: nowrap; /* Zabráni zalamovaniu položiek do nového riadku */
}

.navbar-nav .nav-item {
  margin: 0 15px; /* Pridá medzery medzi položky */
}

.navbar-brand {
  color: #ffc107 !important;
  font-weight: bold;
  font-size: 1.5rem;
  transition: color 0.3s ease;
  margin-left: 20px; /* Odstráni medzeru medzi ľavým okrajom a logom */
  padding-left: 20px;
}

.navbar-brand:hover {
  color: #f39c12 !important;
}

.nav-link {
  color: #ffffff !important;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ffc107 !important;
  text-decoration: none;
}

.nav-link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #ffc107;
  transition: width 0.3s ease-in-out;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.nav-link:hover::after {
  width: 100%;
}

.form-control {
  border-color: #ffc107;
}

.form-control:focus {
  border-color: #f39c12;
  box-shadow: 0 0 0 0.2rem rgba(243, 156, 18, 0.25);
}

.btn-outline-success {
  color: #ffc107;
  border-color: #ffc107;
}

.btn-outline-success:hover {
  background-color: #ffc107;
  color: #212529;
  border-color: #f39c12;
}


</style>

