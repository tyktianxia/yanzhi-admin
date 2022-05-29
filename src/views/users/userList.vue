<template>
  <!-- <el-card class="box-card">
    hahah 
  </el-card> -->
  <ElForm ref="formRef" :inline="true" :model="form" :rules="rules">
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

  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small">Edit</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination background layout="prev, pager, next" :current-page="paginate.current" :page-size="paginate.pageSize"
    :total="paginate.total" hide-on-single-page />
</template>

<script setup>
import { ElCard, ElForm, ElFormItem, ElTable, ElTableColumn, ElInput, ElButton, ElPagination } from 'element-plus';
import { reactive } from 'vue';
const tableData = reactive([]);
const form = reactive({
  userName: "",
  iphone: ""
})

const paginate = reactive({
  total: 0,
  current: 1,
  pageSize: 10
})

const search = () => {
  // tableData = JSON.parse(JSON.stringify(data))
  // const data = 
  let data = [
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ]
  console.log(tableData)
  tableData.value = tableData.concat(data)
  paginate.total = tableData.length;
  paginate.current = 1;
}
const addUser = () => {
  tableData.push({
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  })
}
const handleDelete = (index, row) => {
  tableData.splice(index, 1)
}

</script>