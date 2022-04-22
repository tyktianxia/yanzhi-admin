<template>
  <div>yahaha</div>
  <button @click="btnclick">click</button>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted } from "vue";
let $router = useRouter();
const btnclick = () => {
  $router.push({
    name: "ABOUT",
    params: {
      a: 123,
      b: 890,
    },
  });
};
onMounted(() => {
  console.log("app mounted");
  // 当前窗口关闭之后，数据即消失；
  sessionStorage.setItem("test",456)
});
</script>
