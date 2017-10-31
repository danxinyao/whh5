<template>
    <div class="pg-region">
        <div class="pg-select border-radius disable-border-color">
            <select class="title-color font_28" v-model="stateRegionID">
                <option value="">省</option>
                <option v-for="stateInfo in regionStateList" :value="stateInfo.regionID">{{stateInfo.name}}</option>
            </select>
        </div>
        <div class="pg-select border-radius disable-border-color">
            <select class="title-color font_28" v-model="cityRegionID">
                <option value="">市</option>
                <option v-for="cityInfo in cityList" :value="cityInfo.regionID">{{cityInfo.name}}</option>
            </select>
        </div>
        <div class="pg-select border-radius disable-border-color">
            <select class="title-color font_28" v-model="districtRegionID">
                <option value="">区</option>
                <option v-for="districtInfo in districtList" :value="districtInfo.regionID">{{districtInfo.name}}</option>
            </select>
        </div>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-region {
        .pg-select {
            width: 180/@rate;
        }
    }
</style>
<script type="text/babel">
    import region from './region'
    export default {
        ...region
    }
</script>