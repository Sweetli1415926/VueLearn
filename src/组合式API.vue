<script >
import { ref, reactive,toRefs,watch,watchEffect,computed,onMounted,h} from 'vue'
export default {
    setup(props,context) {//组件被创建前执行
        //props是父组件传过来的值
        const message=toRefs(props);
        //context是上下文,保存了传输过来的很多信息
        console.log(context.attrs)//可以拿到传过来的class
        function sendParent(){
            context.$emit('injectCountert',obj.name)
        }


        //生命周期钩子
        onMounted(() => {
            console.log("onMounted Is Done")
        })

        const msg = ref("hello")
        function changemsg() {
            //const修饰的对象不能改变,但是对象的属性可以改变
            msg.value = "我变了"
        }

        const obj = reactive({
            name:"Doctor Yao",
            age:28,
            reverseMsg:computed(()=>{
                return msg.value.split("").reverse().join("");
            }),
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


        context.expose({//写在这里面暴露出去的方法和属性可以被父组件访问到
            sendParent,counter
        })//需要返回渲染函数,又想暴露出去函数和方法,用它
        //...是ES6的解构运算符
        //解构之后会失去响应式
        //用toRefs重新获得响应式
        return { msg, changemsg,obj,changeobj};
        return ()=>h('div',obj.name)//返回渲染函数,整个页面被渲染
    }
}

</script>
<template>
    <!-- 模板会自动解析value 所以不需要msg.value -->
    <p>{{ msg }}</p>
    <button @click="changemsg">改变</button>
    <p>{{ obj.name }}</p>
    <p>{{ obj.reverseMsg}}</p>
    <button @click="changeobj">改变对象的值</button>
</template>