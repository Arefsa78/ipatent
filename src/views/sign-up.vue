<template>
  <v-container class="fill-height">
    <v-row>
      <v-spacer/>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            ثبت نام
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <v-form
                @submit.prevent="signupUser"
            >
              <v-text-field
                  label="نام و نام خانوادگی"
                  v-model="user.fullname"
                  outlined
              />
              <v-text-field
                  label="شماره تماس"
                  v-model="user.phoneNum"
                  outlined
              />
              <v-text-field
                  label="رمز عبور"
                  v-model="user.password"
                  type="password"
                  outlined
              />
              <v-btn type="submit" color="success">
                ثبت نام
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
  name: "sign-up",
  data: () => ({
    user:{
      fullname: "",
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
      this.$router.replace({name: 'Login'})
    }
  }
}
</script>

<style scoped>

</style>