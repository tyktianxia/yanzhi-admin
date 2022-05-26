<template>
  <div v-if="route.path">
    <router-view v-if="whitePaths.includes(route.path)"></router-view>
    <yanzhiVue v-else></yanzhiVue>
  </div>
</template>

<script lang="ts" setup>
import yanzhiVue from "./views/yanzhi.vue";
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";

let route = useRoute();

let whitePaths = reactive(["/", "/login"])

onMounted(() => {
  console.log("app mounted");
});
</script>

<style scoped>
</style>

