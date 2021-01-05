<template>
  <v-container class="mt-5">
    <v-row>
      <v-col cols="12">
        <v-text-field
            v-model="level.ideaTitle"
            :disabled="active"
            label="موضوع ایده"
            outlined
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
            v-model="level.content"
            :disabled="active"
            label="توضیحات بیشتر"
            outlined
        />
      </v-col>
    </v-row>
    <v-row v-if="!active">
      <v-spacer/>
      <v-col cols="2">
        <v-btn style="width: 100%" color="success" dark>ثبت فرم</v-btn>
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