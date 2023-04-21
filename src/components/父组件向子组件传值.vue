<template>
    <p>这是我自己的内容</p>
    <p>{{ NoBind }}</p>
    <p>{{ NewValue }}</p> -->
</template>
<script lang="ts">
export default {
   
    props: {
        msg:String,
        NoBind: String,
        NewValue: {
            type: String,
            default: '默认值',
            required: false,
        },
        messsage: {
            default(){
                return []
            }
        },
    }
};
</script>