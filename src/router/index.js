import { createRouter, createWebHashHistory } from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from "../views/Home.vue"
import About from "../views/About.vue"
import User from "../views/User.vue"
import NotFound from "../views/NoteFound.vue"
import News from "../views/News.vue"
import Parent from "../views/Parent.vue"
import SonOne from "../views/SonOne.vue"
import SonTwo from "../views/SonTwo.vue"
import Page from "../views/Page.vue"
import ShopTop from "../views/ShopTop.vue"
import ShopMain from "../views/ShopMain.vue"
import ShopFooter from "../views/ShopFooter.vue"
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/user/:id', component: User },
  //匹配路由+数字
  { path: '/news/:id(\\d+)', component: News },
  { path: '/Page', name: 'Page', component: Page },
  {
    path: "/shop", components:

    {
      default: ShopMain,
      ShopTop,
      ShopFooter,
    }
  },
  //正则匹配找不到的页面
  { path: '/:path(.*)', component: NotFound },

  {
    path: '/parent',
    component: Parent,
    children: [
      {
        path: "SonOne",
        component: SonOne
      },
      {
        path: "SonTwo",
        component: SonTwo
      }

    ]
  }
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router
