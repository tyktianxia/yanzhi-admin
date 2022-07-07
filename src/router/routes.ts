import { v4 as uuidv4 } from "uuid";
import { RouteRecordRaw } from "vue-router";

export const someRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      uuid: uuidv4(),
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      icon: 1,
      showFlag: false,
      uuid: uuidv4(),
    },
  },
  {
    path: "/home",
    name: "HOME",
    component: () => import("../views/home/home.vue"),
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
    component: () => import("@/components/layout/Layout/index.vue"),
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
    path: "/test",
    name: "Test",
    redirect: "/test/test1",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/components/layout/Layout/index.vue"),
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
    path: "/learns",
    name: "知识点",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/views/yanzhi/learns.vue"),
  },
  {
    path: "/echarts",
    name: "图表",
    redirect: "/echarts/echarts1",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/components/layout/Layout/index.vue"),
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
    path: "/users",
    name: "用户",
    redirect: "/users/userList",
    meta: {
      icon: 1,
      showFlag: true,
      uuid: uuidv4(),
    },
    component: () => import("@/components/layout/Layout/index.vue"),
    children: [
      {
        path: "userList",
        name: "用户列表",
        meta: {
          icon: 1,
          showFlag: true,
          uuid: uuidv4(),
        },
        component: () => import("@/views/users/userList.vue"),
      },
    ],
  },
];
