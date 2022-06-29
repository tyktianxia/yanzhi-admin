<template>
  <div>{{ aaa }}</div>
</template>

<script setup lang="ts">
import { ref, defineExpose } from "vue";

const aaa = ref(1);
defineExpose({
  aaa,
});
</script>

<style></style>
