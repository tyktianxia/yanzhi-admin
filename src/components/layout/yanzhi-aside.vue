<template>
  <el-row class="tac">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in routes0">
        <template v-if="!item.children">
          <el-menu-item :index="item.meta.uuid || item.path" @click="clickMenuItem(item)">
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
        <template v-else>
          <el-sub-menu :index="item.meta.uuid || item.path">
            <template #title>
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="jtem in item.children">
              <template v-if="!jtem.children">
                <el-menu-item :index="jtem.meta.uuid || jtem.path" @click="clickMenuItem(jtem)">
                  <span>{{ jtem.name }}</span>
                </el-menu-item>
              </template>
              <template v-else>
                <el-sub-menu :index="jtem.meta.uuid || jtem.path">
                  <template #title>
                    <el-icon><location /></el-icon>
                    <span>{{ jtem.name }}</span>
                  </template>
                  <template v-for="ztem in jtem.children">
                    <el-menu-item
                      v-if="!ztem.children"
                      :index="ztem.meta.uuid || ztem.path"
                      @click="clickMenuItem(ztem)"
                    >
                      <span>{{ ztem.name }}</span>
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </el-row>
</template>

<script lang="ts" setup>
import {ElMenu,ElMenuItem,ElSubMenu,ElIcon,ElRow} from "element-plus"
import { routes0 } from "@/router";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import { ref } from "vue";
import { watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

const $route = useRoute();
const $router = useRouter();
let active = ref('/')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const clickMenuItem = (item) => {
  console.log("ckickMenuItem:" + item.path);
  if (item.children) return;
  $router.push({
    name: item.name,
  });
};


watchEffect(()=>{
  active.value = $route.meta.uuid as string;
})
</script>

<style>
.tac .el-menu-vertical-demo {
  width: 100%;
}
</style>
