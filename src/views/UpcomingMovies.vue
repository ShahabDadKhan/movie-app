<template>
  <div class="pa-10">
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
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: {
    Carousel3d,
    Slide,
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

<style lang="scss">
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
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
