import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import { fb } from "./firebase.js"

window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';


Vue.config.productionTip = false;

let app = "";

fb.auth().onAuthStateChanged(function () {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});

Vue.component('Navbar', require('./components/Navbar.vue').default)


