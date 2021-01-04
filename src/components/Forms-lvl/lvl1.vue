<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
            v-model="level.ideaTitle"
            :disabled="active"
            label="موضوع ایده"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
            v-model="level.content"
            :disabled="active"
            label="توضیحات بیشتر"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "lvl1",
  props: ['level', 'active']
}
</script>

<style scoped>

</style>