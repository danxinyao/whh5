<template>
    <pg-aside>
        <pg-main class="main">
            <div class="contain">
                <div class="avatar clearfix line-bottom-color">
                    <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                    <img :src="userInfo.avatar" alt="">
                    <span class="sctx" >
                        <input ref="input" class="file" type="file" accept="image/png, image/gif, image/jpg, image/jpeg" @change="uploadImage">点击更换头像
                    </span>
                </div>
                <div class="list">
                    <ul>
                        <li class="line-bottom-color">
                            <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                            <span>用户名</span>
                            <span>{{userInfo.name}}</span>
                        </li>
                        <li class="line-bottom-color">
                            <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                            <span>手机号</span>
                            <span>{{phone}}</span>
                            <router-link :to="{path:'/editphonenumber1'}">更换绑定</router-link>
                        </li>
                        <li class="line-bottom-color">
                            <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                            <span>密码</span>
                            <span>************</span>
                            <router-link :to="{path:'/editpassword1'}">修改账号登录密码</router-link>
                        </li>
                    </ul>
                </div>
                <a href="javascript:void(0)" class="exit" @click="exit">退出当前账号</a>
            </div>
        <pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>  
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    .contain{
        background: #fff;
        padding-bottom: 50/@rate;
        text-align: left;
    }
    .avatar{
        position: relative;
        padding: 50/@rate 30/@rate 50/@rate 165/@rate;
        border-bottom-style: solid;
        border-bottom-width: 1px;
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
    }
    .sctx {
        position: relative;
        display: inline-block;
        text-align: center;
        font-size: 14px;
        .file {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            width: 100%;
            height: 100%;
        }
    }
    li{
        padding: 35/@rate 30/@rate;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        overflow: hidden;
        span{
            float: left;
            font-size: 28/@rate;
            &:nth-child(2){
                width: 118/@rate;
                color: #999;
            }
            &:nth-child(3){
                width: 250/@rate;
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
    }
    .exit{
        display: block;
        background: #f28300;
        height: 80/@rate;
        margin: 70/@rate 30/@rate;
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