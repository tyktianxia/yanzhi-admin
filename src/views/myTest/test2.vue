<template>
  <h2>测试模块</h2>
  <div @click="testFather">
    <Child v-for="(item, index) in cardList" :key="index" ref="lkjl" :cardData="item" @click2="clickBtn"></Child>
    <Child2 ref="child2"></Child2>
    <Child3 :testHtml="testHtml"></Child3>
  </div>
</template>

<script setup lang="ts">
import { reactive, shallowRef } from "vue";
import Child from "./component/child.vue";
import Child2 from "./component/child2.vue";
import Child3 from "./component/child3.vue";

const arr = [
  {
    name: "t1",
  },
  {
    name: "t2",
  },
];
const cardList = reactive(arr);
const clickBtn = (name: string) => {
  console.log(name);
};

const oo = shallowRef(6);

oo.value++;
console.log(oo.value);

const testHtml = "<button onclick='testHtmlClick'>testHtml</button>";

function testFather() {
  console.log("testFather");
}
</script>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
