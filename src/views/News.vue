<template>
    <p>新闻</p>
</template>
<script setup>
import { useRoute } from 'vue-router'
console.log(useRoute().params.id)
</script>