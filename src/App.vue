<template>
  <div v-if="route.path">
    <router-view v-if="whitePaths.includes(route.path)"></router-view>
    <FatherLayout v-else />
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, onErrorCaptured } from "vue";
import FatherLayout from "@/components/layout/Layout/fatherLayout.vue";

const route = useRoute();

const whitePaths = reactive(["/", "/login"]);

onMounted(() => {
  console.log("app mounted");
});
onErrorCaptured((err, instance, info) => {
  console.log("errorCaptured: info: ", info);
});
</script>
