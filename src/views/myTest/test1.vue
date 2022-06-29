<template>
  <h2>测试模块</h2>
  <p ref="testRef">{{ h2Title }}</p>

  <div v-for="item in list" ref="arrRef">{{ item }}</div>
  <button @click="btnClick">click</button>
</template>

<script>
export default {
  data() {
    return {
      h2Title: "h2Title",
      list: [2, 3, 4, 6, 8],
    };
  },
  methods: {
    btnClick() {
      console.log("btnClick");
      console.log(this.$refs.testRef);
      console.log(this.$refs.arrRef);
    },
  },
};
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
