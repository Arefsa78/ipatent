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
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        label="نام و نام خانوادگی"
                        v-model="user.fullname"
                        outlined
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        label="شماره تماس"
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
                  <v-col cols="9" class="error--text">
                    {{ error }}
                  </v-col>
                  <v-col cols="12">
                    <v-btn type="submit" color="success">
                      ثبت نام
                    </v-btn>
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
  name: "sign-up",
  data: () => ({
    user: {
      fullname: "",
      phoneNum: "",
      password: "",
    },
    error: "",
  }),
  methods: {
    ...mapActions("authModule", ['signup']),
    signupUser() {
      if (this.user.fullname.length < 3) {
        this.error = "لطفا اسم خود را کامل کنید"
        return
      }
      if (this.user.phoneNum.length !== 11) {
        this.error = "لطفا شماره تماس خود را تصحیح کنید (09121111111)"
        return
      }
      if (this.user.password.length < 8) {
        this.error = "طول رمز حداقل باید ۸ کارکتر باشد"
        return
      }

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