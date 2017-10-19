<template>
    <pg-main class="login" :base="false">
        <div class="form  bg-color">
            <div class="item">
                <pg-icon name="zhanghu" class="title-color font_42"></pg-icon>
                <input type="text" class="title-color font_28" placeholder="代理商账号" v-model="form.username">
            </div>
            <div class="item">
                <pg-icon name="mima" class="title-color font_42"></pg-icon>
                <input type="password" class="title-color font_28" placeholder="代理商密码" v-model="form.password">
            </div>
            <div class="login_item primary-bg-color border-radius">
                <a href="javascript:void(0)" class="font_32 white-color" @click="login">登录</a>
            </div>
            <div class="items">
                <router-link :to="{ path : '/forgetPsw'}" class="font_24 left link-color">忘记密码？</router-link>
                <router-link :to="{ path : '/register'}" class="font_24 right text-color">免费注册 ></router-link>
            </div>
        </div>        
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .login {
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
           }
           .login_item {
                margin: 50/@rate 0 20/@rate 0;
                a {
                    display: block;
                    width: 100%;
                    height: 80/@rate;
                    line-height: 80/@rate;
                    border-radius: 10/@rate;
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