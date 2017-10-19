<template>
    <pg-main class="order" base   infinite-scroll-disabled="busy" infinite-scroll-distance="form.pageSize" v-infinite-scroll="loadmore">
        <ul class="nav flex-ul bg-color">
            <li v-for="(item, index) in navList">
                <a href="javascript:void(0)" @click="changeNav(index)" :class="[navActive == index ? 'active' : '']" class="font_30 text-color">{{item.name}}</pg-icon></a>
            </li>               
        </ul>
        <div class="content">
            <div class="item bg-color line-bottom-color" v-for="item in orderList">
                <div class="title font_24 clearfix">
                    <div class="left  gray-color">{{item.createTime}}</div>
                    <div class="right  primary-color" v-if="item.flag == 0 && item.refundFlag < 100">等待付款</div>
                    <div class="right  primary-color" v-if="item.flag == 10 && item.refundFlag <= 0">商家已发货</div>
                    <div class="right  primary-color"  v-if="item.flag == 10 && item.refundFlag <= 0">等待商家发货</div>
                    <div class="right  primary-color" v-if="item.flag == 100 && item.refundFlag != 10">交易成功</div>
<!--                     <p v-if="item.flag == 20 && item.refundFlag <= 0">待收货</p>
                    <p v-if="item.flag == 10 && item.refundFlag <= 0">待发货</p>
                    <p v-if="item.flag == 0 && item.refundFlag < 100">待付款</p>
                    <p v-if="item.refundFlag >= 100 || item.flag == 97 || item.flag == 98">交易关闭</p>
                    <p v-if="item.flag == 100 && item.refundFlag != 10">交易成功</p>
                    <p v-if="item.refundFlag == 10">申请退款中</p>  -->                   
<!--                     <div class="right  primary-color">商家已发货</div>
                    <div class="right  primary-color">等待商家发货</div> -->
                </div>
                <a href="javascript:void(0)" class="clearfix middle font_24 text-color">
                    <span class="img_box left">
                        <img class="lazy-img" v-lazy="item.goodsImageUrls[0]">
                        <!-- <img src="~assets/images/usercenter_order_list_01.jpg"  alt=""> -->
                    </span>
                    <span class="name left">大气怡人地中海风格大气怡人地中海风格地中海风格</span>
                    <span class="all right">
                        <span class="price">¥ {{item.totalAmount}}</span>
                        <span class="price gray-color">X {{item.totalQty}}</span>
                    </span>
                </a>
                <div class="ctr clearfix disable-border-color">
                    <span class="left font_24 primary-color">¥ {{item.totalAmount}}</span>
                    <a href="javascript:void(0)" class="right border-radius font_24 primary-color primary-border-color" @click="fuKuan">付款</a>
<!--                     <a href="javascript:void(0)" class="right border-radius font_24 gray-color border-color">取消</a>
                    <a href="javascript:void(0)" class="right border-radius font_24 primary-color primary-border-color">确认收货</a> -->
                    <!-- <a href="javascript:void(0)" class="right border-radius font_24 gray-color border-color">查看详情</a> -->
                    <router-link :to="{ path : '/orderDetail?id='+ item.mallOrderID}"  class="right border-radius font_24 gray-color border-color">查看详情</router-link>
                </div>
            </div>
        </div>
        <pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>                  
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .order {
        .nav {
            padding: 0 30/@rate;
            margin-bottom: 10/@rate;
            li {
                a {
                    display: block;
                    height: 80/@rate;
                    line-height: 80/@rate;
                    border-bottom: 2px solid transparent;
                    &.active {
                        border-bottom: 2px solid #f28300;
                        color: #f28300;
                    }
                }
            }
        }
        .content {
            .item {
                border-bottom-width:10/@rate;
                border-bottom-style: solid;                 
               .title {
                    padding: 0 30/@rate; 
                    height: 80/@rate;
                    line-height: 80/@rate;
                    border-bottom: 1px solid #eee;
               } 
               .middle {
                    padding: 10/@rate 30/@rate; 
                    display: block;
                    text-align: left;
                    line-height: 40/@rate;
                    // border-bottom-width: 10px;
                    // border-bottom-style: solid;
                    .img_box {
                        display: block;
                        width:150/@rate;
                        height: 150/@rate;
                        img {
                            width:100%;
                            height: 150/@rate;
                        }
                    }
                    .name {
                        width: 355/@rate;
                        margin-left: 25/@rate;
                    }
                    .all {
                        .price {
                            display: block;
                            text-align: right;
                        }
                    }
               }
               .ctr {
                    text-align: left;
                    margin: 0 30/@rate;
                    border-top-width:1px;
                    border-top-style: solid;
                    line-height: 80/@rate;
                    a {
                        display: inline-block;
                        width: 140/@rate;
                        text-align: center;
                        border-width:1px;
                        border-style: solid; 
                        margin-left: 20/@rate;
                        border-top-width:1px;
                        border-top-style: solid;   
                        line-height: 50/@rate; 
                        margin-top: 15/@rate;                    
                    }
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