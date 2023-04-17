<script lang="ts">
export default {
    data() {
        return {
            person: ["张三", "李四", "王五"],
            personObj:{name:"张三",age:"18",sex:"男"}

            
        };
    },
};
</script>
<template>
    <!-- v-for使用数组，item代表元素,index代表下标 -->
    <ul>
        <li v-for="(item, index) in person" :key="index">{{ item }}-->{{ index }}</li>
    </ul>
    <!-- v-for循环遍历对象属性 -->
    <ul>
        <li v-for="(item,key,index) in personObj" :key="index">{{item}}-->{{key}}-->{{index}}</li>
    </ul>
</template>