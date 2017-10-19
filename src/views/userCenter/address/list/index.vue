<template>
    <pg-aside>
        <pg-main class="main">
            <ul>
                <li>
                    <p>王小二 12346764564</p>
                    <p><span>[默认]</span>大锅饭的风格电饭锅地方个大锅饭的风格</p>
                    <router-link :to="{path: '/usercenter/editaddress'}"></router-link>
                </li>
                <li>
                    <p>王小二 12346764564</p>
                    <p>大锅饭的风格电饭锅地方个大锅饭的风格大锅饭的风格电饭锅地方个大锅饭的风格大锅饭的风格电饭锅地方个大锅饭的风格</p>
                    <router-link :to="{path: '/usercenter/editaddress'}"></router-link>
                </li>
            </ul>
            <router-link class="add" :to="{path: '/usercenter/addaddress'}">新增收货地址</router-link>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    @sprites8_width: 50/@rate;
    @sprites8_height: 300/@rate;

    .main {
        padding-bottom: 80/@rate;
        text-align: left;
    }
    li{
        position: relative;
        padding: 30/@rate 85/@rate 30/@rate 30/@rate;
        border-bottom: 1px solid #eee;
        p{
            &:nth-child(1){
                margin-bottom: 20/@rate;
                font-size: 30/@rate;
                color: #333;
            }
            &:nth-child(2){
                font-size: 28/@rate;
                color: #999;
                line-height: 38/@rate;
                span{
                    color: #f28300;
                }
            }
        }
        a{
            position: absolute;
            background: url("../../../../assets/images/userCenter/sprites_8.png") no-repeat 0 -130/@rate;
            -webkit-background-size: @sprites8_width @sprites8_height;
            width: 34/@rate;
            height: 36/@rate;
            right: 30/@rate;
            top: 50%;
            margin-top: -18/@rate;
        }
    }
    .add{
        position: fixed;
        background: #f28300;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 80/@rate;
        line-height: 80/@rate;
        text-align: center;
        color: #fff;
        font-size: 32/@rate;
    }

</style>

<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>