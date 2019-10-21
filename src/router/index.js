import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import Case from "../components/Case.vue"
import ZXProducts from "../components/ZXProducts.vue"
import Design from "../components/Design.vue"
import Login from "../components/sub/Login.vue"
import Register from "../components/sub/Register.vue"
import UserCenter from "../components/UserCenter.vue"
import ZxPrice from "../components/ZxPrice.vue"
import ResetPwd from "../components/sub/ResetPwd"
import CalcPrice from '../components/CalcPrice'
import Search from '../components/sub/Search'






Vue.use(Router)

export default new Router({
  routes: [
    {path:'/home',component:Home},
    {path:'/',redirect:"/Home"},
    {path:'/case',component:Case},
    {path:'/products',component:ZXProducts},
    {path:'/register',component:Register},
    {path:'/usercenter',component:UserCenter},
    {path:'/zxprice',component:ZxPrice},
    {path:'/login',component:Login},
    {path:'/design',component:Design},
    {path:'/resetPwd',component:ResetPwd},
    {path:'/calc',component:CalcPrice},
    {path:'/search',component:Search},
  ]
})

