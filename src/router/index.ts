import * as VueRouter from "vue-router";
import routes from "./routes";
import { userStore } from "@/store/userStore";

const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  if (to.path === '/login') {
    next()
  } else {
    let store = userStore();
    if (store.userInfo.tokenStr) {
      if (store.userInfo.tokenStr === "yanzhihaoshuai") {
        console.log('love ssya')
        next()
      } else {
        next()
      }
    } else {
      next({ path: '/login' })
    }
  }
});
export default router;
