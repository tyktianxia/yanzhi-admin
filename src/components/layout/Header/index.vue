<template>
  <div class="header-contain">
    <div>yanzhi-admin-ts-v3</div>
    <div class="header-btn-cont">
      <span class="logoutBtn" @click="toLogout">退出登录</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElHeader, ElMessage, ElMessageBox } from "element-plus";

import { useRouter } from "vue-router";
import { Common } from "@/store/common";
import { Test } from "@/store/test";

const $router = useRouter();
const CommonStore = Common();
const TestStore = Test();

const toLogout = () => {
  ElMessageBox.confirm("是否确认退出登录?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(() => {
    CommonStore.setUserInfo({});
    console.log("logout", TestStore.testData);
    $router.push("/login");
  });
};
</script>

<style scoped>
.header-contain {
  text-align: left;
  color: brown;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logoutBtn {
  cursor: pointer;
}
</style>
