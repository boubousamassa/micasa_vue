import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/home.vue';
import RestaurantPage from './components/restaurant.vue';
import AboutPage from './components/about.vue';
import AppartementPage from './components/appartement.vue';
import OffersPage from './components/offres.vue';
import ContactPage from './components/contact.vue';
import RoomDetail from './components/room_detail.vue';


import './assets/css/plugins.css';
import './assets/css/style.css';



// Définir les routes
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/restaurant', component: RestaurantPage },
  { path: '/appartement', component: AppartementPage },
  { path: '/offers', component: OffersPage },
  { path: '/contact', component: ContactPage },
  { path: '/room_detail', component: RoomDetail },
];

// Créer le routeur
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Monter l'application avec le routeur
createApp(App).use(router).mount('#app');
