<template>
  <div class="tac">
    <el-menu :default-active="active" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <asideMenuVue :routes="routes0"></asideMenuVue>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { ElMenu } from "element-plus";
import { ref, watchEffect } from "vue";

import { useRoute } from "vue-router";
import { routes0 } from "@/router";
import asideMenuVue from "./components/aside-menu.vue";

const $route = useRoute();
const active = ref("/");

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

watchEffect(() => {
  console.log("$route.path:", $route.path);
  active.value = ($route?.meta?.uuid as string) ?? $route.path;
});
</script>

<style>
.tac .el-menu-vertical-demo {
  width: 100%;
}
</style>
