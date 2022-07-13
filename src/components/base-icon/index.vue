<template>
  <template v-if="isElementIcon">
    <el-icon><component :is="name" /></el-icon>
  </template>
  <template v-else>
    <span class="baseIcon">
      <base-svg :name="name"> </base-svg>
    </span>
  </template>
</template>

<script setup lang="ts">
import { ElIcon } from "element-plus";
import { computed } from "@vue/reactivity";

const props = defineProps<{
  name: string;
}>();
const isElementIcon = computed(() => {
  let reg = /^icon-/;
  return !reg.test(props.name);
});
</script>

<style>
.baseIcon {
  display: inline-flex;
  justify-content: center;
  margin-right: 5px;
  width: 24px;
  height: 18px;
}
</style>
