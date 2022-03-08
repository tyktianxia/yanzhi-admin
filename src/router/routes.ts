import { v4 as uuidv4 } from "uuid";
import { RouteRecordRaw } from "vue-router";


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      uuid: uuidv4(),
    },
  },
  {
    path: "/home",
    name: "HOME",
    component: () => import("../views/home.vue"),
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
  },
  {
    path: "/yanzhi",
    name: "YANZHI",
    redirect: "/yanzhi/one",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/components/layout/yLayout.vue"),
    children: [
      {
        path: "one",
        name: "ONE",
        meta: {
          icon: 1,
          showFlag: true,
          uuid: uuidv4(),
        },
        component: () => import("@/views/yanzhi/one.vue"),
      },
      {
        path: "two",
        name: "TWO",
        meta: {
          icon: 1,
          showFlag: true,
          uuid: uuidv4(),
        },
        component: () => import("@/views/yanzhi/two.vue"),
      },
    ],
  },
  {
    path:"/test",
    name: "Test",
    redirect: "/test/test1",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/components/layout/yLayout.vue"),
    children: [
      {
        path: "test1",
        name: "Test1",
        meta: {
          icon: 1,
          showFlag: true,
          uuid: uuidv4(),
        },
        component: () => import("@/views/myTest/test1.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "ABOUT",
    component: () => import("@/views/about.vue"),
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
  },
  {
    path: "/hahahha",
    name: "HAHHAH",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/views/hahahha.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("@/views/404.vue"),
    meta: {},
  },
  {
    path:"/echarts",
    name: "图表",
    redirect: "/echarts/echarts1",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/components/layout/yLayout.vue"),
    children: [
      {
        path: "echarts1",
        name: "echarts1",
        meta: {
          icon: 1,
          showFlag: true,
          uuid: uuidv4(),
        },
        component: () => import("@/views/echarts/echarts1.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    meta: {
      icon: 1,
      showFlag: false,
      uuid: uuidv4(),
    },
  },
];

// 处理routes生成侧边栏菜单，
// TODO:排序
function handler(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return routes.filter((item) => {
    if (!item.meta?.showFlag) {
      return false;
    }
    if (!item.children) {
      return true;
    } else {
      handler(item.children);
      return true;
    }
  });
}

const routes0 = handler(routes);

export default routes;

export { routes0 };

