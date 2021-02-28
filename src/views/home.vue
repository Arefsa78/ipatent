<template>
  <v-container>
    <v-card>
      <v-row>
        <v-col cols="12">
          <v-carousel>
            <v-carousel-item
                v-for="(item,i) in images"
                :key="i"
                :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-divider/>
      <v-row class="my-6 px-10">
        <v-col cols="12">
          <v-img src="@/assets/process.png"/>
        </v-col>
      </v-row>
      <v-divider/>
      <v-row class="px-10 my-6">
        <v-col cols="6">
          <h2>همین حالا ثبت نام کنید!</h2>
          <v-text-field class="my-6" label="شماره تلفن" outlined></v-text-field>
          <v-text-field class="my-6" label="کد ملی" outlined></v-text-field>
          <v-text-field class="my-6" label="مقطع تحصیلی" outlined></v-text-field>
        </v-col>
        <v-col cols="6" class="lamp-col">
          <img class="lamp" src="@/assets/lamp.png"/>
        </v-col>
      </v-row>
      <v-row class="px-10 my-6">
        <v-col cols="6">
          <h2>حامیان</h2>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      images: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },
}
</script>

<style scoped>

.lamp{
  max-height: 350px;
}
.lamp-col{
  display: flex;
  justify-content: center;
}

</style>