<template>
    <pg-aside>
        <pg-main class="main">
            <div class="contain">
                <div class="box line-bottom-color">
                    <div class="left">收货人</div>
                    <div class="right">
                        <input type="text" placeholder="输入收货人姓名" v-model="info.linkMan" @input="checkValue">
                    </div>
                </div>
                <div class="box line-bottom-color">
                    <div class="left">手机号</div>
                    <div class="right">
                        <input type="text" placeholder="输入收货人手机号码" v-model="info.mobile" @input="checkValue">
                    </div>
                </div>
                <div class="box line-bottom-color">
                    <div class="left">所在地</div>
                    <div class="right">
                        <pg-region
                                :state.sync="info.state"
                                :city.sync="info.city"
                                :district.sync="info.district"></pg-region>
                    </div>
                </div>
                <div class="box line-bottom-color">
                    <div class="left">详细地址</div>
                    <div class="right">
                        <input type="text" placeholder="输入详细地址" v-model="info.address" @input="checkValue">
                    </div>
                </div>
                <div class="default">
                    <input id="checkbox" ref="checkbox" type="checkbox" :checked="info.defaultFlag">
                    <label class="font_24" for="checkbox">设为默认</label>
                </div>
                <span class="btn" :class="{disable:disable}" @click="save">保存</span>
            </div>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    .contain{
        background: #fff;
        padding-bottom: 30/@rate;
        text-align: left;
        input[type="checkbox"]{
            -webkit-appearance: checkbox;
        }
    }
    input[type="text"]{
        display: block;
        width: 100%;
        &::placeholder{
            color: #999;
        }
    }

    .box{
        height: 100/@rate;
        padding: 0 30/@rate;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        line-height: 100/@rate;
        font-size: 28/@rate;
        .left{
            width: 125/@rate;
            color: #999;
        }
        .right{
            width: 565/@rate;
            color: #333;
        }
    }

    .default{
        padding: 0 30/@rate;
        margin: 30/@rate 0;
        input{
            position: relative;
            top: 3/@rate;
        }
        label{
            color: #999;
        }
    }
    .btn{
        display: block;
        background: #f28300;
        left: 0;
        bottom: 0;
        height: 80/@rate;
        margin: 0 30/@rate;
        -webkit-border-radius: 6/@rate;
        -moz-border-radius: 6/@rate;
        border-radius: 6/@rate;
        line-height: 80/@rate;
        text-align: center;
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