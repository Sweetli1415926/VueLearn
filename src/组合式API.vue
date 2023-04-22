<script>
import { ref, reactive,toRefs,watch,watchEffect} from 'vue'
export default {
    setup() {//组件被创建前执行

        const msg = ref("hello")
        function changemsg() {
            //const修饰的对象不能改变,但是对象的属性可以改变
            msg.value = "我变了"
        }

        const obj = reactive({
            name:"Doctor Yao",
            age:28
        })
        function changeobj(){
            obj.name="Mr Yao"
        }
        //1.watch函数有oldvalue 和newValue,需要指定监听对象,但是不能监听对象的属性
        //2.watchEffect不需要指定监听的属性
        watchEffect(
            ()=>{
                console.log(obj.name)
            }
        )
        //...是ES6的解构运算符
        //解构之后会失去响应式
        //用toRefs重新获得响应式
        return { msg, changemsg,obj,changeobj,...toRefs(obj).name};
    }
}

</script>
<template>
    <!-- 模板会自动解析value 所以不需要msg.value -->
    <p>{{ msg }}</p>
    <button @click="changemsg">改变</button>
    <p>{{ obj.name }}</p>
    <button @click="changeobj">改变对象的值</button>
</template>