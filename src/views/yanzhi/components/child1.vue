<template>
  <div>this is child1</div>
  <div v-bind="$attrs">this is child1</div>
</template>

<script setup lang="ts">
const pros = defineProps({ test: Boolean });
// const emit = defineEmits(["click"]);
</script>

<script lang="ts">
export default {
  // inheritAttrs: false,
};
</script>
