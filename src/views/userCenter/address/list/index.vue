<template>
    <pg-aside>
        <pg-main class="main" infinite-scroll-disabled="busy" infinite-scroll-distance="50" v-infinite-scroll="getList">
            <ul>
                <li v-for="item in list">
                    <p>{{item.linkMan}} {{item.mobile }}</p>
                    <p><span v-if="item.defaultFlag">[默认]</span>{{item.areaDesc + " " + item.address}}</p>
                    <router-link :to="{path: '/editaddress', query:item}"><pg-icon name="bianji" class="right gray-color font_42"></pg-icon></router-link>
                </li>
            </ul>
            <router-link class="add" :to="{path: '/addaddress'}">新增收货地址</router-link>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    .main {
        padding-bottom: 80/@rate;
        text-align: left;
    }
    li{
        position: relative;
        background: #fff;
        padding: 30/@rate 85/@rate 30/@rate 30/@rate;
        border-bottom: 1px solid #eee;
        p{
            &:nth-child(1){
                margin-bottom: 20/@rate;
                font-size: 30/@rate;
                color: #333;
            }
            &:nth-child(2){
                font-size: 28/@rate;
                color: #999;
                line-height: 38/@rate;
                span{
                    color: #f28300;
                }
            }
        }
        a{
            position: absolute;
            right: 30/@rate;
            top: 50%;
            margin-top: -18/@rate;
        }
    }
    .add{
        position: fixed;
        background: #f28300;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80/@rate;
        line-height: 80/@rate;
        text-align: center;
        color: #fff;
        font-size: 32/@rate;
    }

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>