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

Vue.use(Antd)
Vue.use(VueApexCharts)
Vue.use(Notifications)

Vue.component("apexchart", VueApexCharts)

const app = new Vue({
    el: "#app",
    router
}).$mount("#app")
