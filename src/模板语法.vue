<script lang="ts">
    export default {
      data() {
        return {
          num: 15,
          uname: "张三",
          msg: "<h2>标题2<h2>",
          id: "d1",
          url: "https://imgcps.jd.com/ling-cubic/ling4/lab/amZzL3QyNzk4Mi8zMTYvODIwODg1NzUxLzU2NzQwMi83MjFiOTlmMi81YmZlNTYxMU5hYmExOTg1YS5wbmc/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/1635184859609366530/cr/s/q.jpg",
          attributeName: "id",
          MouseEvent:"click"
        };
      },
      methods: {
        //给vue定义方法
        changeUname: function () {
          this.uname = "李四"
        },
        changeColor: function () {
          this.id = "d2"
        },
      },
    };
  </script>
  <template>
    <p>{{ num }}</p>
    <p>{{ uname }}</p>
    <!--v-once:当数据改变时,插值处的内容不会更新-->
    <p v-once>{{ uname }} </p>
    <!-- v-on监听 可以用@代替 -->
    <button @click="changeUname">改变名字</button>
    <button @click="changeColor">改变颜色</button>
    <button @click="id='d2'">改变颜色</button>
    <p>{{msg}}</p>
    <!-- 解析HTML -->
    <p v-html="msg"></p>
    <!-- v-bind动态绑定属性内容 -->
    <p v-bind:id="id">v-bind绑定</p>
  
    <!-- 可以省略v-bind 直接用冒号 -->
    <img :src="url" alt="">
  
    <!-- 使用javaScript表达式 -->
    <p>{{num+1}}</p>
    <!-- 动态参数 动态事件 类似于反射 属性名也可以是变量 -->
    <p :[attributeName]="id">v-bind绑定</p>
    <button @[MouseEvent]="attributeName='class'">改变属性</button>
  </template>
  
  <style scoped>
    #d1 {
      color: red;
    }
  
    #d2 {
      color: blue;
    }
  
    .d1 {
      font-size: 50px;
    }
  </style>