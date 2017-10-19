<template>
    <pg-aside>
        <pg-main class="main">
            <div class="avatar clearfix">
                <img src="" alt="">
                <span>用户名</span>
                <span>135****2068</span>
                <router-link :to="{path: '/usercenter/userinfo'}">编辑</router-link>
            </div>
            <div class="list">
                <ul>
                    <li>
                        <i></i>
                        <i></i>
                        <router-link :to="{path: '/usercenter/orderlist'}">我的订单</router-link>
                    </li>
                    <li>
                        <i></i>
                        <i></i>
                        <router-link :to="{path: '/usercenter/collection'}">我的收藏</router-link>
                    </li>
                    <li>
                        <i></i>
                        <i></i>
                        <router-link :to="{path: '/usercenter/addresslist'}">我的地址</router-link>
                    </li>
                </ul>
            </div>
        </pg-main>
        <!-- 底部工具栏 -->
        <pg-toolbar :isActive="3"></pg-toolbar>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    @sprites8_width: 50/@rate;
    @sprites8_height: 300/@rate;

    .main{
        text-align: left;
        padding: 50/@rate 30/@rate;
    }
    .avatar{
        position: relative;
        padding-left: 135/@rate;
        margin-bottom: 60/@rate;
        img{
            float: left;
            width: 115/@rate;
            height: 115/@rate;
            margin-left: -135/@rate;
            -webkit-border-radius: 60/@rate;
            -moz-border-radius: 60/@rate;
            border-radius: 60/@rate;
        }
        span{
            &:nth-child(2){
                display: block;
                padding: 23/@rate 0 13/@rate;
                font-size: 32/@rate;
                color: #333;
            }
            &:nth-child(3){
                display: block;
                font-size: 20/@rate;
                color: #999;
            }
        }
        a{
            position: absolute;
            right: 0;
            bottom: 28/@rate;
            font-size: 24/@rate;
            color: #1098f7;
        }
    }
    li{
        padding: 35/@rate 0 35/@rate 50/@rate;
        a{
            display: block;
            height: 30/@rate;
            font-size: 28/@rate;
            line-height: 30/@rate;
            color: #666;
        }
        i{
            &:nth-child(1){
                float: left;
                margin-left: -50/@rate;
            }
            &:nth-child(2){
                float: right;
                background: url("../../../assets/images/userCenter/sprites_8.png") no-repeat 0 -104/@rate;
                -webkit-background-size: @sprites8_width @sprites8_height;
                width: 12/@rate;
                height: 20/@rate;
                margin-top: 1/@rate;
            }
        }
        &:nth-child(1){
            i:nth-child(1){
                background: url("../../../assets/images/userCenter/sprites_8.png") no-repeat 0 1/@rate;
                -webkit-background-size: @sprites8_width @sprites8_height;
                width: 30/@rate;
                height: 28/@rate;
            }
        }
        &:nth-child(2){
            i:nth-child(1){
                background: url("../../../assets/images/userCenter/sprites_8.png") no-repeat 0 -32/@rate;
                -webkit-background-size: @sprites8_width @sprites8_height;
                width:30/@rate;
                height: 26/@rate;
            }
        }
        &:nth-child(3){
            i:nth-child(1){
                background: url("../../../assets/images/userCenter/sprites_8.png") no-repeat 0 -66/@rate;
                -webkit-background-size: @sprites8_width @sprites8_height;
                width: 30/@rate;
                height: 30/@rate;
            }
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>