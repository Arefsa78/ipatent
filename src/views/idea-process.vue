<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" class="mx-12">
          <v-expansion-panels v-model="panel" multiple light>
            <v-expansion-panel
                v-for="(level,key) in process.levelStats"
                :key="key"
                class=""
            >
              <v-expansion-panel-header
                  class="font-weight-bold white--text py-5"
                  :color="set_color(key)"
                  :disable-icon-rotate="key <= process.level"
              >
                {{ levelTitles[key] }}
                <!--                <template v-if="key < process.level" v-slot:actions>-->
                <!--                  <v-icon large color="success">-->
                <!--                    check-->
                <!--                  </v-icon>-->
                <!--                </template>-->
                <!--                <template v-else-if="key == process.level" v-slot:actions>-->
                <!--                  <v-icon large color="success">-->
                <!--                    error-->
                <!--                  </v-icon>-->
                <!--                </template>-->
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <lvl1 :level="level" :active="process.level != key"/>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Lvl1 from "@/components/Forms-lvl/lvl1";

export default {
  name: "idea-process",
  components: {Lvl1},
  computed: {
    ...mapGetters('ideaProcessModule', ['process']),
  },

  methods: {
    ...mapActions('ideaProcessModule', ['getProcessUser']),
    set_color(key) {
      if (key < this.process.level)
        return 'success'
      if(key > this.process.level)
        return 'error'
      return 'primary'
    }
  },

  data: () => ({
    panel: null,
    levelTitles: {
      1: "ارزیابی",
      2: "پروپزال",
      3: "جمع‌آوری اطلاعات",
      4: "تکمیل موضوع فرآیند",
    }
  }),

  mounted() {
    this.getProcessUser();
    this.panel = [this.process.level - 1];
  }
}
</script>

<style scoped>

.level-header {
  font-weight: bold;
  color: white;
}

</style>