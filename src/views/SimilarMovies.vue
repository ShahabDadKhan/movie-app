<template>
  <v-container fluid class="mx-10 pa-16">
    <div class="pa-2 mb-10">
      <h1>Similar</h1>
      <h2>Movies</h2>
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        class="pa-2"
        v-for="movie in similarMovies"
        :key="movie.id"
      >
        <moviecard :movie="movie" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Moviecard from "../components/Moviecard.vue";
export default {
  components: { Moviecard },

  data() {
    return {
      similarMovies: [],
      type: null,
      id: null,
    };
  },
  mounted() {
    this.fetchSimilar(this.$route.params.id);
  },
  watch: {
    $route(to, from) {
      if (to !== from) {
        this.fetchSimilar(to.params.id);
      }
    },
  },
  methods: {
    async fetchSimilar(movieId) {
      const response = await this.$http.get("/movie/" + movieId + "/similar");
      this.similarMovies = response.data.results.slice(0, 12);
    },
  },
};
</script>
