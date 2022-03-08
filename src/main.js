import { createApp } from "vue";

import App from "./App.vue";
import 'normalize.css'
import './assets/common.css'
import * as echarts from "echarts"

// 导入全部element样式，element采用手动引入
import "element-plus/dist/index.css";

import router from "./router/index"
import { createPinia } from "pinia";

const app = createApp(App);

app.use(router)
app.use(createPinia())


app.config.globalProperties.$echarts = echarts;

app.mount("#app");
