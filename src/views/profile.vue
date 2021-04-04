<template>
  <div>
    <v-dialog v-model="edit_user_dialog">
      <v-card>
        <v-card-title>
          تغییر اطلاعات
        </v-card-title>
        <v-card-text class="black--text">
          <v-card-text class="black--text user-info">
            <v-row>
              <v-col cols="6">
                <v-text-field label="نام و نام خانودگی:" v-model="user.fullname"/>
              </v-col>
              <v-col cols="6">
                <v-text-field label="نوع اکانت:" v-model="user.type" disabled/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="ایمیل:" v-model="user.email"/>
              </v-col>
              <v-col cols="6">
                <v-text-field label="شماره تماس:" v-model="user.phoneNum"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="نام مدرسه:" v-model="user.schoolName"/>
              </v-col>
              <v-col cols="6">
                <v-text-field label="کد ملی:" v-model="user.nationalCode"/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field label="آدرس:" v-model="user.address"/>
              </v-col>
              <v-col cols="6">
                <v-text-field label="محل زندگی:" v-model="user.residence"/>
              </v-col>
            </v-row>
            <v-row>
              <v-spacer/>
              <v-col cols="2">
                <v-btn @click="edit_user">
                  ثبت اطلاعات
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card color="primary">
            <v-card-title class="white--text">
              مشخصات اکانت
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-divider/>
            <v-card-text class="black--text user-info">
              <v-row>
                <v-col cols="6">
                  نام و نام خانودگی:
                  {{ user.fullname }}
                </v-col>
                <v-col cols="6">
                  نوع اکانت:
                  {{ typeConv(user.type) }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  ایمیل:
                  {{ user.email || 'نامعلوم' }}
                </v-col>
                <v-col cols="6">
                  شماره تماس:
                  {{ user.phoneNum }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  نام مدرسه:
                  {{ user.schoolName || 'نامعلوم' }}
                </v-col>
                <v-col cols="6">
                  کد ملی:
                  {{ user.nationalCode || 'نامعلوم' }}
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  آدرس:
                  {{ user.address || 'نامعلوم' }}
                </v-col>
                <v-col cols="6">
                  محل زندگی:
                  {{ user.residence || 'نامعلوم' }}
                </v-col>
              </v-row>
              <v-row>
                <v-spacer/>
                <v-col cols="2">
                  <v-btn v-if="user.enabled" color="success" @click="edit_user_dialog=true">
                    تکمیل اطلاعات
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card color="primary">
            <v-card-title class="white--text mt-10">
              ایده‌ها
              <v-spacer/>
              <v-icon color="white" large @click="goto_newIdea">add</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="ideas.length === 0">
        <v-col cols="12" class="text-center py-16">
          هیچ اختراعی ثبت نشده است!
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
            cols="4"
            v-for="(idea, i) in ideas"
            :key="i"
        >
          <v-hover v-slot="{hover}">
            <v-card
                class="transition-fast-in-fast-out card-hover"
                :elevation="hover ? 12 : 2"
            >
              <v-card-title>
                {{ idea.idea_name }}
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
      <v-row>
        <v-col cols="12">
          <v-card color="primary">
            <v-card-title class="white--text mt-10">
              اختراعات
              <v-spacer/>
              <v-icon color="white" large @click="goto_newPatent">add</v-icon>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="patents.length === 0">
        <v-col cols="12" class="text-center py-16">
          هیچ اختراعی ثبت نشده است!
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col
            cols="4"
            v-for="(idea, i) in patents"
            :key="i"
        >
          <v-hover v-slot="{hover}">
            <v-card
                class="transition-fast-in-fast-out card-hover"
                :elevation="hover ? 12 : 2"
            >
              <v-card-title>
                {{ idea.idea_name }}
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

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "profile",
  data: () => ({
    edit_user_dialog: false,
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
    ...mapGetters('profileModule', ['user', 'ideas', 'patents']),
  },
  methods: {
    ...mapActions('profileModule', ['getUser', 'editUser']),
    step_display(step) {
      return this.step_list[step];
    },
    typeConv(type) {
      return type;
    },
    goto_newIdea() {
      this.$router.replace({name: 'NewIdea'})
    },
    goto_newPatent() {
    },

    edit_user() {
      this.edit_user_dialog = false;
      this.editUser(this.user)
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style scoped>
.card-hover:hover {
  cursor: pointer;
  transform: scale(1.01);
}

.user-info .row {
  padding: 10px 0;
  font-size: 15px;
}
</style>