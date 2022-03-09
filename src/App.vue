<template>
  <router-view v-if="route.path === '/login'"></router-view>

  <yanzhiVue v-else></yanzhiVue>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import yanzhiVue from "./views/yanzhi.vue";
import { userStore } from "@/store/index";
import { onMounted } from "vue";
import { UserInfo } from "@/types/userInfo"
let route = useRoute();

const store = userStore();
console.log(store.userInfo.name);

interface Yobject {
  [key: string]: string;
}
onMounted(() => {
  let url = window.location.href;
  let arr = url.split("#")[1].split("&");
  let result = arr.reduce((obj, item) => {
    let arr4 = item.split("=");
    obj[arr4[0]] = arr4[1];
    // obj.id = '123123'
    return obj;
  }, {} as UserInfo);

  store.setUserInfo(result)
});
</script>

<style scoped>
</style>
