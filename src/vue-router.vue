<script setup></script>
<template>
    <h1>Hello App!</h1>
    <p>
        <!--使用 router-link 组件进行导航 -->
        <!--通过传递 `to` 来指定链接 -->
        <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
        <router-link to="/user/123">Go to User</router-link>
        <router-link to="/News/456">Go to News</router-link>
        <br>
        <router-link to="/Parent/SonOne">子组件一</router-link>
        <router-link to="/Parent/SonTwo">子组件二</router-link>
        <router-link to="/Parent/SonTwo">子组件二</router-link>
        <br>
        <router-link :to="{name:'Page'}">Page</router-link>
        
        <router-link to="/shop">shop</router-link>
    </p>
    <br>
    <p>

    </p>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view name="ShopTop"></router-view>
    <router-view></router-view>
    <router-view name="ShopFooter"></router-view>
</template>