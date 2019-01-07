import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-rtl/dist/css/bootstrap-rtl.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "./assets/scss/variables.scss"
import "./assets/scss/mixins.scss"
import "./assets/fonts/icomoon/style.css"
import 'swiper/dist/css/swiper.css'
import "./assets/scss/app.scss"


Vue.use(BootstrapVue,VueAwesomeSwiper)

new Vue({
  el: '#app',
  render: h => h(App)
})
