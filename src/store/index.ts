
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";

const store = createPinia();
// 开始数据持久化
store.use(piniaPluginPersist);

export default store;