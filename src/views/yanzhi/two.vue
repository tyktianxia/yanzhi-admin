<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <ElButton @click="click1">click loading1</ElButton>
    <hr />
    <Child1 test="123" @click="clickTest"></Child1>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { ElButton, ElTable, ElTableColumn, ElLoading } from "element-plus";

import Child1 from "./components/child1.vue";

// const loading = ref(true);
function click1() {
  const loadingInstance1 = ElLoading.service({ fullscreen: true });
  setTimeout(() => {
    loadingInstance1.close();
  }, 1500);
}
const tableData = [
  {
    date: "2016-05-02",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-04",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
  {
    date: "2016-05-01",
    name: "John Smith",
    address: "No.1518,  Jinshajiang Road, Putuo District",
  },
];

const clickTest = (e: Event) => {
  console.log(e.target);
};
</script>

<style>
body {
  margin: 0;
}
</style>
