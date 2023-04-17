<script>
export default {
    data() {
        return {
            msg: "helloworld",
            checked: "",
            fruits: [],
        };
    },

};
</script>
<template>
    <!-- v-model双向绑定,它变,下面都变 -->
    <input type="text" v-model="msg">

    <p>{{ msg }}</p>
    <!-- v-bind单向绑定,别人变它变,它自己变别人不变 -->
    <input type="text" :value="msg">


    <input type="checkbox" v-model="checked">
    <p>{{ checked }}</p>
    <!-- value会添加到v-model绑定的变量或数组中 -->
    <input type="checkbox" v-model="fruits" value="苹果">苹果
    <input type="checkbox" v-model="fruits" value="香蕉">香蕉
    <input type="checkbox" v-model="fruits" value="橘子">橘子
    <h2>喜欢的水果:{{ fruits }}</h2>

    <!-- .lazy 输入框里的内容输入完失去焦点之后 再更新视图-->
    <input type="text" v-model.lazy="msg">
    <p>{{ msg }}</p>



    <!-- .number 将输入框中的内容自动转换为数字类型-->
    <input type="text" v-model.number="msg">
    <p>{{ msg }}</p>


    <!-- .trim 去空格-->
</template>