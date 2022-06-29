<template>
  <p></p>
  <ElForm :inline="true" :model="pageData.formData">
    <ElFormItem prop="userName">
      <el-input v-model="pageData.formData.userName" placeholder="请输入用户名" clearable />
    </ElFormItem>
    <ElFormItem prop="iphone">
      <el-input v-model="pageData.formData.iphone" placeholder="请输入手机号" clearable />
    </ElFormItem>
    <ElFormItem>
      <ElButton @click="search">搜索</ElButton>
      <ElButton>重置</ElButton>
      <ElButton @click="addUser">新增</ElButton>
    </ElFormItem>
  </ElForm>

  <el-table :data="pageData.tableData" style="width: 100%">
    <el-table-column type="index" label="序号" />
    <el-table-column prop="userName" label="用户名" width="180" />
    <el-table-column prop="passward" label="密码" width="180" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column prop="pickName" label="姓名" />
    <el-table-column prop="isActive" label="激活" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <ElPagination
    v-model:current-page="pageData.paginate.currentPage"
    background
    layout="prev, pager, next"
    :page-size="pageData.paginate.pageSize"
    :total="pageData.paginate.total"
    @current-change="currentChange"
  />
  <ElDialog
    v-model="pageData.userForm.showFlag"
    :title="pageData.userForm.title"
  >
    <ElForm
      ref="userFormRef"
      :inline="false"
      :model="pageData.userForm.form"
      label-width="80px"
      :rules="pageData.userForm.rules"
    >
      <ElFormItem prop="userName" label="用户名">
        <el-input
          v-model="pageData.userForm.form.userName"
          placeholder="请输入用户名"
          clearable
        />
      </ElFormItem>
      <ElFormItem prop="passward" label="密码">
        <el-input
          v-model="pageData.userForm.form.passward"
          placeholder="请输入密码"
          clearable
        />
      </ElFormItem>
      <ElFormItem prop="iphone" label="手机号">
        <el-input
          v-model="pageData.userForm.form.iphone"
          placeholder="请输入手机号"
          clearable
        />
      </ElFormItem>
    </ElForm>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </template>
  </ElDialog>
</template>

<script setup>
import {
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElInput,
  ElButton,
  ElPagination,
  ElMessage,
  ElMessageBox,
  ElDialog,
} from "element-plus";
import { reactive, ref } from "vue";
import dayjs from "dayjs";
import { get, post } from "@/utils/request";
import { getApiUrl } from "@/utils/api";

const pageData = reactive({
  formData: {
    userName: "",
    iphone: "",
  },
  tableData: [],
  tableData2: [],
  paginate: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
  },
  userForm: {
    showFlag: false,
    title: "",
    form: {
      userName: "",
      passward: "",
      iphone: "",
    },
    rules: {
      userName: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      passward: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
      ],
    },
  },
});
const userFormRef = ref();

const search = async () => {
  try {
    const res = await get(getApiUrl("getUserList"));
    console.log("userslist", res);
    pageData.tableData2 = res;
    handlePaginate();
  } catch (error) {
    console.log(error);
  }
};
const addUser = async () => {
  pageData.userForm.showFlag = true;
  pageData.userForm.title = "新增";
};
function reset() {
  pageData.userForm.showFlag = false;
  pageData.userForm.form = {
    userName: "",
    passward: "",
    iphone: "",
  };
}
function cancel() {
  reset();
}
const confirm = async () => {
  await userFormRef.value.validate(async (valid, fields) => {
    if (valid) {
      const user = pageData.userForm.form;
      if (!user.id) {
        try {
          await post(getApiUrl("addUser"), user);
          ElMessage.success("操作成功");
          await search();
          reset();
        } catch (error) {
          ElMessage.error(error);
        }
      }
    }
  });
};
const handleDelete = (index, row) => {
  if (!row.id) {
    return;
  }
  ElMessageBox.confirm("是否确认此用户?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    try {
      await post(`${getApiUrl("deleteUser")}/${row.id}`);
      ElMessage.success("操作成功");
      await search();
    } catch (error) {
      ElMessage.error(error);
    }
  });
};
const handlePaginate = () => {
  pageData.paginate.total = pageData.tableData2.length;
  pageData.paginate.currentPage = 1;
  currentChange();
};
const currentChange = () => {
  const { currentPage, pageSize } = pageData.paginate;
  pageData.tableData = pageData.tableData2.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
};
search();
</script>
