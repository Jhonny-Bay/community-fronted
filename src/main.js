import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//buefy
import Buefy from "buefy";
import 'buefy/dist/buefy.css'
//elementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/app.css'

import './permission'
import relativeTime from 'dayjs/plugin/relativeTime'
//国际化
import 'dayjs/locale/zh-cn'
const dayjs = require('dayjs')

//相对时间插件
dayjs.extend(relativeTime)
dayjs().locale('zh-cn').format()

Vue.prototype.dayjs = dayjs


Vue.config.productionTip = false

Vue.use(Buefy)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
