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
          <v-card-text>
            <v-form
                @submit.prevent="loginUser"
            >
              <v-text-field
                  label="شماره موبایل"
                  v-model="user.fullname"
                  outlined
              />
              <v-text-field
                  label="رمز عبور"
                  v-model="user.password"
                  type="password"
                  outlined
              />
              <v-btn type="submit" color="success">
                ورود
              </v-btn>
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
    user:{
      phoneNum: "",
      password: "",
    },
  }),
  methods:{
    ...mapActions("authModule", ['signup']),
    signupUser(){
      const data = {
        "fullname": this.user.fullname,
        "phoneNum": this.user.phoneNum,
        "password": this.user.password,
      }
      this.signup(data);
    }
  }
}
</script>

<style scoped>

</style>