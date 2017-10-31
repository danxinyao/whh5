<template>
    <pg-main top="0">
        <div v-if="!util.isWechat()">
            <span>请在微信环境中使用</span>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
</style>

<script type="text/babel">
	import auth from './auth'
	export default {
		...auth
	}
</script>