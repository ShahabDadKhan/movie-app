<template>
  <v-container fluid class="pa-15">
    <v-row
      ><v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        class="pa-2"
        v-for="movie in popularMovies"
        :key="movie.id"
      >
        <moviecard :movie="movie" /> </v-col
    ></v-row>
  </v-container>
</template>

<script>
import Moviecard from "../components/Moviecard.vue";
export default {
  components: { Moviecard },

  data() {
    return {
      popularMovies: [],
      type: null,
      id: null,
    };
  },

  mounted() {
    this.getMovies();
  },
  methods: {
    // fetching movies
    async getMovies() {
      const response = await this.$http.get("/movie/popular");
      this.popularMovies = response.data.results.slice(0, 12);
    },
  },
};
</script>
