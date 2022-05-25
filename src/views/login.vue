<template>

  <div class="form_contain">
    <div class="yz_form">
      <ElForm ref="loginFormRef" :model="form" :rules="rules">
        <p ref="testRef" class="yz_form_title">Login Page</p>
        <ElFormItem prop="username">
          <el-input class="yz_form_input" v-model="form.username" placeholder="请输入用户名" :prefix-icon="User" clearable />
        </ElFormItem>
        <ElFormItem prop="passward">
          <el-input class="yz_form_input" v-model="form.passward" placeholder="请输入密码" :prefix-icon="Lock" clearable />
        </ElFormItem>
        <ElButton type="primary" class="yz_form_button" @click="toLogin" :loading="btnLoading">登录</ElButton>
      </ElForm>
    </div>
  </div>
</template>

<script  setup>
// import type { FormInstance } from 'element-plus'
import { ElButton, ElForm, ElInput, ElFormItem } from "element-plus";
import { Lock, User } from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import { Common } from "@/store/common";
import { ref, reactive } from "vue";

let $router = useRouter();
const CommonStore = Common();

const btnLoading = ref(false)
const loginFormRef = ref(null)
const form = reactive({
  username: "",
  passward: ""
})
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  passward: [
    { required: true, message: '请输入登录密码', trigger: 'blur' },
  ],
})

let toLogin = async () => {
  // fields 错误信息
  await loginFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('校验成功，去登录!', fields)
      btnLoading.value = true;
      CommonStore.setUserInfo({ tokenStr: 46456465 });
      $router.push({
        path: "/home",
        query: {
          id: "456456456645",
          tokenStr: "yanzhihaoshuai",
        },
      });
    } else {
      console.log('校验失败!', fields)
    }
  })
  btnLoading.value = false;
};

// let setData = (str: string) => {
//   let arr = str.split("?")[1]?.split("&");
//   if (arr) {
//     let result = arr.reduce((obj, item) => {
//       let arr4 = item.split("=");
//       obj[arr4[0]] = arr4[1];
//       return obj;
//     }, {} as UserInfo);

//     CommonStore.setUserInfo(result);
//   }
// };
</script>

<style>
.form_contain {
  display: flex;
  justify-content: center;
  position: relative;
  top: 160px;
}

.yz_form {
  width: 320px;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 2px 2px 4px #ccc;
}

.yz_form_input {
  margin-bottom: 16px;
}

.yz_form_title {
  text-align: center;
}

.yz_form_button {
  width: 100%;
}
</style>