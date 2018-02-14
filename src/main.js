import Vue from 'vue'
import App from './App.vue'
import VFormato from './formato'

Vue.directive('formato',VFormato)

new Vue({
  el: '#app',
  render: h => h(App)
})
