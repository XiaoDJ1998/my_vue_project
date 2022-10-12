import router from './index';
import store from "@/store";

router.beforeEach((to, from, next)=> {
    // 不在登录页并且没有登录
    if(to.path != '/login' && !(store.state.user||JSON.parse(sessionStorage.getItem("store")))) {
      next({ path: '/login' })
    }
    next()
  })

