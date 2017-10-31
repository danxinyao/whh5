<template>
    <pg-aside>
        <pg-main>
            <div class="contain">
                <div class="item line-bottom-color">
                    <p class="title">新的密码</p>
                    <input class="font_28" type="text" placeholder="输入新的密码" @input="pswInput" v-model="psw">
                </div>

                <div class="item line-bottom-color">
                    <p class="title">再次确认</p>
                    <input class="font_28" type="text" placeholder="再次确认密码" @input="rePswInput" v-model="rePsw">
                </div>

                <a :class="{'disable':disable}" @click="confirm" href="javascript:">保存</a>
            </div>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    @sprites8_width: 50/@rate;
    @sprites8_height: 300/@rate;
    @mainPadding: 30/@rate;

    .contain{
        background: #fff;
        text-align: left;
        padding: 10/@rate 0 40/@rate;
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
        margin-bottom: 17/@rate;
    }
    input{
        height: 50/@rate;
        width: 100%;
        &::placeholder{
            color: #999;
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