<template>
  <div>
    <v-container class="mt-16"
      ><V-row class="mt-16">
        <v-col sm="4" class="mr-10" offset-md="1">
          <v-card height="600px">
            <!-- <router-link :to="`/movie/${movie.id}`"> -->
            <v-img
              :src="profilePath"
              alt=""
              style="box-shadow: 0px 8px 15px black; border-radius: 8px"
              height="600px"
            ></v-img>
            <!-- </router-link>  -->
          </v-card>
        </v-col>

        <v-col sm="6">
          <h1>{{ actor.name }}</h1>
          <h2 class="caption mt-2 mb-7">{{ actor.birthday }}</h2>
          <h3 class="mb-5">THE BIOGRAPHY</h3>
          <p class="subtitle font-weight-light font-italic">
            {{ actor.biography }}
          </p>
        </v-col>

        <!-- <div class="pa-2 ml-2">
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
          <moviecard :movie="movie" /> -->
        <!-- </v-col>  -->
        <!-- </v-row> -->
      </V-row>
    </v-container>
    <actor-movie />
  </div>
</template>

<script>
// import Moviecard from "../components/Moviecard.vue";
import ActorMovie from "./ActorMovie.vue";
export default {
  components: {
    // Moviecard,
    ActorMovie,
  },
  data() {
    return {
      actor: {
        // biography: {},
        // profile_path: "",
      },
      //   actorBio: [],
      actorProfile: "",
      actorSocial: [],
      //   actorMovies: [],
      movie: [],
    };
  },

  computed: {
    profilePath() {
      return (
        "https://image.tmdb.org/t/p/w235_and_h235_face/" +
        this.actor.profile_path
      );
    },
  },
  mounted() {
    this.fetchBio(this.$route.params.id);
    this.fetchProfile(this.$route.params.id);
    // this.fetchSocial(this.$route.params.id);
    this.fetchMovies(this.$route.params.id);
  },
  watch: {
    "route.params.id": {
      handler() {
        this.fetchBio(this.$route.params.id);
        this.fetchProfile(this.$route.params.id);
        this.fetchMovies(this.$route.params.id);
      },
    },
  },
  methods: {
    async fetchBio(actorId) {
      const response = await this.$http.get("/person/" + actorId);
      this.actor = response.data;
      console.log("actor detail", this.actor.profile_path);
    },
    async fetchProfile(actorId) {
      const response = await this.$http.get("/person/" + actorId + "/images");
      this.actorProfile = response.data.file_path;
      console.log("Profile", this.actorProfile);
    },
    // async fetchMovies(actorId) {
    //   const response = await this.$http.get(
    //     "/person/" + actorId + "/combined_credits"
    //   );
    //   this.actorMovies = response.data.cast
    //     .filter((x) => x.media_type == "movie")
    //     .slice(0, 6);
    //   console.log("actorMovies", this.actorMovies);
    // },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
  color: map-get($colors, primary);
  letter-spacing: -0.7px;
  text-transform: uppercase;
  //   margin-bottom: 5px;
}
// h2 {
//   text-transform: uppercase;
//   line-height: 4;
//   color: map-get($colors, main);
//   font-size: 15px;
//   font-weight: 600;
//   margin-bottom: 20px;
//   // margin: 40px 0px 16px 11px;
// }
</style>
