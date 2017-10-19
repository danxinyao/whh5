<template>
    <!-- 带底部工具栏的写法 -->
    <pg-aside>
        <!-- 内容区域 -->
        <pg-main bottom="98">
        </pg-main>
        <!-- 底部工具栏 -->
        <pg-toolbar :isActive="1"></pg-toolbar>
    </pg-aside>
    <!-- 不带底部工具栏的写法 -->
    <!-- <pg-main base></pg-main> -->
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
</style>

<script type="text/babel">
    import demo from './demo'
    export default {
        ...demo
    }
</script>