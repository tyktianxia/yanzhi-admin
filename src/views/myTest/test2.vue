<template>
  <h2>测试模块</h2>
  <div @click="testFather">
    <template v-for="(item, index) in cardList" :key="index">
      <Child ref="lkjl" :cardData="item" @click2="clickBtn"></Child>
    </template>
    <Child2 ref="child2"></Child2>
    <Child3 :testHtml="testHtml"></Child3>
  </div>
</template>

<script setup lang="ts">
import {
  isProxy, isReactive, isRef, reactive, Ref, shallowReactive, shallowRef, toRefs, watchEffect,
, ref } from "vue";
import Child from "./component/child.vue";
import Child2 from "./component/child2.vue";
import Child3 from "./component/child3.vue";

import { ElButton } from "element-plus";


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
const state0 = reactive({
  age: 1,
  obj: {
    name: "456",
  },
});

const state1 = toRefs(state0);

const oo = shallowRef(6);

oo.value++;
console.log(oo.value);

const testHtml = "<button onclick='testHtmlClick'>testHtml</button>";
function testHtmlClick() {
  console.log("testHtmlButton");
}

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
