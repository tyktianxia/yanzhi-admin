<template>
  <!-- <div ref="tarRef">yahaha</div>
  <button @click="btnclick">click</button> -->
  <p>我看青山多妩媚，料青山看我应如是</p>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { ElButton, ElForm, ElInput, ElFormItem } from "element-plus";

const $router = useRouter();
const tarRef = ref();

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
  // sessionStorage.setItem("test",456)
  console.log("tarRef", tarRef);
  console.log("tarRef.value", tarRef.value);
});
</script>
