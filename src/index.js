import "./style.css";

import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    pagename: 'Home',
    message: 'Hello Vue!',
    counter:0
  }
});

window.app = app;
