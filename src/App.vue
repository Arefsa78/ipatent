<template>
  <v-app>
    <v-main>
      <idea-process/>
    </v-main>
  </v-app>
</template>

<script>

import IdeaProcess from "@/views/idea-process";
export default {
  name: 'App',

  components: {
    IdeaProcess
  },

  data: () => ({
    //
  }),

  mounted() {
    this.$vuetify.rtl = true;
  }
};
</script>
<style>
</style>
