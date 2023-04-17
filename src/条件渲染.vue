<script lang="ts">
export default {
  data() {
    return {
        age:13
    };
  },
  methods: {
  },
};
</script> 
<template>

 <p v-if="age>18">我是成年人</p>
 <p v-else>我是小朋友</p>
<!-- 可以在template上使用 v-if -->
<!-- template本身作为包裹元素,在HTML中不显示 -->
<template v-if="age>18">
    <p>成年人才能看的</p>
    <p>成年人才能看的</p>
    <p>成年人才能看的</p>
    <p>成年人才能看的</p>
    <p>成年人才能看的</p>
    <p>成年人才能看的</p>
</template>
<!-- v-show v-show不同的地方是它会把所有元素都渲染，只是切换CSS不显示 v-if就不渲染 -->
<p v-show="age==18"></p>
<p v-show="age<=18"></p>
</template>