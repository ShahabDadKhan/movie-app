<template>
  <v-container fluid class="mx-10 pa-16">
    <div class="pa-2 ml-2">
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
  //   props: {
  //     smovie: {
  //       required: true,
  //     },
  //   },
  data() {
    return {
      actorMovies: [],
    };
  },
  mounted() {
    // this.fetchSimilar(this.$route.params.id);
    this.fetchMovies(this.$route.params.id);

    // console.log("similar movies", this.similarMovies);
  },
  watch: {
    "route.param.id": {
      handler() {
        // this.fetchSimilar(this.$route.params.id);
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
      console.log("actorMovies", this.actorMovies);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 25px;
  font-weight: 300;
  line-height: 1;
  color: map-get($colors, primary);
  letter-spacing: -0.5px;
  text-transform: uppercase;
  margin-bottom: 3px;
}
h2 {
  text-transform: uppercase;
  line-height: 1;
  color: map-get($colors, main);
  font-size: 15px;
  font-weight: 600;
  // margin: 40px 0px 16px 11px;
}
</style>
