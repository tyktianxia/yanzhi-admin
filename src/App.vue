<template>
  <router-view v-if="route.path === '/login'"></router-view>

  <yanzhiVue v-else></yanzhiVue>
</template>

<script lang="ts" setup>
import yanzhiVue from "./views/yanzhi.vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";

let route = useRoute();


onMounted(() => {
  console.log("app mounted");
});
</script>

<style scoped>
</style>

