<script lang="ts">
export default {
    data() {
        return {
            msg: "这是子组件传过去的值"
        };
    },
    methods: {
        SendParent() {
            //类似于委托
            //1.父组件中接收该方法的名称
            //2.要传递的信息
            this.$emit("injectMsg", this.msg);
        }
    },

    // 子组件访问父组件:$parent 尽量少用
    // 子组件访问根组件:$root
    mounted() {
        console.log(this.$parent)
        console.log(this.$root)
    },
}
</script>
<template>
    <!-- 不加div报警告 -->
    <div>
        <p>{{ msg }}</p>
        <button @click='SendParent'></button>
    </div>
</template>