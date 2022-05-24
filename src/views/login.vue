<template>
  login Page

  <div>
    <ElButton @click="toLogin">登录</ElButton>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
import { useRouter } from "vue-router";
import { Common } from "@/store/common";
import { UserInfo } from "@/types/userInfo";

let $router = useRouter();
const CommonStore =Common();


let toLogin = () => {
  // console.log(Window.a.b)
  setData("?id=456456465&tokenStr=yanzhihaoshuai");
  $router.push({
    path: "/home",
    query: {
      id: "456456456645",
      tokenStr: "yanzhihaoshuai",
    },
  });
};

let setData = (str: string) => {
  let arr = str.split("?")[1]?.split("&");
  if (arr) {
    let result = arr.reduce((obj, item) => {
      let arr4 = item.split("=");
      obj[arr4[0]] = arr4[1];
      return obj;
    }, {} as UserInfo);

    CommonStore.setUserInfo(result);
  }
};
</script>