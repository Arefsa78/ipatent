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
                      v-model="idea.idea_name"
                      outlined
                      label="موضوع ایده"
                  />
                </v-col>
                <v-col cols="6">
                  <v-text-field
                      v-model="type"
                      outlined
                      label="زمینه‌ی ایده"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                      v-model="idea.description"
                      outlined
                      label="توضیحات کامل"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-spacer/>
                <v-col cols="3">
                  <v-btn block color="success" @click="submit_idea">ثبت ایده</v-btn>
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
import {mapActions} from "vuex";

export default {
  name: "new-idea",
  data: () => ({
    idea: {
      idea_name: "",
      description: "",
      extraResources: ""
    },
    type: ""
  }),
  methods: {
    ...mapActions("ideaPatentModule", ['add_idea']),
    async submit_idea() {
      const res = await this.add_idea(this.idea)
      if (res === "error")
        return;
      await this.$router.replace({name: "Profile"})
    }
  }
}
</script>

<style scoped>

</style>