import { createApp } from "vue";

import App from "./App.vue";
import "normalize.css";
import "./assets/common.css";
import * as echarts from "echarts";
import "./assets/element-reset.css";

// import * as Sentry from "@sentry/vue";
// import { BrowserTracing } from "@sentry/tracing";

// 导入全部element样式，element采用手动引入
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import store from "@/store/index";
import router from "./router/index";

import { createDirectives } from "./directives/index";

const app = createApp(App);

app.config.globalProperties.$echarts = echarts;

// https://www.bilibili.com/video/BV1UZ4y1p7MF?spm_id_from=333.337.search-card.all.click
// Sentry.init({
//     app,
//     dsn: "http://3cdd016aab4b427eb96916fcd8f13578@localhost:9000/2",
//     integrations: [
//         new BrowserTracing({
//             routingInstrumentation: Sentry.vueRouterInstrumentation(router),
//             tracingOrigins: ["localhost", "my-site-url.com", /^\//],
//         }),
//     ],
//     // Set tracesSampleRate to 1.0 to capture 100%
//     // of transactions for performance monitoring.
//     // We recommend adjusting this value in production
//     tracesSampleRate: 1.0,
// });

// 来处理组件渲染函数和侦听器执行期间抛出的未捕获错误
app.config.errorHandler = (err, vm, info) => {
  console.log("======================================= errorHandler: =======================================");
  console.error(err);
  console.log("info: ", info);
  console.log("======================================= errorHandler: =======================================");
};

// 注册所有element图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 挂载全局自定义指令
createDirectives(app);

app.use(router);
app.use(store);
app.mount("#app");
