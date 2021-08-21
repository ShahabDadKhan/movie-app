<template>
  <v-container fluid class="mt-15">
    <!-- <v-container fluid>
          <v-row
            ><v-col sm="2" v-for="movie in movies" :key="movie.id">
              <moviecard :movie="movie" /> </v-col
          ></v-row>
        </v-container> -->
    <!-- <movie-card /> -->
    <!-- <popular-movies /> -->
    <!-- <router-link /> -->
    <div class="py-2 px-10 ml-6 mt-5">
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

  mounted() {
    console.log("created", this.type);
    console.log(this.$route.params);
  },

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
        console.log(url);
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
      console.log("these are fetched movies", this.movies);
      // console.log("title", this.movies.results[0].poster_path);
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
// h1 {
//   font-size: 25px;
//   font-weight: 300;
//   line-height: 1;
//   color: map-get($colors, primary);
//   letter-spacing: -0.5px;
//   text-transform: uppercase;
//   margin-bottom: 3px;
// }
// h2 {
//   text-transform: uppercase;
//   line-height: 1;
//   color: map-get($colors, main);
//   font-size: 15px;
//   font-weight: 600;
//   // margin: 40px 0px 16px 11px;
// }

// ::v-deep .v-input__icon {
//   margin-right: 10px;
//   margin-left: -12px;
// }
// ::v-deep .v-icon {
//   color: white;
// }
// ::v-deep .v-input__textarea {
//   color: red !important;
// }

// .text-field {
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   width: 400px;
//   // height: 1.1%;
//   height: 40px;
//   transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// }
// .text-field:hover {
//   width: 20%;
// }
// .text-field:active {
//   width: 50%;
// }

// .moviecard {
//   transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
// }

// .moviecard:hover {
//   transform: scale(1.03);
//   background-color: #37474f;
//   border-radius: 2%;
//   box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2);
// }

// .imgcard {
//   box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2) !important;
//   background-color: blue;
// }

// .imgcard:hover {
//   border-bottom-left-radius: 0%;
//   border-bottom-right-radius: 0%;
//   box-shadow: none !important;
// }
</style>
