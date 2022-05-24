import * as VueRouter from "vue-router";
import routes from "./routes";
import { userStore } from "@/store/common";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});


const allowList = ['/login', '/register', '/registerResult'] // no redirect allowList

// 权限校验 参考antd pro的
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  let store = userStore();
  let token = store.userInfo.tokenStr;

  // token 在login接口赋值
  if(token) {
    if(to.path == "/login"){
      next({path:"home"})
    }else{
      console.log("我进来了啊，尚未做校验，")
      next()
    }
  }else {
    if (allowList.includes(to.path)) {
      // 在免登录名单，直接进入
      next()
    } else {
      next({ path: '/login' })
    }
  }
});

router.afterEach(() => {
})
export default router;
