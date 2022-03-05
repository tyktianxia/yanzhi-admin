<template>
  <h2>测试模块</h2>
  <div>
    <template v-for="item in cardList">
      <Child ref="lkjl" :cardData="item" @click2="clickBtn"></Child>
    </template>
    <Child2 ref="child2"></Child2>
  </div>
</template>

<script setup lang="ts">
import { isProxy, isReactive, isRef, reactive, Ref, shallowReactive, shallowRef, toRefs, watchEffect } from "vue";
import { ref } from "vue";
import Child from "./component/child.vue";
import Child2 from "./component/child2.vue";
let arr = [
  {
    name: "t1",
  },
  {
    name: "t2",
  },
];
let cardList = reactive(arr);
const clickBtn = (name: string) => {
  console.log(name);
};
const state0 = reactive({
  age: 1,
  obj:{
    name:'456'
  }
});

let state1 = toRefs(state0)

let oo = shallowRef(6)

oo.value++
console.log(oo.value)

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
