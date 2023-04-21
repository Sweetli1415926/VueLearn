<template>
    <p>{{ msg }}</p>
    <p>{{ obj.msg }}</p>
    <button @click="changeinfo()">改变内容</button>
</template>
<script lang="ts">
const obj={
    msg:"我是未改变的内容改变的全局变量"
}//相当于静态全局变量
    export default{
        data(){
            return{
                //每次返回新对象 不会造成数据污染
                msg:"我是未改变的内容改变的局部变量",
                //每次返回固定对象
                obj
            }
        },
        methods:{
            changeinfo(){
                this.msg="我是改变的内容改变的局部变量"
                this.obj.msg="我是改变的内容改变的全局变量"
            }
        }
    }
</script>