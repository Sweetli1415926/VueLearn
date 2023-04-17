<script lang="ts">
export default {
    data() {
        return {
            List: [3, 1, 4, 2],
        };
    },
    methods: {
        pushList() {
            this.List.push(5);//数组末尾添加元素
            this.List.push(5, 6, 7);//...items先会展开数组，然后添加

        },
        popList() {
            this.List.pop();//删除数组末尾的元素
        },
        shiftList(){
            this.List.shift();//删除数组头的元素
        },
        unshiftList(){
            this.List.unshift(6,9,8);//数组头添加元素
        },
        spliceList(){
            //第一个参数表示要修删除元素的下标
            //第二个参数可选,表示要删除几个元素,未选就是把其后元素全部删除掉
            //三个参数位置填入需要插入的元素,和第二个参数何用可以形成替换功能
            this.List.splice(1,2);
            this.List.splice(1,0,7,8,9);
        },
        sortList(){
            this.List.sort();//可以插入函数决定排序方法
        },
        reverseList(){
            this.List.reverse();//翻转内容
        }
    },
};
</script>
<template>
    <ul>
        <li v-for="item in List" :key="item">{{ item }}</li>
    </ul>
    <button @click="pushList">push</button>
    <button @click="popList">pop</button>
    <button @click="shiftList">shiftList</button>
    <button @click="unshiftList">unshiftList</button>
    <button @click="spliceList">spliceList</button>
    <button @click="sortList">sortList</button>
    <button @click="reverseList">reverseList</button>
</template>