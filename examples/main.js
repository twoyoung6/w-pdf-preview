import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import "./plugin/vant-init.js";
import router from './router'
// 引入组件
import PdfView from '../packages/index'
Vue.use(PdfView)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
