<template>
  <v-app
      class="faLang text--primary"
      v-bind:style="{ background: $vuetify.theme.themes.light.background}"
  >
    <main-drawer ref="drawer" :responsive="responsive"/>

    <v-app-bar
        app
        clipped-right
        color="primary"
    >
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <div class="d-flex align-center font-weight-bold white--text" style="font-size: 25px" >
        IPatent
      </div>

    </v-app-bar>

    <v-main>
      <vue-page-transition name="overlay-up" class="fill-height">
        <sign-up/>
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>

import IdeaProcess from "@/views/idea-process";
import MainDrawer from "@/components/main-drawer";
import New from "@/views/new";
import NewIdea from "@/views/new-idea";
import SignUp from "@/views/sign-up";

export default {
  name: 'App',

  components: {
    SignUp,
    NewIdea,
    New,
    MainDrawer,
    IdeaProcess
  },

  data: () => ({
    responsive: false
  }),

  mounted() {
    this.responsive = window.innerWidth < 960;
    this.$refs.drawer.drawer = false;
  },

  methods: {
    toggleDrawer() {
      this.$refs.drawer.drawer = !this.$refs.drawer.drawer;
    }
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam.eot');
  src: url('./fonts/Shabnam.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam.woff2') format('woff2'),
  url('./fonts/Shabnam.woff') format('woff'),
  url('./fonts/Shabnam.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Bold.eot');
  src: url('./fonts/Shabnam-Bold.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Bold.woff2') format('woff2'),
  url('./fonts/Shabnam-Bold.woff') format('woff'),
  url('./fonts/Shabnam-Bold.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Thin.eot');
  src: url('./fonts/Shabnam-Thin.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Thin.woff2') format('woff2'),
  url('./fonts/Shabnam-Thin.woff') format('woff'),
  url('./fonts/Shabnam-Thin.ttf') format('truetype');
  font-weight: 100;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Light.eot');
  src: url('./fonts/Shabnam-Light.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Light.woff2') format('woff2'),
  url('./fonts/Shabnam-Light.woff') format('woff'),
  url('./fonts/Shabnam-Light.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Medium.eot');
  src: url('./fonts/Shabnam-Medium.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Medium.woff2') format('woff2'),
  url('./fonts/Shabnam-Medium.woff') format('woff'),
  url('./fonts/Shabnam-Medium.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Bold-FD.eot');
  src: url('./fonts/Shabnam-Bold-FD.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Bold-FD.woff2') format('woff2'),
  url('./fonts/Shabnam-Bold-FD.woff') format('woff'),
  url('./fonts/Shabnam-Bold-FD.ttf') format('truetype');
  font-weight: bold;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-FD.eot');
  src: url('./fonts/Shabnam-FD.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-FD.woff2') format('woff2'),
  url('./fonts/Shabnam-FD.woff') format('woff'),
  url('./fonts/Shabnam-FD.ttf') format('truetype');
  font-weight: normal;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Light-FD.eot');
  src: url('./fonts/Shabnam-Light-FD.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Light-FD.woff2') format('woff2'),
  url('./fonts/Shabnam-Light-FD.woff') format('woff'),
  url('./fonts/Shabnam-Light-FD.ttf') format('truetype');
  font-weight: 300;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Medium-FD.eot');
  src: url('./fonts/Shabnam-Medium-FD.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Medium-FD.woff2') format('woff2'),
  url('./fonts/Shabnam-Medium-FD.woff') format('woff'),
  url('./fonts/Shabnam-Medium-FD.ttf') format('truetype');
  font-weight: 500;
}

@font-face {
  font-family: Shabnam;
  src: url('./fonts/Shabnam-Thin-FD.eot');
  src: url('./fonts/Shabnam-Thin-FD.eot?#iefix') format('embedded-opentype'),
  url('./fonts/Shabnam-Thin-FD.woff2') format('woff2'),
  url('./fonts/Shabnam-Thin-FD.woff') format('woff'),
  url('./fonts/Shabnam-Thin-FD.ttf') format('truetype');
  font-weight: 100;
}

.faLang {
  $body-font-family: Shabnam, Tahoma !important;

  html,
  body,
  &.v-application {
    font-family: $body-font-family;
  }

  &.v-application {

    .display-4,
    .display-3,
    .display-2,
    .display-1,
    .headline,
    .title,
    .subtitle-1,
    .subtitle-2,
    .body-1,
    .body-2,
    .caption,
    .overline {
      font-family: $body-font-family;
    }

  }
}
</style>
