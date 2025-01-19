<template>
    <div class="container my-5">
      <h1 class="text-center">Výsledky vyhľadávania</h1>
      <p v-if="!results.length">Nenašli sa žiadne výsledky pre: <strong>{{ query }}</strong></p>
      <ul v-else>
        <li v-for="(result, index) in results" :key="index">
          <router-link :to="result.link">{{ result.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchView',
    data() {
      return {
        results: [], // Uchováva výsledky vyhľadávania
      };
    },
    computed: {
      query() {
        return this.$route.query.q || ''; // Získanie vyhľadávacieho textu z query parametrov
      },
    },
    watch: {
      query: 'performSearch', // Spustí vyhľadávanie pri zmene query
    },
    mounted() {
      this.performSearch(); // Spustí vyhľadávanie pri načítaní stránky
    },
    methods: {
      performSearch() {
        const allItems = [
          { name: 'Moderná kuchyňa', link: '/kitchens' },
          { name: 'Elegantná obývačka', link: '/living-rooms' },
          { name: 'Štýlová spálňa', link: '/bedrooms' },
          { name: 'Luxusná kúpeľňa', link: '/kupelne' },
          { name: 'Dekorácie', link: '/rozne-vyrobky/dekoracie' },
        ];
  
        // Filtrujeme položky na základe query
        this.results = allItems.filter((item) =>
          item.name.toLowerCase().includes(this.query.toLowerCase())
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  </style>
  