<template>
  <v-container fluid>
    <div class="py-2 px-10 ml-6">
      <h1>Popular</h1>
      <h2>Movies</h2>
    </div>
    <popular-movies />
    <div class="py-2 px-10 ml-6 mt-5">
      <h1>Upcoming</h1>
      <h2>Movies</h2>
    </div>
    <upcoming-movies />
    <div class="py-2 px-10 ml-6 mt-5">
      <h1>Top Rated</h1>
      <h2>Movies</h2>
    </div>
    <top-rated />
  </v-container>
</template>

<script>
import PopularMovies from "./PopularMovies.vue";
import UpcomingMovies from "./UpcomingMovies.vue";
import TopRated from "./TopRated.vue";

export default {
  components: { UpcomingMovies, PopularMovies, TopRated },

  data() {
    return {
      movies: [],
      type: null,
      id: null,
    };
  },

  // mounted() {
  //   console.log("created", this.type);
  //   console.log(this.$route.params);
  // },

  watch: {
    // watching params
    "$route.params.type": {
      handler: function (type) {
        this.type = type;
      },
      deep: true,
      immediate: true,
    },
    // watching query params
    "$route.query": {
      handler: function (query) {
        const { id, ctg } = query;
        let url = `movie/${id}`;
        if (ctg?.toLowerCase() === "genres") {
          url = `discover/movie?with_genres=${id}`;
        }
        // console.log(url);
        this.getMovies(url);
      },
      deep: true,
      immediate: true,
    },
  },

  methods: {
    // fetching movies
    async getMovies() {
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results;
    },
  },
};
</script>
