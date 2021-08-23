<template>
  <v-container fluid class="mx-10 pa-16">
    <div class="pa-2 mb-10">
      <h1>Featuring</h1>
      <h2>Movies</h2>
    </div>
    <v-row>
      <v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        class="pa-2"
        v-for="movie in actorMovies"
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
      actorMovies: [],
    };
  },
  mounted() {
    this.fetchMovies(this.$route.params.id);
  },
  watch: {
    "route.param.id": {
      handler() {
        this.fetchMovies(this.$route.params.id);
      },
    },
  },
  methods: {
    async fetchMovies(actorId) {
      const response = await this.$http.get(
        "/person/" + actorId + "/combined_credits"
      );
      this.actorMovies = response.data.cast
        .filter((x) => x.media_type == "movie")
        .slice(0, 12);
    },
  },
};
</script>
