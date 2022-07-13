import { RouteRecordRaw } from "vue-router";

export const someRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      noMenuFlag: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      noMenuFlag: true,
    },
  },
  {
    path: "/home",
    name: "HOME",
    component: () => import("../views/home/home.vue"),
    meta: {
      icon: "icon-icon-guanli",
    },
  },
  {
    path: "/yanzhi",
    name: "YANZHI",
    redirect: "/yanzhi/one",
    meta: {},
    component: () => import("@/components/layout/Layout/index.vue"),
    children: [
      {
        path: "one",
        name: "ONE",
        meta: {},
        component: () => import("@/views/yanzhi/one.vue"),
      },
      {
        path: "two",
        name: "TWO",
        meta: {},
        component: () => import("@/views/yanzhi/two.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "Test",
    redirect: "/test/test1",
    meta: {
      uuid: "fadasd",
    },
    component: () => import("@/components/layout/Layout/index.vue"),
    children: [
      {
        path: "test1",
        name: "Test1",
        meta: {},
        component: () => import("@/views/myTest/test1.vue"),
      },
    ],
  },
  {
    path: "/learns",
    name: "知识点",
    meta: {},
    component: () => import("@/views/yanzhi/learns.vue"),
  },
  {
    path: "/echarts",
    name: "图表",
    redirect: "/echarts/echarts1",
    meta: {
      icon: "icon-icon-shuju",
    },
    component: () => import("@/components/layout/Layout/index.vue"),
    children: [
      {
        path: "echarts1",
        name: "echarts1",
        meta: {},
        component: () => import("@/views/echarts/echarts1.vue"),
      },
    ],
  },
  {
    path: "/users",
    name: "用户",
    redirect: "/users/userList",
    meta: {
      icon: "Avatar",
    },
    component: () => import("@/components/layout/Layout/index.vue"),
    children: [
      {
        path: "userList",
        name: "用户列表",
        meta: {},
        component: () => import("@/views/users/userList.vue"),
      },
    ],
  },
];
