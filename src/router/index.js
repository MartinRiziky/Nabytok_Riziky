import { createRouter, createWebHistory } from 'vue-router'
import KitchensView from '../views/KitchensView.vue'
import LivingRoomsView from '../views/LivingRoomsView.vue'
import BedroomsView from '../views/BedroomsView.vue'
import HomeView from '../views/HomeView.vue'
import GalleryView from '../views/GalleryView.vue'
import ContactView from '../views/ContactView.vue'
import BuiltInWardrobesView from '../views/BuiltInWardrobesView.vue';
import BathroomsView from '../views/BathroomsView.vue';
import AccessoriesView from '../views/AccessoriesView.vue';
import SearchView from '../views/SearchView.vue';
import RealizationView from '../views/RealizationView.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView }, // Hlavná stránka (Home)
  { path: '/kitchens', name: 'kitchens', component: KitchensView },
  { path: '/kupelne', name: 'bathrooms', component: BathroomsView },
  { path: '/living-rooms', name: 'living-rooms', component: LivingRoomsView },
  { path: '/bedrooms', name: 'bedrooms', component: BedroomsView },
  { path: '/galeria', name: 'gallery', component: GalleryView },
  { path: '/kontakt', name: 'contact', component: ContactView },
  { path: '/vstavane-skrine', name: 'wardrobes', component: BuiltInWardrobesView },
  { path: '/rozne-vyrobky', name: 'accessories', component: AccessoriesView },
  { path: '/search', name: 'search', component: SearchView },
  { path: '/realizacia', name: 'realization', component: RealizationView },
  { path: '/onas', name: 'about', component: AboutView },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Použijeme import.meta.env pre správny base URL
  routes
})

export default router
