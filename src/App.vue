<template>
  <v-app>
    <!-- <navigation /> -->
    <v-main>
      <app-bar />
      <!-- <home /> -->

      <router-view />
      <!-- <upcoming-movies /> -->
      <the-footer />
    </v-main>
  </v-app>
</template>

<script>
// import Navigation from "../src/components/Navigation.vue";
import AppBar from "../src/components/AppBar.vue";
import TheFooter from "../src/components/TheFooter.vue";

// import Home from "./views/Home.vue";
// import UpcomingMovies from "./views/UpcomingMovies.vue";

export default {
  components: {
    //  Navigation
    TheFooter,
    AppBar,
    // Home,
  },
  data: () => ({
    drawer: true,
    group: null,
  }),
};
</script>
