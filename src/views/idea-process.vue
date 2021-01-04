<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mx-12">
        <v-expansion-panels>
          <v-expansion-panel
              v-for="(level,key) in process.levelStats"
              :key="key"
          >
            <v-expansion-panel-header color="blue" class="level-header">
              ارزیابی اولیه
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <lvl1 :level="level" :active="process.level != key"/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
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
  },

  mounted() {
    this.getProcessUser();
  }
}
</script>

<style scoped>

.level-header {
  font-weight: bold;
  color: white;
}

</style>