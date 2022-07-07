<template>
  <div v-if="route.path">
    <router-view v-if="whitePaths.includes(route.path)"></router-view>
    <yanzhiVue v-else></yanzhiVue>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, onErrorCaptured } from "vue";
import yanzhiVue from "./views/yanzhi.vue";

const route = useRoute();

const whitePaths = reactive(["/", "/login"]);

onMounted(() => {
  console.log("app mounted");
});
onErrorCaptured((err, instance, info) => {
  console.log("errorCaptured: info: ", info);
});
</script>
