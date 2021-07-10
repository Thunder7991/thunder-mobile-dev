import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as echarts from "echarts";
import VueEcharts from "vue-echarts";
import "./styles/reset.css";

Vue.prototype.$echarts = echarts;
Vue.prototype.$bmap = window.BMapGL;
Vue.prototype.$initMap = window.initMap;
Vue.prototype.$mapvgl = window.mapvgl;
Vue.prototype.$mapv = window.mapv;
Vue.prototype.$purpleStyle = window.purpleStyle;

Vue.component("vue-echarts", VueEcharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
