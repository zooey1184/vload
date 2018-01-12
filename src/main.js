import Vue from 'vue'
import App from './App.vue'
import vload from '../src/lib/index.js'
Vue.use(vload)
new Vue({
  el: '#app',
  render: h => h(App)
})
