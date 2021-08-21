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
  <!-- <movie-card /> -->
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

  // watch: {
  //   // watching params
  //   "$route.params.type": {
  //     handler: function (type) {
  //       this.type = type;
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  //   // watching query params
  //   "$route.query": {
  //     handler: function (query) {
  //       const { id, ctg } = query;
  //       let url = `movie/${id}`;
  //       if (ctg?.toLowerCase() === "genres") {
  //         url = `discover/movie?with_genres=${id}`;
  //       }
  //       console.log(url);
  //       this.getMovies(url);
  //     },
  //     deep: true,
  //     immediate: true,
  //   },
  // },

  methods: {
    // fetching movies
    async getMovies() {
      const response = await this.$http.get("/movie/popular");
      this.popularMovies = response.data.results.slice(0, 12);
      // console.log("these are fetched movies", this.popularMovies);
      // console.log("title", this.popularMovies.results[0].poster_path);
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
