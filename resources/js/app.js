/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap")

import Vue from "vue"

window.Vue = require("vue")

// router
import router from "./routes.js"
window.router = router
window.Fire = new Vue()

import Antd from "ant-design-vue"
Vue.use(Antd)

const app = new Vue({
    el: "#app",
    router
}).$mount("#app")
