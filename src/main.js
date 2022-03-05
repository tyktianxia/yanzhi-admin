import { createApp } from "vue";

import App from "./App.vue";
import 'normalize.css'
import './assets/common.css'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import router from "./router/index"

const app = createApp(App);

app.use(router)
app.use(ElementPlus);
app.mount("#app");
