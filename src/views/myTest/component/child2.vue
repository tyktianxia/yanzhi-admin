<template>
  <div>{{ aaa }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let aaa = ref(1);
defineExpose({
  aaa,
});
</script>

<style></style>
