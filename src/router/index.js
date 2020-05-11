import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import detail from '@/components/detail'
// import merchants from '@/components/merchants'
import record from '@/components/record'
import sms from '@/components/sms'
import addmoney from '@/components/addmoney'
import version from '@/components/version'
import parameter from '@/components/parameter'
Vue.use(Router)
/**
 * 重写路由的push方法
 */
// const routerPush = Router.prototype.push
// Router.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error=> error)
// }

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail,
      children:[
        {
          path:'record',
          name:'record',
          component:record
        },
        {
          path:'sms',
          name:'sms',
          component:sms
        },
        {
          path:'addmoney',
          name:'addmoney',
          component:addmoney
        },
        {
          path:'version',
          name:'version',
          component:version
        },
        {
          path:'parameter',
          name:'parameter',
          component:parameter
        }
      ]
    }
  ]
})
