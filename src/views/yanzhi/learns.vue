<template>
    <h1>Pages</h1>
    <ul>
        <li v-for="(item, index) in urls" :key="index">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
        </li>
    </ul>
</template>


<script setup>
import { ref, reactive } from "vue";
const urls = reactive([
    {
        title: "百度脑图",
        url: "https://naotu.baidu.com/home"
    },
    {
        title: "语雀",
        url: "https://www.yuque.com/dashboard"
    }
])
</script>