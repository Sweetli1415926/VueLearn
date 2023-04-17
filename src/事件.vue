<script>
export default {
    data() {
        return {
            count: 0,
        };

    },
    methods: {
        addCount(num, event) {
            this.count += num;
            console.log(event);
        },
        addCount2(num, event) {
            this.count += num;
            console.log(event);
        },
        divClick() {
            console.log("div click");
        },
        buttonClick() {
            console.log("button click");
        }
    },
};
</script>
<template>
    <!-- $event,可以把当前事件对象一并传递过去 -->
    <h2 @click="addCount(5, $event)">{{ count }}</h2>
    <!-- 一个点击事件可以绑定多个处理函数 -->
    <h2 @click="addCount(5, $event), addCount2(4, $event)">{{ count }}</h2>
    <!-- 事件修饰符 -->
    <!-- .stop阻止事件冒泡 父元素的点击事件不执行 -->
    <div @click="divClick()"> -->
        <button @click.stop="buttonClick()">button</button>
    </div>
    <!-- .prevent 阻止默认行为 -->
    <!-- .once 只触发一次回调 -->
    <!-- 键盘修饰符,可以监听键盘输入 -->
    <input type="text" @keyup.enter="addCount(5, $event)">
</template>