import Vue from "vue";
import App from "./App.vue";
import vuetify from "@/plugins/vuetify";
import router from "@/plugins/router";
import store from "@/plugins/store";
import VueApexCharts from "vue-apexcharts";

Vue.config.productionTip = false;
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);

new Vue({
  render: (h) => h(App),
  vuetify,
  router,
  store
}).$mount("#app");
