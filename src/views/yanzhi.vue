<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <yHeaderVue></yHeaderVue>
      </el-header>
      <div class="subContainer">
        <el-container>
          <el-aside width="240px">
            <YanzhiAside></YanzhiAside>
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </div>
      <!-- <el-footer>f</el-footer> -->
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import {
  ElContainer, ElFooter, ElMain, ElHeader, ElAside,
} from "element-plus";
import yHeaderVue from "@/components/layout/yHeader.vue";
import yMainVue from "@/components/layout/yMain.vue";
import yAsideVue from "@/components/layout/yAside.vue";
import YanzhiAside from "@/components/layout/yanzhi-aside.vue";
</script>

<style scoped>
</style>
