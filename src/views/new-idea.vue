<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            ایده‌ی جدید
          </v-card-title>
          <v-divider/>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                      outlined
                      label="موضوع ایده"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      outlined
                      label="زمینه‌ی ایده"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                      outlined
                      label="توضیحات کامل"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-spacer/>
                <v-col cols="3">
                  <v-btn block color="success">ثبت ایده</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "new-idea"
}
</script>

<style scoped>

</style>