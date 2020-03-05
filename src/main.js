import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
<<<<<<< HEAD
  loading: require('common/image/default.png')
=======
  loading:  require('common/image/default.png')
>>>>>>> recommend
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
