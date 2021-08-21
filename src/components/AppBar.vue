<template>
  <!-- <v-container fluid> -->
  <div>
    <v-autocomplete
      class="text-field mt-5"
      color="main"
      placeholder="search for a movie..."
      rounded
      outlined
      prepend-inner-icon="mdi-magnify"
      append-icon=""
      filled
      dense
      :items="movies"
      item-text="title"
      item-value="id"
      id="search"
    >
      <template v-slot:item="{ item }">
        <router-link
          :to="`/movie/${item.id}`"
          style="text-decoration: none; color: inherit"
        >
          {{ item.title }}</router-link
        >
      </template>
    </v-autocomplete>
  </div>
  <!-- <div> -->
  <!-- <div class="pa-2">
        <h1>Popular</h1>
        <h2>Movies</h2>
      </div> -->
  <!-- </div> -->
  <!-- </v-container> -->
</template>

<script>
export default {
  data() {
    return {
      search: null,
      movies: [],
    };
  },
  mounted() {
    this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const response = await this.$http.get("/movie/popular");
      this.movies = response.data.results;
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

::v-deep .v-input__icon {
  margin-right: 10px;
  margin-left: -12px;
}

.text-field {
  position: absolute;
  top: 15px;
  right: 15px;
  min-width: 250px;
  // height: 1.1%;
  height: 40px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
