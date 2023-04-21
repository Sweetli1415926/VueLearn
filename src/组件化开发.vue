<script lang="ts">
import content from './components/Content.vue'
import FatherToSon from './components/父组件向子组件传值.vue'
import SonFather from './components/子组件向父组件传值.vue'
export default {
    data() {
        return {
            msg: "这是父组件传过去的值"
        };
    },
    methods: {
        getChildMsg(value: string) {
            console.log(value);
        }
    },
    components: {
        content,
        FatherToSon,
        SonFather,
    }
};
</script>
<template>
    <!-- 相互独立,内部变量互不影响 -->
    <content></content>
    <content></content>
    <content></content>
    <hr>
    <!-- 通过props向子组件传递信息 -->
    <FatherToSon :msg='msg' NoBind='NoBind'></FatherToSon>

    <SonFather @injectMsg="getChildMsg"></SonFather>
</template> 