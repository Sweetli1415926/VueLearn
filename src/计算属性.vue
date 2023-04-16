<script lang="ts">
  export default {
    data() {
      return {
        message: "hellWorld",
        age: 0,
      };
    },
    methods: {

    },
    computed: {//计算属性
      reserveMsg() {
        return this.message.split('').reverse().join('');
      }
    },
  };
</script>
<template>
  <p>{{message}}</p>
  <p>{{reserveMsg}}</p>
</template>