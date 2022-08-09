import Vue from "vue";
import VueI18n from "vue-i18n";
import moduleLanguage from "../langConfig/zh-Chinese.js";
Vue.use(VueI18n);

// 初始化默认字体
let defaultLocal = "zh-Chinese" || "zh-Chinese";
// 创建vue-i18n实例i18n
const i18n = new VueI18n({
  locale: defaultLocal, // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    "zh-Chinese": moduleLanguage, // 中文语言包
    // "zh-Tibetan": require("../langConfig/zh-Tibetan"), // 藏语语言包
    "zh-Tibetan": moduleLanguage, // 中文语言包
  },
});
// 暴露i18n
export default i18n;
