<script>
import ZuJianSlot from "./components/组件插槽.vue"
export default {
    data() {
        return {

        }
    },
    components: {
        ZuJianSlot
    }
}
</script>
<template>
    <ZuJianSlot><button>传送到插槽的按钮</button></ZuJianSlot>
    <ZuJianSlot> <input type="text"></ZuJianSlot>
    <!-- 仅插入名字为对应name的slot -->
    <!--父模板的内容在父级作用域编译;子模板内容在子作用域编译  -->
    <ZuJianSlot>
        <template #input><input type="text"></template>
        <template #button><button>具名插槽</button></template>
        <!-- 父组件拿到子组件的值 -->
        <template #SonToFather="slotProps">
            <ul>
                <li v-for="item in slotProps.list" :key="item">{{ item}}---{{slotProps.message }}</li>
            </ul>
        </template>
    </ZuJianSlot>






    <ZuJianSlot #SonToFather>

    </ZuJianSlot>
</template>