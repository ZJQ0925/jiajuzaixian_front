// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import axios from 'axios'
/* import vueResouse from 'vue-resource' */

//注册vueResouse
//Vue.use(vueResouse)
//注册axio库
Vue.prototype.$axios=axios
//Vue.use(axios)
//$axios.default.widthCredentails=true//允许携带cookie

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/:3000";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表
import './assets/css/mui.css'
//mint-ui样式
import'./assets/css/style.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './assets/css/icons-extra.css'
//引入mint-ui组件
import MintUI from 'mint-ui'
//注册mint-ui组件
Vue.use(MintUI)
//引入jquery
import './assets/js/jquery'
//引入common.css
import './assets/css/common.css'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
