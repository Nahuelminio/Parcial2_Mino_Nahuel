import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import MovieDetails from "../components/MovieDetails.vue";
import Favorites from "../components/Favorites.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/movie/:id", component: MovieDetails },
  { path: "/favorites", component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
