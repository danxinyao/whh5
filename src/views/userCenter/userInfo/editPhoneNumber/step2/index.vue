<template>
    <pg-aside>
        <pg-main>
            <div class="contain">
                <div class="item line-bottom-color">
                    <p class="title">新手机号码</p>
                    <input class="font_28" v-model="phone" @input="phoneInput" type="text" placeholder="输入新手机号码">
                </div>
                <div class="item line-bottom-color">
                    <p class="title">验证码</p>
                    <div>
                        <span class="font_24" :class="{disable:!getCode}" @click="sendSms">{{message}}</span>
                        <input class="font_28" type="text" placeholder="输入验证码" v-model="code" @input="codeInput">
                    </div>
                </div>

                <a :class="{'disable':disable}" @click="confirm" href="javascript:">保存</a>
            </div>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    @mainPadding: 30/@rate;

    .contain{
        background: #fff;
        text-align: left;
        padding: 10/@rate 0 40/@rate;;
        color: #333;
    }

    .item{
        padding: 30/@rate;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }

    .title{
        font-size: 24/@rate;
    }

    input:nth-child(2){
        margin-top: 17/@rate;
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
            &.disable{
                color: #999;
            }
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
        margin: 40/@rate @mainPadding 0;
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