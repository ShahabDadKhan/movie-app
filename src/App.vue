<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import AppBar from "../src/components/AppBar.vue";
import TheFooter from "../src/components/TheFooter.vue";

export default {
  components: {
    TheFooter,
    AppBar,
  },
  data: () => ({
    drawer: true,
    group: null,
  }),
};
</script>

<style lang="scss">
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
}
</style>
