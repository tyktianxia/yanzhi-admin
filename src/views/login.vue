<template>

  <div class="form_contain">
    <div class="yz_form">
      <ElForm>
        <p class="yz_form_title">login Page</p>
        <el-input v-model="username" placeholder="请输入用户名" />
        <el-input v-model="passward" placeholder="请输入密码" />
        <ElButton class="yz_form_button" @click="toLogin">登录</ElButton>
      </ElForm>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElButton, ElForm, ElInput } from "element-plus";
import { useRouter } from "vue-router";
import { Common } from "@/store/common";
import { UserInfo } from "@/types/userInfo";
import { ref } from "vue";

let $router = useRouter();
const CommonStore = Common();

let username = ref("")
let passward = ref("")

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

<style>
.form_contain {
  display: flex;
  justify-content: center;
  position: relative;
  top: 160px;
}

.yz_form{
  width: 320px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 20px;
}
.yz_form input {
  margin-bottom: 16px;
}
.yz_form_title{
  text-align: center;
}
.yz_form_button{
  width: 100%;
}
</style>