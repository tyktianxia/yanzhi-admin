<template>
  <div id="echarts1" style="width: 600px; height: 400px"></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
  fun1();
  echartInit();
});
const arr0: number[] = [1, 2, 3, 4, 5];
const arr: Array<number> = [1, 2, 4, 5];
</script>

<script lang="ts">
function fun1() {
  console.log("script fun1");
}
function echartInit() {
  let ele: HTMLElement | null = document.getElementById("echarts1");
  if (ele) {
    const myChart = echarts.init(ele);
    const option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    myChart.setOption(option);
  }
}
</script>

<!-- https://juejin.cn/post/7110225928067743751 -->
