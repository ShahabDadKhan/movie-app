import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from "vuetify/lib/util/colors";

import api from "../service/api";
import Carousel3d from "vue-carousel-3d";

Vue.use(Vuetify);
Vue.use(Carousel3d);
Vue.prototype.$http = api;

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primarydark: "#263238",
        // used in bg color of search bar
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
        //
        main: "#37474f",
        //Primary-dark is used for h2 & also used as an active class for the active link
        lightmain: "#546e7a",
        // light is used for in-actvice links in teh side bar
        lighter: "#b0bec5",
        text: "#fafafa",
        link: "#444444",
        sidebarbordercolor: (176, 190, 197, 0.5),
      },
    },
  },
});
