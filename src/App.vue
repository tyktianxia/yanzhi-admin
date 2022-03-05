<template>
  <div class="common-layout">
    <el-container>
      <el-header>h</el-header>
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
import YanzhiAside from "./components/yanzhi-aside.vue";
</script>

<style scoped>
.common-layout > .el-container {
  height: 100vh;
}

.subContainer > .el-container {
  height: calc(100vh - 60px);
}
.common-layout .el-header,
.common-layout .el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}
.common-layout .el-footer {
  line-height: 60px;
}

.common-layout .el-aside {
  background-color: #d3dce6;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.common-layout .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
}

.common-layout > .el-container {
  margin-bottom: 40px;
}

.common-layout .el-container:nth-child(5) .el-aside,
.common-layout .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.common-layout .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
