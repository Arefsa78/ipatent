<template>
  <v-container>
    <v-row>
      <v-col
          cols="4"
          v-for="(idea, i) in user.ideas"
          :key="i"
      >
        <v-hover v-slot="{hover}">
          <v-card
              class="transition-fast-in-fast-out card-hover"
              :elevation="hover ? 12 : 2"
          >
            <v-card-title>
              {{ idea.name }}
            </v-card-title>
            <v-divider/>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    تاریخ ثبت: {{ idea.date }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    مرحله: {{ step_display(idea.step) }}
                  </v-col>
                </v-row>
                <v-row>
                  <v-timeline
                      align-top
                      dense
                  >
                    <v-timeline-item
                        v-for="(level,i) in idea.levelStats"
                        :key="i"
                        :color="idea.step-1 == i ? 'primary' : 'success'"
                        small
                    >
                      <div>
                        <div class="font-weight-normal">
                          <strong>{{ level.name }}</strong>
                        </div>
                        <div>تاریخ تکمیل: {{ level.time }}</div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "profile",
  data: () => ({
    step_list: {
      1: "اول",
      2: "دوم",
      3: "سوم",
      4: "چهارم",
      5: "پنجم",
      6: "ششم",
      7: "هفتم"
    }
  }),
  computed: {
    ...mapGetters('profileModule', ['user']),
  },
  methods: {
    ...mapActions('profileModule', ['getUser']),
    step_display(step) {
      return this.step_list[step];
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style scoped>
.card-hover:hover{
  cursor: pointer;
  transform: scale(1.01);
}
</style>