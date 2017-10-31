<template>
    <pg-main base class="register" :base="false">
        <div class="form">
            <div class="item">
                <pg-icon name="shouji" class="title-color font_42"></pg-icon>
                <input type="text" class="title-color font_28" placeholder="请输入手机号码" v-model="form.mobile">
            </div>
            <div class="item">
                <pg-icon name="zhanghu" class="title-color font_42"></pg-icon>
                <input type="text" class="title-color font_28" placeholder="请输入用户名" v-model="form.login">
            </div>
            <div class="item">
                <pg-icon name="mima" class="title-color font_42"></pg-icon>
                <input type="password" class="title-color font_28" placeholder="请设置密码" v-model="form.password">
            </div>
            <div class="item code">
                <pg-icon name="yanzhengma" class="title-color font_42"></pg-icon>
                <input type="text" class="title-color font_28" placeholder="请输入手机验证码" v-model="form.code">
                <a href="javascript:void(0)" class="font_24 title-color" v-if="isSendSMS" @click="sendCode">获取验证码</a>
                <a href="javascript:void(0)" class="font_24 title-color" v-else>剩余{{endTime}}</a>
            </div>
            <div class="login_item ">
                <a href="javascript:void(0)" class="font_32 white-color disable-bg-color active border-radius" @click="login">免费注册</a>
            </div>
            <div class="items">
                <router-link :to="{ path : '/auth'}" class="font_24 text-color">我有账号,去登录 ></router-link>
            </div>
        </div>        
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .register {
        .form {
            padding:90/@rate 60/@rate;
           .item {
                border-bottom: 1px solid #f5f5f5;
                position: relative;
                i {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                input {
                   box-sizing: border-box; 
                    padding-left: 72/@rate;
                   height: 100/@rate;
                   width: 100%;
                }
                a {
                    position: absolute;
                    display: inline-block;
                    right:0;
                    top: 50%;
                    transform: translateY(-50%);                    
                    border: 1px solid #000;
                    line-height: 50/@rate;
                    height: 50/@rate;
                    padding: 0 30/@rate;
                }
           }
           .login_item {
                height: 80/@rate;
                margin: 70/@rate 0 20/@rate 0;
                a {
                    &.active {
                       background-color: #f28300; 
                    }
                    //kground-color: #ccc;
                    width: 100%;
                    display: block;
                    height: 80/@rate;
                    line-height: 80/@rate;
                }
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