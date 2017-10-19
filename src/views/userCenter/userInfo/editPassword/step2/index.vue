<template>
    <pg-aside>
        <pg-main class="main">
            <p class="title">新的密码</p>
            <input class="font_28" type="text" placeholder="输入新的密码">
            <p class="title">验证码</p>
            <input class="font_28" type="text" placeholder="输入验证码">
            <router-link class="disable" :to="{path: '/usercenter/edit'}">保存</router-link>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    @sprites8_width: 50/@rate;
    @sprites8_height: 300/@rate;
    @mainPadding: 30/@rate;

    .main{
        text-align: left;
        padding: 40/@rate @mainPadding;
        color: #333;
    }

    .title{
        font-size: 24/@rate;
    }

    input:nth-child(2){
        margin: 17/@rate 0 47/@rate;
    }

    p:nth-child(3){
        margin-bottom: 17/@rate;
    }
    input{
        height: 50/@rate;
        &::placeholder{
            color: #999;
        }
    }


    a{
        display: block;
        background: #f28300;
        height: 80/@rate;
        margin-top: 80/@rate;
        -webkit-border-radius: 6/@rate;
        -moz-border-radius: 6/@rate;
        border-radius: 6/@rate;
        text-align: center;
        line-height: 80/@rate;
        color: #fff;
        font-size: 32/@rate;
        &.disable{
            background: #ccc;
        }
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>