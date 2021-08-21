<template>
  <!-- <v-container fluid> -->
  <div class="pa-10">
    <!-- <h2>upcoming Movies</h2> -->
    <!-- <v-carousel height="700">
      <v-carousel-item
        v-for="(movie, i) in this.upcomingMovies"
        :key="i"
        :src="`https://image.tmdb.org/t/p/w500/` + movie.poster_path"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >
        <moviecard
      /></v-carousel-item>
    </v-carousel> -->
    <carousel-3d
      :controls-visible="true"
      :clickable="false"
      :key="upcomingMovies.length"
      :listData="upcomingMovies"
      :height="500"
      color="black"
    >
      <Slide :index="i" :key="i" v-for="(movie, i) in this.upcomingMovies">
        <figure>
          <img :src="`https://image.tmdb.org/t/p/w500/` + movie.poster_path" />
          <figcaption>
            <v-btn :to="`/movie/${movie.id}`" text color="white">
              {{ movie.title }}
            </v-btn>
          </figcaption>
        </figure>
      </Slide>
    </carousel-3d>
    <!-- <carousel-3d :controles></carousel-3d> -->
  </div>
  <!-- </v-container> -->
</template>

<script>
// import Moviecard from "../components/Moviecard.vue";
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
    // Moviecard,
  },
  data() {
    return {
      upcomingMovies: [],
      type: null,
      id: null,
    };
  },

  mounted() {
    this.getMoives();
    console.log("upcoming", this.upcomingMovies);
  },

  methods: {
    //   fetching UpcomingMovies
    async getMoives() {
      const response = await this.$http.get("/movie/upcoming");
      this.upcomingMovies = response.data.results.slice(0, 10);
    },
  },
};
</script>

<style>
/* .example {
  padding: 50px;
  width: 500px;
} */
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  /* // color: blue; */

  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next,
.prev {
  color: black;
}
</style>
>
