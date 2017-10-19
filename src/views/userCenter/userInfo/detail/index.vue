<template>
    <pg-aside>
        <pg-main class="main">
            <div class="avatar clearfix">
                <i></i>
                <img :src="userInfo.avatar" alt="">
                <span>点击更换头像</span>
            </div>
            <div class="list">
                <ul>
                    <li>
                        <i></i>
                        <span>用户名</span>
                        <span>{{userInfo.name}}</span>
                    </li>
                    <li>
                        <i></i>
                        <span>手机号</span>
                        <span>{{phone}}</span>
                        <router-link :to="{path:'/editphonenumber1'}">更换绑定</router-link>
                    </li>
                    <li>
                        <i></i>
                        <span>密码</span>
                        <span>************</span>
                        <router-link :to="{path:'/editpassword1'}">修改账号登录密码</router-link>
                    </li>
                </ul>
            </div>
            <span class="exit">退出当前账号</span>
        </pg-main>
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
        line-height: 115/@rate;
        font-size: 28/@rate;
        color: #999;
        img{
            float: left;
            width: 115/@rate;
            height: 115/@rate;
            margin-left: -135/@rate;
            -webkit-border-radius: 60/@rate;
            -moz-border-radius: 60/@rate;
            border-radius: 60/@rate;
        }
        i{
            float: right;
            background: url("../../../../assets/images/userCenter/sprites_8.png") no-repeat 0 -104/@rate;
            -webkit-background-size: @sprites8_width @sprites8_height;
            width: 12/@rate;
            height: 20/@rate;
            margin-top: 47.5/@rate;
        }
    }
    li{
        padding: 35/@rate 0;
        overflow: hidden;
        span{
            float: left;
            font-size: 28/@rate;
            &:nth-child(2){
                width: 118/@rate;
                color: #999;
            }
            &:nth-child(3){
                width: 315/@rate;
                color: #333;
            }
            height: 30/@rate;

            line-height: 30/@rate;
        }
        a{
            float: right;
            margin-right: 20/@rate;
            font-size: 24/@rate;
            color: #999;
        }
        i{
            &:nth-child(1){
                float: right;
                background: url("../../../../assets/images/userCenter/sprites_8.png") no-repeat 0 -104/@rate;
                -webkit-background-size: @sprites8_width @sprites8_height;
                width: 12/@rate;
                height: 20/@rate;
                margin-top: 5/@rate;
            }
        }
    }
    .exit{
        display: block;
        background: #f28300;
        height: 80/@rate;
        margin-top: 70/@rate;
        -webkit-border-radius: 6/@rate;
        -moz-border-radius: 6/@rate;
        border-radius: 6/@rate;
        line-height: 80/@rate;
        color: #fff;
        font-size: 32/@rate;
        text-align: center;
    }
</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>