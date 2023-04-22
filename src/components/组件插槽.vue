<script lang="ts">
export default{
    data(){
        return{
            list:[1,2,3,4,5,6],
            msg:"你好"
        }
    }
}
</script>
<template>
    <!-- <p>我是组件插槽自带的内容</p> -->
    <div>
        <slot name="button"></slot>
        <slot name="input"></slot>
        <!-- 没有传入的话就显示默认按钮 -->
        <!-- <slot name="moren"><button>默认按钮</button></slot> -->
        <slot name="SonToFather" :list="list" :message="msg"></slot>
    </div>
</template>