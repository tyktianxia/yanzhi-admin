<template>
  <template v-for="item in routes">
    <template v-if="!item.children">
      <el-menu-item :index="item?.meta?.uuid as string ?? item.path" @click="clickMenuItem(item)">
        <baseIcon :name="item?.meta?.icon ?? 'Menu'"></baseIcon>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>

    <template v-else>
      <el-sub-menu :index="item?.meta?.uuid as string ?? item.path">
        <template #title>
          <baseIcon :name="item?.meta?.icon ?? 'Menu'"></baseIcon>
          <span>{{ item.name }}</span>
        </template>
        <asideMenuVue :routes="item.children"> </asideMenuVue>
      </el-sub-menu>
    </template>
  </template>
</template>

<script lang="ts" setup>
import { ElMenuItem, ElSubMenu, ElIcon } from "element-plus";
import { useRouter } from "vue-router";
import { RouteRecordRaw } from "vue-router";

const $router = useRouter();
const props = defineProps<{
  routes: Array<RouteRecordRaw>;
}>();

const clickMenuItem = (item) => {
  console.log(`ckickMenuItem:${item.path}`);
  if (item.children) return;
  $router.push({
    name: item.name,
  });
};
</script>

<script lang="ts">
export default {
  name: "asideMenuVue",
};
</script>
