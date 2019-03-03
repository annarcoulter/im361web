import "./style.css";

import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el: '#app',
  data: {
    pagename: 'Home',
    message: 'Hello Vue!',
    counter:0,
    cart:[]
  },
  methods:{
    addToCart: function (name, cost){
      this.cart.push({
        name:name,
        cost:cost,
      })
    }
  },
  computed:{
    cartTotal: function (){
      var total=0;

      for (var i= 0; i <this.cart.length; i++){
        total += this.cart[i].cost;
      }
      return total;
    }
  }
});

window.app = app;
