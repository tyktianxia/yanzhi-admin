<template>
  <div class="header-contain">
    <div>yanzhi-admin-ts-v3</div>
    <div class="header-btn-cont">
      <span class="logoutBtn" @click="toLogout">退出登录</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElHeader } from "element-plus";
import { useRouter } from "vue-router";
let $router = useRouter()
let toLogout = ()=>{
  $router.push('/login')
}
</script>

<style scoped>
.header-contain {
  text-align: left;
  color: brown;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logoutBtn{
  cursor: pointer;
}
</style>