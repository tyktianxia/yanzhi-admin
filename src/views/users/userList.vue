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
    layout="total, sizes, prev, pager, next, jumper"
    v-model:currentPage="pageData.tableData.currentPage"
    :pageSize="pageData.tableData.pageSize"
    :total="pageData.tableData.total"
  />
</template>

<script setup>
import {
  ElCard,
  ElForm,
  ElFormItem,
  ElTable,
  ElTableColumn,
  ElInput,
  ElButton,
  ElPagination,
} from "element-plus";
import { reactive, ref } from "vue";
const form = reactive({
  userName: "",
  iphone: "",
});
const pageData = reactive({
  tableData: [],
  paginate: {
    currentPage: 1,
    pageSize: 2,
    total: 0,
  },
});

const search = () => {
  pageData.tableData = [
    {
      date: "2016-05-03",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-04",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
    {
      date: "2016-05-01",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles",
    },
  ];
  pageData.paginate.total = pageData.tableData.length;
  pageData.paginate.currentPage = 1;
};
const addUser = () => {
  pageData.tableData.push({
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  });
  pageData.paginate.total = pageData.tableData.length;
  pageData.paginate.currentPage = 1;
};
const handleDelete = (index, row) => {
  pageData.tableData.splice(index, 1);
  pageData.paginate.total = pageData.tableData.length;
  pageData.paginate.currentPage = 1;
};
</script>
