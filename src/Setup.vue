<script setup>
//引入组件,不需要注册
import Content from './components/Content.vue'
import {ref} from 'vue'
//定义变量,不需要暴露出去
const a = ref(20);
function adda(){
    a.value++;
}
</script>
<template>
    <p>{{a}}</p>
    <button @click="adda">增加</button>
    <Content />
</template>