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
            <v-form>
              <v-text-field
                  label="نام و نام خانوادگی"
                  outlined
              />
              <v-text-field
                  label="شماره تماس"
                  outlined
              />
              <v-btn color="success">
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
export default {
name: "sign-up"
}
</script>

<style scoped>

</style>