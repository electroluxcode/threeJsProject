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


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueParticlesBg);
let mainVue = new Vue({
  $,
  i18n,
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
export default mainVue;