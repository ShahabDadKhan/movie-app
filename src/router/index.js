import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import SimilarMovies from "../views/SimilarMovies.vue";
import MovieDetail from "../views/MovieDetail.vue";
import ActorDetail from "../views/ActorDetail.vue";
import ActorMovie from "../views/ActorMovie.vue";

// import UpcomingMovies from "../views/UpcomingMovies.vue";

// import MoviesPreview from "../components/MoviesPreview.vue";
// import Navigation from "../components/Navigation.vue";
// https://api.themoviedb.org/3/movie/550?api_key=25da25ddab0e86803373bf86d08768e2

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: MovieDetail,
  },
  // {
  //   path: "/movie/:id",
  //   name: "SimilarMovies",
  //   component: SimilarMovies,
  // },
  {
    path: "/person/:id",
    name: "ActorDetail",
    component: ActorDetail,
  },
  {
    path: "/movie/:id",
    name: "ActorMovie",
    component: ActorMovie,
  },
  // {
  //   path: "/",
  //   name: "Navigation",
  //   component: Navigation,
  // },
  // {
  //   path: "/Popular",
  //   name: "Popular",
  //   component: PopularMovies,
  // },
  // {
  //   path: "/",
  //   name: "UpcomingMovies",
  //   component: UpcomingMovies,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
