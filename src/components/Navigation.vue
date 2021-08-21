<template>
  <v-navigation-drawer
    color="white pa-5"
    app
    permanent
    height="95%"
    absolute
    style="top: 5%"
  >
    <div>
      <a href="#" class="mb-4">
        <v-img src="../Img/family-watching-movie-3877492-3356751.png"></v-img>
      </a>

      <div v-for="item in items" :key="item.id">
        <h2 class="primarydark--text">{{ item.title }}</h2>
        <v-list rounded dense>
          <v-list-item-group active-class="main--text border">
            <v-list-item v-for="link in item.items" :key="link.id">
              <!-- <router-link
                :to="{
                  path: `/${link.name}`,
                  query: { id: link.id, ctg: item.title },
                }"
              >
              </router-link> -->
              <v-list-item-icon>
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
                <router-link
                  :to="{
                    path: `/${link.name}`,
                    query: { id: link.id, ctg: item.title },
                  }"
                >
                  {{ link.name }}
                </router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  drawer: true,
  data() {
    return {
      items: [
        {
          title: "Discover",
          items: [
            { name: "Popular", icon: "mdi-heart", id: "popular" },
            { name: "Top Rated", icon: "mdi-desktop-mac", id: "top_rated" },
            { name: "Upcoming", icon: "mdi-book-arrow-up", id: "upcoming" },
          ],
        },
      ],
    };
  },

  mounted() {
    this.getGenres();
    console.log("items", this.items);
  },
  methods: {
    async getGenres() {
      const {
        data: { genres },
      } = await this.$http.get("genre/movie/list");

      const itemsWithIcon = [];

      genres.forEach((item) => {
        itemsWithIcon.push({ ...item, icon: "mdi-play-circle" });
      });

      this.items.push({
        title: "Genres",
        items: itemsWithIcon,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 40px 0px 16px 11px;
}

// a {
//   list-style: none;
//   text-decoration: none;
//   background-color: white !important;
// }
.border {
  border: 1px solid #37474f;
  border-radius: 50%;
}
</style>
