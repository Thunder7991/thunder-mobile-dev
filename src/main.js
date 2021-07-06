import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/reset.css'
import * as echarts from 'echarts'
import VueEcharts from 'vue-echarts'

Vue.prototype.$echarts = echarts
Vue.component('vue-echarts', VueEcharts)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
