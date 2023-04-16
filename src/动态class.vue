<script lang="ts">
  export default {
    data() {
      return {
        message: "helloworld",
        isActive:true,
        classobj:{
          active:true,
          color:true,
        }
      };
    },
  };
</script>

<template>
  <p class="active">helloworld</p>

  <!-- 放置对象,可以是数组 -->
  <p :class="{active:isActive,color:isActive}">helloworld2</p>
  <button @click="isActive=!isActive">改变active</button>
  <p :class="classobj">helloworld2</p>
</template>


<style>
  .active{
    font-size:50px;
  }
  .color{
    background-color: pink;
  }
</style>
