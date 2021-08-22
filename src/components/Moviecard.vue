<template>
  <v-card flat class="moviecard ma-2">
    <router-link
      :to="`/movie/${movie.id}`"
      style="text-decoration: none; color: inherit"
    >
      <v-img class="imgcard" :src="posterPath" height="400px"> </v-img>
    </router-link>
    <h2>{{ movie.title }}</h2>
    <v-card-text>
      <v-row align="center" justify="center" class="mx-0">
        <v-rating
          :value="movie.vote_average / 2"
          dense
          readonly
          size="15"
        ></v-rating>
        <div class="grey--text">
          {{ movie.vote_average * 10 }}% | {{ movie.release_date }}
        </div>
      </v-row>
      <!-- <div class="my-4 subtitle-2"> -->
      <!-- <span v-for="(genre, index) in movie.genre_ids" :key="genre">
        {{ genretypeName(genre, index) }}
      </span>
      </div> -->
    </v-card-text>
  </v-card>
  <!-- </div> -->
  <!-- <v-hover v-slot="{ hover }" open-delay="200">
    <v-card
      :elevation="hover ? 16 : 2"
      :class="({ 'on-hover': hover }, moviecard)"
    >
      <router-link :to="`/movie/${movie.id}`">
        <v-img class="imgcard" :src="posterPath"></v-img
      ></router-link>
      <v-card-title class="black--text">{{ movie.title }}</v-card-title>
      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :value="movie.vote_average / 2"
            color="primarydark"
          ></v-rating>
        </v-row>
      </v-card-text>
    </v-card>
  </v-hover> -->
</template>

<script>
export default {
  props: {
    movie: {
      required: true,
    },
    // genres: {
    //   required: true,
    // },
  },

  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  mounted() {
    this.movie(this.$route.params.id);
  },
  watch: {
    "route.param.id": {
      handler() {
        this.movie(this.$route.params.id);
      },
    },
  },
  // updated() {
  //   this.movie(this.$$route.params.id);
  // },

  // updated() {
  //   this.$nextTick(function () {
  //     this.watch;
  //   });
  // },
  // methods: {
  //   genretypeName(genraId, index) {
  //     for (const item of this.genres) {
  //       if (item.id == genraId) {
  //         if (this.movie.genre_ids.length - 1 == index) {
  //           return item.name;
  //         } else {
  //           return item.name + ",";
  //         }
  //       }
  //     }
  //   },
  // },
};
</script>

<style lang="scss" scoped>
// .link {
//   text-decoration: none;
// }
h2 {
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: -0.5px;
  margin: 10px 11px;
  // color: #37474f;
}

.moviecard {
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
  // box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2) !important;

  // border-radius: 2%;
}

.moviecard:hover {
  // color: #37474f;
  transform: scale(1.03);
  background-color: #37474f;
  border-radius: 2%;
  box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2) !important;
  color: white !important;
  cursor: pointer;
  // color: white !important;
}

.imgcard {
  border-radius: 2%;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;

  // box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2) !important;
  // background-color: blue;
}

// .imgcard:hover {
//   border-bottom-left-radius: 0%;
//   border-bottom-right-radius: 0%;
//   // box-shadow: 0 20px 28px rgba(0, 0, 0, 0.2) !important;
// }
</style>
