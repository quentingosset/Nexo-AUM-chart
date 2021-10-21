<template>
  <v-app id="app">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <!-- <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar> -->
        <b>IZ MOC System</b>

        <v-spacer></v-spacer>

        <v-btn
          v-for="link in links"
          :key="link"
          text
          :to="'/' + link.toLowerCase()"
        >
          {{ link }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet rounded="lg">
              <v-container fluid class="pa-4 text-left">
                <transition name="slide-fade" mode="out-in">
                  <router-view />
                </transition>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    links: ["Dashboard", "Login"],
    sideLinks: [
      { name: "Inbox", to: "inbox" },
      { name: "Initiate MOC", to: "initiate" },
      { name: "MOC List", to: "mocs" },
    ],
  }),
  components: {},
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
