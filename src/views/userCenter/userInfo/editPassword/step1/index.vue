<template>
    <pg-aside>
        <pg-main class="main">
            <p class="title">当前手机号码</p>
            <p class="font_28">154****1314</p>
            <p class="title">验证码</p>
            <div>
                <span class="font_24">获取验证码</span>
                <input class="font_28" type="text" placeholder="输入验证码">
            </div>
            <router-link :to="{path: '/usercenter/edit'}">下一步</router-link>
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

    p:nth-child(2){
        margin: 30/@rate 0 60/@rate;
    }

    p:nth-child(3){
        margin-bottom: 12/@rate;
    }

    div{
        span{
            float: right;
            width: 160/@rate;
            height: 50/@rate;
            border: 1px solid #333;
            text-align: center;
            line-height: 50/@rate;
        }
        input{
            height: 50/@rate;
            &::placeholder{
                color: #999;
            }
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