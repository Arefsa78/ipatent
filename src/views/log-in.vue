<template>
  <v-container class="fill-height">
    <v-row>
      <v-spacer/>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            ورود
          </v-card-title>
          <v-divider/>
          <v-card-text class="black--text">
            <v-form
                @submit.prevent="loginUser"
            >
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        label="شماره موبایل"
                        v-model="user.phoneNum"
                        outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        label="رمز عبور"
                        v-model="user.password"
                        type="password"
                        outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-spacer/>
                  <v-col cols="3">
                    <v-btn type="submit" color="success" width="100%">
                      ورود
                    </v-btn>
                  </v-col>
                </v-row>
                <v-divider class="my-5"/>
                <v-row>
                  <v-col cols="12" class="blue--text" style="cursor: pointer">
                      <div @click="$router.push({name: 'Signup'})">
                        اکانت ندارید؟ همین حالا ثبت نام کنید!
                      </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "log-in",
  data: () => ({
    user: {
      phoneNum: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions("authModule", ['login']),
    async loginUser() {
      const data = {
        "phoneNum": this.user.phoneNum,
        "password": this.user.password,
      }
      await this.login(data);
      this.$router.replace({name: 'Profile'})
    }
  }
}
</script>

<style scoped>

</style>