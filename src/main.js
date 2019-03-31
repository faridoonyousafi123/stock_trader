import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store/store'
import VueResource from 'vue-resource'
import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.http.options.root="https://stocktrader-e0fc1.firebaseio.com/";

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
