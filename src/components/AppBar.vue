<template>
  <v-container fluid>
    <div class="bardiv">
      <div>
        <!-- <v-text-field
          v-model="search"
          label="search"
          @keydown="loadMovies"
        ></v-text-field> -->
        <v-autocomplete
          class="text-field"
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
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: null,
      // search: "",
      movies: [],
    };
  },
  mounted() {
    this.loadMovies();
  },
  methods: {
    async loadMovies() {
      const response = await this.$http.get("/movie/popular");
      // const response = await this.$http.get(`"/${this.search} /movie"`);
      this.movies = response.data.results;
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .v-input__icon {
  margin-right: 10px;
  margin-left: -12px;
}

.bardiv {
  // min-width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 30px 0px 0px 20px;
  padding-right: 60px;
}

.text-field {
  // top: 15px;
  // left: 75px;
  max-width: 250px;
  height: 40px;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
