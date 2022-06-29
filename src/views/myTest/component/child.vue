<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ cardData.name }}</span>
        <button @click="clickBtn">click</button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "List item " + o }}
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ElCard } from "element-plus";

const props = defineProps<{
  cardData: {
    name: string;
  };
}>();
const emit = defineEmits<{ (e: "click2", name: string): void }>();
const clickBtn = () => {
  emit("click2", props.cardData.name);
};

defineExpose({});
</script>
