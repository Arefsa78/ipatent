<template>
  <v-card>
    <v-row>
      <v-col
          cols="12"
          v-bind:style="{backgroundColor:primary,minHeight: height+'px'}"
          class="d-flex align-center flex-wrap"
      >
        <v-col cols="12" sm="4" style="
                            font-size: 30px;
                            font-weight: bolder;
                            color: white;"
        >
          رویاهاتو ایده کن
          <br>
          بساز، ثبتش کن
        </v-col>
          <v-img src="../assets/main-home.jpg" style="justify-self: left" :max-height="max_width"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          v-bind:style="{backgroundColor: secondary, color: '#000', minHeight: height+'px'}"
          class="d-flex justify-center align-center"
          style="font-size: 20px"
      >
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" sm="4" class="mx-16">
            <div class="px-10 my-10">
              <h4 class="text-center">ثبت ایده</h4>
              <p class="text-justify">
                شما میتوانید ایده‌ی جدید خود را ثبت کنید و با کمک ما تمام فرآیند‌های ثبت یک ایده را طی کنید و آن را به
                دنیا نشان دهید.
              </p>
              <div class="mt-5 d-flex justify-center">
                <v-btn @click="$router.push({name: 'Login'})" color="secondary">
                  ثبت ایده‌ی جدید
                </v-btn>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="4" class="mx-16">
            <div class="px-10 my-10">
              <h4 class="text-center">ثبت اختراع</h4>
              <p class="text-justify">
                شما میتوانید اختراع خود را ثبت کنید و با کمک ما تمام فرآیند‌های ثبت و ساخت را طی کنید و آن را به
                دنیا منتشر کنید.
              </p>
              <div class="mt-5 d-flex justify-center">
                <v-btn @click="$router.push({name: 'Login'})" color="secondary">
                  ثبت اختراع جدید
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          v-bind:style="{backgroundColor: back, color: '#fff', minHeight: height+'px'}"
          class="d-flex justify-center align-center"
          style="flex-direction: column"
      >
        <div style="font-size: 30px; font-weight: bold; word-spacing: 10px" class="mb-10">
          فرآیند‌ها
        </div>
        <div>
          <v-img
              src="../assets/process.jpg"
              :max-width="(max_width > 1000 ? 1000 : max_width) + 'px'"
          ></v-img>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
          cols="12"
          v-bind:style="{backgroundColor: secondary, color: '#000', minHeight: height+'px'}"
          class="d-flex"
          style="flex-direction: column; justify-content: center"
      >
        <v-row style="flex: 0">
          <v-col cols="12" style="font-size: 30px; font-weight: bold; word-spacing: 10px">
            <div class="text-center">
              حامیان
            </div>
          </v-col>
        </v-row>
        <v-row justify="center" style="flex: 0" class="mt-16">
          <v-col cols="3" class="d-flex justify-center" style="flex-direction: column;align-items: center">
            <div>عکس</div>
            <div>از</div>
            <div>حامیان</div>
          </v-col>
          <v-col cols="3" class="d-flex justify-center" style="flex-direction: column;align-items: center">
            <div>عکس</div>
            <div>از</div>
            <div>حامیان</div>
          </v-col>
          <v-col cols="3" class="d-flex justify-center" style="flex-direction: column;align-items: center">
            <div>عکس</div>
            <div>از</div>
            <div>حامیان</div>
          </v-col>

        </v-row>
      </v-col>
    </v-row>
  </v-card>
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
      primary: this.$vuetify.theme.themes.light.primary,
      secondary: '#fff',
      back: '#183a42',
      height: window.innerHeight,
      max_width: window.innerWidth,
    }
  },
}
</script>

<style scoped>

.lamp {
  max-height: 350px;
}

.lamp-col {
  display: flex;
  justify-content: center;
}

</style>