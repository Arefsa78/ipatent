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
      <v-list-item
          v-for="item in items"
          :key="item.title"
          link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
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
export default {
  name: "main-drawer",

  props: ['responsive'],

  data() {
    return {
      drawer: false,
    }
  },

  computed: {
    items() {
      return [
        {
          icon: "announcement",
          title: "ایده‌ی جدید",
          to: {
            name: "new-idea"
          },
        },
        {
          icon: "announcement",
          title: "ایده‌های من",
          to: {
            name: "new-idea"
          },
        },
        {
          icon: "announcement",
          title: "تماس با ما",
          to: {
            name: "new-idea"
          },
        }
      ]
    }
  },
  methods: {
    logoutUser() {
    }
  }
}
</script>

<style scoped>

</style>