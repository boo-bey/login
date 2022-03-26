import Vue from 'vue'
import VueRouter from 'vue-router'
import list from '@/utils/navData'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login', //登录页
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/home', //首页
    name: 'home',
    redirect:'/index',
    component: () => import('../views/home/index.vue'),
    children: [{
        path: '/index', //数据管理
        name: 'index',
        component: () => import('../views/home/index/index.vue'),
      },
      {
        path: '/stats', //数据管理
        name: 'stats',
        component: () => import('../views/home/stats/index.vue'),
      },
      {
        path: '/wms', //信息管理
        name: 'wms',
        component: () => import('../views/home/wms/index.vue'),
        children: [{
          path: 'list', //信息管理列表
          name: 'list',
          component: () => import('../views/home/wms/list.vue'),
        }]
      }
    ]
  }
]
// list.forEach(item=>{
//   routes.push(item)
// })

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router