<script lang="ts">
  export default {
    data() {
      return {
        message: "hellWorld",
        age: 0,
        user:{
          name:"张三",
        }
      };
    },
    methods: {
    },
    watch:{
      //每当message发生变化时,会调用这个函数
      message(newValue,oldValue){
        console.log(newValue);
        console.log(oldValue);
        //执行异步操作,或者复杂逻辑代码
        if(newValue.length<5){
          console.log("大哥,这里至少要输入5个字符");
        }
      },
      //写法二:
      // message:{
      //   immediate:true,
      //   handler:function(newValue){
      //     console.log(newValue);
      //   }
      // }

      // user(newValue){//监听不到对象中的属性变化,需要使用深度监听
      //     console.log(newValue);
      // },
      user:{
        handler:function(newValue){
          console.log(newValue)
        },
        deep:true,//表示是否深度监听,侦听器会一层层向下便利,完全监听
      },
      //或者
      "user.name":{//这里不能使用属性,只能使用字符串
        handler:function(newValue){
          console.log(newValue)
        },
        deep:true,//表示是否深度监听,侦听器会一层层向下便利,完全监听
      }
    }
  };
</script> 
<template>
  <p>{{message}}</p>
  <button @click="message='你好'">改变message</button>
  <!-- v-model:数据的双向绑定 -->
  <input type="text" v-model="message">

  <p>{{user.name}}</p>
  <button @click="changeUserName=user.name='李四'">改变user.name属性</button>
</template>