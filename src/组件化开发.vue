<script lang="ts">
import content from './components/Content.vue'
import Zuhe from './组合式API.vue'
import FatherToSon from './components/父组件向子组件传值.vue'
import SonToFather from './components/子组件向父组件传值.vue'
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
        SonToFather,
        Zuhe,
    },
    mounted(){
        console.log(this.$refs)
        console.log(this.$refs.msg)
        console.log(this.$refs.content)
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
    

    <!-- 父组件访问子组件:$refs -->
    <SonToFather ref="SonToFather"> </SonToFather>
    
    <!-- 子组件访问父组件:$parent -->
    <!-- 子组件访问根组件:$root -->

    <Zuhe class="box" ref="content"></Zuhe>


</template> 