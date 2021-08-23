<template>
  <div>
    <v-container class="mt-16"
      ><V-row class="mt-16">
        <v-col sm="4" class="mr-10 d-flex align-center" offset-md="1">
          <v-card height="600px">
            <v-img
              :src="profilePath"
              alt=""
              style="box-shadow: 0px 8px 15px black; border-radius: 8px"
              height="600px"
            ></v-img>
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
      </V-row>
    </v-container>
    <actor-movie />
  </div>
</template>

<script>
import ActorMovie from "./ActorMovie.vue";
export default {
  components: {
    ActorMovie,
  },
  data() {
    return {
      actor: {},
      actorProfile: "",
      actorSocial: [],
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
    },
    async fetchProfile(actorId) {
      const response = await this.$http.get("/person/" + actorId + "/images");
      this.actorProfile = response.data.file_path;
    },
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
}
</style>
