<template>
  <v-card flat class="moviecard ma-2">
    <router-link
      :to="`/movie/${movie.id}`"
      style="text-decoration: none; color: inherit"
    >
      <v-img class="imgcard" :src="posterPath" height="400px"> </v-img>
    </router-link>
    <h2 class="mt-5">{{ movie.title }}</h2>
    <v-card-text class="text-center pa-0">
      <v-rating
        :value="movie.vote_average / 2"
        dense
        background-color="colrating lighten-1"
        color="colrating"
        class="mb-4 rating"
        style="color: inherit"
        readonly
        size="15"
      ></v-rating>
      <div class="grey--text">
        {{ movie.vote_average * 10 }}% | {{ movie.release_date }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
  },

  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },

  watch: {
    "route.param.id": {
      handler() {
        this.movie(this.$route.params.id);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.5px;
  margin: 10px 11px;
}

.moviecard {
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

.moviecard:hover {
  transform: scale(1.03);
  background-color: #37474f;
  border-radius: 2%;
  box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2) !important;
  color: white !important;
  cursor: pointer;
}

.imgcard {
  border-radius: 2%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
}
</style>
