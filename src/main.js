import Vue from "vue";
import App from "./App.vue";
import i18n from "./i18n/index";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import VueParticlesBg from "particles-bg-vue";
import $ from 'jquery'



// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import '/swiper/css/swiper.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
import store from '@/store'

import BinAdmin from './plugin'
import './assets/styles/index.styl'
import ECharts from 'vue-echarts/components/ECharts'

//引入视频流 npm install --save flv.js
import flvjs from 'flv.js';


Vue.use(BinAdmin)
// Vue.component(Subarea)
Vue.component('chart', ECharts)

//配置高德地图安全密钥
window._AMapSecurityConfig = {
	securityJsCode: 'shiboMap' //*  安全密钥
}

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueParticlesBg);
let mainVue = new Vue({
  $,
  i18n,
  router,
  store,
  flvjs,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
export default mainVue;
