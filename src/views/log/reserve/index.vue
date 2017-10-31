<template>
    <pg-main base class="register" :base="false">
        <div class="form" v-if="!showSuccess">
            <div class="title font_42 title-color">
                在线预约
            </div>
            <pg-region
                :state.sync="form.state"
                :city.sync="form.city"
                :district.sync="form.district"></pg-region>
            <div class="item">
                <input type="text" class="title-color font_28" placeholder="请输入姓名" v-model="form.name">
            </div>
            <div class="item">
                <input type="text" class="title-color font_28" placeholder="请输入手机号码" v-model="form.mobile">
            </div>
            <div class="item code">
                <input type="text" class="title-color font_28" placeholder="请输入手机验证码" v-model="form.code">
                <a href="javascript:void(0)" class="font_24 title-color" v-if="isSendSMS" @click="sendCode">获取验证码</a>
                <a href="javascript:void(0)" class="font_24 title-color" v-else>剩余{{endTime}}</a>                
            </div>
            <div class="login_item ">
                <a href="javascript:void(0)" @click="submit" class="font_32 white-color disable-bg-color active border-radius">提交</a>
            </div>
        </div>
        <div class="success" v-else>
            <pg-icon name="zhengquetishi" class="success-color font_110"></pg-icon>
            <div class="text font_28 title-color">提交成功，我们会尽快跟你联系</div>
        </div>        
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .register {
        .form {
            padding:90/@rate 30/@rate;
            .title {
                text-align: left;
                margin-bottom: 30/@rate;
            }
           .item {
                border-bottom: 1px solid #f5f5f5;
                position: relative;
                i {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                }
                input {
                   height: 100/@rate;
                   width: 100%;
                }
                a {
                    position: absolute;
                    display: inline-block;
                    right:0;
                    top: 50%;
                    transform: translateY(-50%);                    
                    border: 1px solid #333;
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
        .success {
            padding-top:280/@rate;
            .text {
                padding-top: 50/@rate;
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