import * as VueRouter from "vue-router";
import { RouteRecordRaw } from "vue-router";
import { Common } from "@/store/common";
import { v4 as uuidv4 } from "uuid";

import { baseRoutes } from "./base";
import { someRoutes } from "./routes";
const routes = [...someRoutes, ...baseRoutes];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  // history: VueRouter.createWebHistory,
  routes,
});

// 处理routes生成侧边栏菜单，
// TODO:排序
function handlerRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes.filter((item) => {
    if (!item?.meta) {
      item.meta = {};
    }
    if (item.meta?.noMenuFlag) {
      return false;
    }
    if (!item.meta?.icon) {
      item.meta.icon = "Menu";
    }
    if (item.children) {
      handlerRoutes(item.children);
    }
    item.meta.uuid = uuidv4() as string;
    return true;
  });
}

const allowList = ["/login", "/register", "/registerResult"]; // no redirect allowList

// 权限校验 参考antd pro的
router.beforeEach((to, from, next) => {
  console.log("beforeEach");
  const CommonStore = Common();
  const token = CommonStore.userInfo.tokenStr;

  // token 在login接口赋值
  if (token) {
    if (to.path == "/login") {
      next({ path: "home" });
    } else {
      console.log("我进来了啊，尚未做校验，");
      next();
    }
  } else if (allowList.includes(to.path)) {
    // 在免登录名单，直接进入
    next();
  } else {
    next({ path: "/login" });
  }
});

router.afterEach(() => {});
export default router;

const routes0 = handlerRoutes(routes);
export { router, routes0 };
