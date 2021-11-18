/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap")

import Vue from "vue"

window.Vue = require("vue")

import router from "./routes.js"
window.router = router
window.Fire = new Vue()

import Antd from "ant-design-vue"
import VueApexCharts from "vue-apexcharts"
import Notifications from 'vue-notification'
import DatePicker from 'vuejs-datepicker'
import VueI18n from 'vue-i18n'
import messages from "./messages.json"

Vue.use(Antd)
Vue.use(VueApexCharts)
Vue.use(Notifications)
Vue.use(DatePicker)
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'he',
    fallbackLocale: 'en',
    messages
});

Vue.component("apexchart", VueApexCharts)
Vue.component("datepicker", DatePicker)

const app = new Vue({
    el: "#app",
    router,
    i18n
}).$mount("#app")
