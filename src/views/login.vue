<template>
  login Page

  <div>
    <ElButton @click="toLogin">登录</ElButton>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
import { useRouter } from "vue-router";
let $router = useRouter();
let toLogin = () => {
  $router.push("/home");
};
</script>