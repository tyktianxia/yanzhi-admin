<template>
  <p></p>
  <ElForm ref="formRef" :inline="true" :model="form">
    <ElFormItem prop="userName">
      <el-input v-model="form.userName" placeholder="请输入用户名" clearable />
    </ElFormItem>
    <ElFormItem prop="iphone">
      <el-input v-model="form.iphone" placeholder="请输入手机号" clearable />
    </ElFormItem>
    <ElFormItem>
      <ElButton @click="search">搜索</ElButton>
      <ElButton>重置</ElButton>
      <ElButton @click="addUser">新增</ElButton>
    </ElFormItem>
  </ElForm>

  <el-table :data="pageData.tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <ElPagination
    background
    layout="prev, pager, next"
    v-model="pageData.paginate.currentPage"
    :page-size="pageData.paginate.pageSize"
    :total="pageData.paginate.total"
  />
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
} from "element-plus";
import { reactive, ref } from "vue";
import dayjs from "dayjs";
import { get,post } from "@/utils/request";
import { getApiUrl } from "@/utils/api";

const form = reactive({
  userName: "",
  iphone: "",
});
const pageData = reactive({
  tableData: [],
  paginate: {
    currentPage: 1,
    pageSize: 10,
    total: 0,
  },
});

const search = async  () => {
  try {
    let res = await get(getApiUrl("getUserList"))
    console.log("userslist",res)
  } catch (error) {
    console.log(error,"error")
  }
  // handlePaginate();
};
const addUser = async () => {
  // pageData.tableData.push({
  //   date: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  //   name: "Tom",
  //   address: "No. 189, Grove St, Los Angeles",
  // });
  try {
    let param = {
      userName:"hahha",
      a:789
    }
    let res = await post(getApiUrl("addUser"),param)
    console.log("addUser",res)
  } catch (error) {
    console.log(error,"error")
  }
  // handlePaginate();
};
const handleDelete = (index, row) => {
  pageData.tableData.splice(index, 1);
  handlePaginate();
};
const handlePaginate = () => {
  pageData.paginate.total = pageData.tableData.length;
  pageData.paginate.currentPage = 1;
};

search();
</script>
