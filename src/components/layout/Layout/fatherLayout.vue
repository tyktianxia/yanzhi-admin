<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <div class="subContainer">
        <el-container>
          <el-aside width="240px">
            <Aside></Aside>
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
import { ElContainer, ElMain, ElHeader, ElAside } from "element-plus";
import Header from "@/components/layout/Header/index.vue";
import Aside from "@/components/layout/Aside/index.vue";
</script>

<style scoped></style>
