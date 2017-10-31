<template>
    <pg-main base class="register" :base="false">
        <div class="form" v-if="!showNext">
            <div class="item">
                <div class="title font_24 titlt-color">手机号码</div>
                <input type="text" class="titlt-color font_28" placeholder="请输入手机号码" v-model="form.mobile">
            </div>
            <div class="item code">
                <div class="title">手机验证码</div>
                <input type="text" class="titlt-color font_28" placeholder="请输入手机验证码" v-model="validCode.code">
                <a href="javascript:void(0)" class="font_24 title-color" v-if="isSendSMS" @click="sendCode">获取验证码</a>
                <a href="javascript:void(0)" class="font_24 title-color" v-else>剩余{{endTime}}</a>                
            </div>
            <div class="login_item ">
                <a href="javascript:void(0)" class="font_32 white-color disable-bg-color active border-radius" @click="next">下一步</a>
            </div>
        </div>  
        <div class="form" v-else>
            <div class="item">
                <div class="title font_24 titlt-color">新的密码</div>
                <input type="password" class="titlt-color font_28" placeholder="输入新的密码" v-model="newForm.pwd">
            </div>
            <div class="item">
                <div class="title font_24 titlt-color">再次确认</div>
                <input type="text" class="titlt-color font_28" placeholder="再次确认密码" v-model="newForm.pwdAgain">
            </div>
            <div class="login_item ">
                <a href="javascript:void(0)" class="font_32 white-color disable-bg-color active border-radius" @click="submit">保存</a>
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
                .title {
                    text-align: left;
                    padding-top: 40/@rate;
                    padding-bottom: 10/@rate;
                }
                input {
                   box-sizing: border-box; 
                   height: 70/@rate;
                   width: 100%;
                }
                a {
                    position: absolute;
                    display: inline-block;
                    right:0;
                    bottom:5/@rate;
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