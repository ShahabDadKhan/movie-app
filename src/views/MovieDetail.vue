<template>
  <div class="detail">
    <v-container class="">
      <v-row class="mt-6">
        <v-col cols="10" sm="4" class="mr-5">
          <v-card>
            <router-link :to="`/movie/${movie.id}`">
              <v-img
                :src="posterPath"
                alt=""
                style="box-shadow: 0px 8px 15px black; border-radius: 8px"
              ></v-img
            ></router-link>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <h1>{{ this.movie.title }}</h1>
          <v-row class="pl-3">
            <v-col cols="12" sm="8">
              <v-row class="my-3">
                <v-rating
                  :value="movie.vote_average / 2"
                  dense
                  readonly
                  size="20"
                >
                </v-rating>
                | {{ movie.vote_average * 10 }}%
              </v-row>
              <v-row class="mb-3">
                <span color="gray--text "> {{ movie.release_date }} </span>
              </v-row>
              <v-row class="mt-2">
                <span class="subtitle-2 mb-2">THE GENRES</span>
              </v-row>

              <v-row class="body-2 black--text">
                <span
                  v-for="(item, index) in movie.genres"
                  :key="index"
                  class="mr-1"
                  >{{ item.name }}
                  <span v-if="movie.genres.length - 1 != index">, </span>
                </span>
              </v-row>
            </v-col>
          </v-row>
          <p class="mt-5 grey--text text-darken-3 subheader">
            {{ this.movie.overview }}
          </p>
          <v-sheet class="mx-auto" max-width="900">
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="(cast, index) in movie.credits.cast"
                :key="index"
              >
                <router-link :to="`/person/${cast.id}`">
                  <v-avatar class="ma-2 pa-0">
                    <v-img :src="castProfileImage(cast)" alt="img" />
                  </v-avatar>
                </router-link>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <v-divider class="my-6 mb-10"> </v-divider>
          <v-dialog
            class="ma-0 pa-0"
            persistent
            v-model="dialog"
            max-width="800px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="primarydark--text"
                rounded
                outlined
                v-bind="attrs"
                v-on="on"
                @click.prevent="openYouTubeModel"
              >
                <v-icon left> mdi-play </v-icon>
                Trailer
              </v-btn>
            </template>
            <v-card style="background-color: black">
              <v-card-title class="pa-0 ma-0">
                <v-spacer></v-spacer>
                <v-btn text color="error" @click="closeYouTubeModel">
                  <v-icon x-large class="white--text">mdi-close</v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="">
                      <div class="iframe-container">
                        <img :src="mediaURL" v-if="!isVideo" alt="" />
                        <iframe
                          v-if="isVideo"
                          :src="mediaURL"
                          allowfullscreen
                          frameborder="0"
                        ></iframe>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn
            class="ml-2 primarydark--text"
            rounded
            outlined
            @click="dialog = false"
          >
            <v-icon left class="pa-2"> mdi-heart </v-icon> Favourite</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <similar-movies />
  </div>
</template>

<script>
import SimilarMovies from "./SimilarMovies.vue";
export default {
  components: { SimilarMovies },
  data() {
    return {
      movie: {
        credits: {
          crew: {},
        },
        images: {
          backdrops: {},
        },
      },
      isVideo: false,
      mediaURL: "",
      dialog: false,
    };
  },
  mounted() {
    this.fetchMovie(this.$route.params.id);
  },
  watch: {
    // "route.params.id": {
    //   handler() {
    //     this.fetchMovie(this.$route.params.id);
    //   },
    //   immediate: true,
    // },
    $route(to, from) {
      if (to !== from) {
        this.fetchMovie(to.params.id);
      }
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    async fetchMovie(movieId) {
      const response = await this.$http.get(
        "/movie/" + movieId + "?append_to_response=credits,videos,images"
      );
      this.movie = response.data;
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      );
    },
    openYouTubeModel() {
      this.mediaURL = this.youtubeVideo();
      this.isVideo = true;
    },
    closeYouTubeModel() {
      this.dialog = false;
      this.isVideo = false;
    },
    castProfileImage(cast) {
      if (cast.profile_path) {
        return "https://image.tmdb.org/t/p/w300" + cast.profile_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 35px;
  font-weight: 350;
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
}
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
.iframe-container iframe {
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
</style>
