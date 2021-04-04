<template>
  <v-app
      class="faLang text--primary"
      v-bind:style="{ background: $vuetify.theme.themes.light.background}"
  >
    <main-drawer v-if="isAuthenticated || responsive" ref="drawer" :responsive="responsive"/>

    <v-app-bar
        app
        clipped-right
        color="primary"
        dense
        height="60"
        style="user-select: none"
    >
      <v-app-bar-nav-icon class="white--text" style="margin-right: 16px" v-if="isAuthenticated || responsive"
                          @click="toggleDrawer"></v-app-bar-nav-icon>

      <div class="d-flex white--text" style="height: 100%">
        <div
            v-if="!isAuthenticated"
            class="bar-item d-flex justify-center align-center"
            @click="goto('Login')"
            v-bind:style="$route.name === 'Login' ? {backgroundColor: '#47988e'}:{}"
        >
          <div>
            ورود
          </div>
        </div>
        <div class="d-flex white--text" style="height: 100%"
             v-if="!responsive">
          <div
              class="bar-item d-flex justify-center align-center"
              v-for="(item, i) in app_bar.items"
              :key="i"
              @click="goto(item.to)"
              v-bind:style="$route.name === item.to ? {backgroundColor: '#47988e'}:{}"
          >
            <div>
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="d-flex align-center font-weight-bold white--text" style="margin-left: 16px;font-size: 25px">
        IPatent
      </div>

    </v-app-bar>

    <v-main>
      <vue-page-transition name="overlay-up" class="fill-height">
        <router-view class="fill-height"></router-view>
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script>

import MainDrawer from "@/components/main-drawer";
import {mapGetters} from "vuex";

export default {
  name: 'App',

  components: {
    MainDrawer,
  },

  data: () => ({
    responsive: false,
    app_bar: {
      items: [
        {
          text: 'خانه',
          to: "HomePage"
        },
        {
          text: 'حامیان',
          to: "Sponsors"
        },
        {
          text: 'بلاگ',
          to: "Blog"
        },
        {
          text: 'فرآیندها',
          to: "Process"
        },
        {
          text: 'ارتباط با ما',
          to: "Contact Us"
        },
        {
          text: 'آیین نامه',
          to: "Rules"
        },
      ]
    }
  }),
  computed: {
    ...mapGetters('authModule', ['isAuthenticated'])
  },
  mounted() {
    this.responsive = window.innerWidth < 700;
    this.$refs.drawer.drawer = false;
  },

  methods: {
    toggleDrawer() {
      this.$refs.drawer.drawer = !this.$refs.drawer.drawer;
    },
    goto(route_name) {
      this.$router.push({name: route_name})
    }
  }
};
</script>
<style lang="scss">
.bar-item {
  padding: 0 20px;
  cursor: pointer;
  transition: 0.5s;
}
.bar-item:hover {
  background-color: #47988e
}

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
  .v-toolbar__content{
    padding: 0;
  }
}
</style>
