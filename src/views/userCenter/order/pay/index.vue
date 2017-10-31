<template>
    <pg-main top="0">
        <pg-default-page :icon="payStatus.isSuccess ? 'zhengquetishi' : 'shibaitishi'" :tip="payStatus.title" :btns="payStatus.btns" @continuePay="getWxCloudPaySign" v-if="payStatus.title != ''"></pg-default-page>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
</style>

<script type="text/babel">
	import index from './index'

	export default {
		...index
	}
</script>