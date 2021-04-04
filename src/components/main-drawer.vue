<template>
  <v-navigation-drawer
      class="primary"
      app
      :mobile-breakpoint="960"
      dark
      right
      v-model="drawer"
      temporary
      clipped
  >
    <v-list>
      <div v-if="isAuthenticated">
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            @click="$router.push(item.to)"
            v-bind:style="$route.name === item.to ? {backgroundColor: '#47988e'}:{}"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
      <v-list-item
          v-for="item in other_items"
          :key="item.title"
          link
          @click="$router.push({name: item.to})"
          v-bind:style="$route.name === item.to ? {backgroundColor: '#47988e'}:{}"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append v-if="isAuthenticated">
      <v-list-item link @click="logoutUser">
        <v-list-item-icon>
          <v-icon>logout</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>خروج</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "main-drawer",

  props: ['responsive'],

  data() {
    return {
      drawer: false,
    }
  },

  computed: {
    ...mapGetters('authModule', ['isAuthenticated']),
    items() {
      return [
        {
          icon: "portrait",
          title: "صفحه‌ي شخصی",
          to: {
            name: "Profile"
          },
        },
        {
          icon: "lightbulb",
          title: "ایده‌ی جدید",
          to: {
            name: "NewIdea"
          },
        },
        {
          icon: "emoji_symbols",
          title: "اختراع جدید",
          to: {
            name: "new-idea"
          },
        }
      ]
    },
    other_items() {
      return [
        {
          icon: 'home',
          text: 'خانه',
          to: "HomePage"
        },
        {
          icon: 'groups',
          text: 'حامیان',
          to: "Sponsors"
        },
        {
          icon: 'rss_feed',
          text: 'بلاگ',
          to: "Blog"
        },
        {
          icon: 'show_chart',
          text: 'فرآیندها',
          to: "Process"
        },
        {
          icon: 'call',
          text: 'ارتباط با ما',
          to: "Contact Us"
        },
        {
          icon: 'menu_book',
          text: 'آیین نامه',
          to: "Rules"
        },
      ]
    },
  },
  methods: {
    ...mapActions('authModule', ['logout']),
    logoutUser() {
      this.logout()
      this.$router.replace({name: "HomePage"})
    }
  }
}
</script>

<style scoped>

</style>