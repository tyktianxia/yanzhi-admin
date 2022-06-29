<template>
  <el-menu-item index="home">
    <el-icon><location /></el-icon>
    <span>Home</span>
  </el-menu-item>
  <el-sub-menu index="1">
    <template #title>
      <el-icon><location /></el-icon>
      <span>YANZHI</span>
    </template>
    <el-menu-item index="1-1">one</el-menu-item>
    <el-menu-item index="1-3">three</el-menu-item>
  </el-sub-menu>
  <el-menu-item index="2">
    <el-icon><icon-menu /></el-icon>
    <span>hahhahah</span>
  </el-menu-item>
  <el-menu-item index="4">
    <el-icon><setting /></el-icon>
    <span>About</span>
  </el-menu-item>
</template>

<script>
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";
import routes from "@/router/routes";
</script>
