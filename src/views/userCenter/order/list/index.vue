<template>
    <pg-main class="order" base   infinite-scroll-disabled="busy" infinite-scroll-distance="20" v-infinite-scroll="loadmore">
        <ul class="nav flex-ul bg-color">
            <li v-for="(item, index) in navList">
                <a href="javascript:void(0)" @click="changeNav(index)" :class="[navActive == index ? 'active' : '']" class="font_30 text-color">{{item.name}}</pg-icon></a>
            </li>               
        </ul>
        <div class="content" v-if="!noData">
            <div class="item bg-color line-bottom-color" v-for="item in orderList">
                <div class="title font_24 clearfix">
                    <div class="left  gray-color">{{item.createTime}}</div>
                    <div class="right  primary-color" v-if="item.flag == 0 && item.refundFlag < 100">等待付款</div>
                    <div class="right  primary-color" v-if="item.flag == 20 && item.refundFlag <= 0">商家已发货</div>
                    <div class="right  primary-color"  v-if="item.flag == 10 && item.refundFlag <= 0">等待商家发货</div>
                    <div class="right  primary-color" v-if="item.refundFlag >= 100 || item.flag == 97 || item.flag == 98">交易关闭</div>
                    <div class="right  primary-color" v-if="item.flag == 100 && item.refundFlag != 10">交易成功</div>
                    <div class="right  primary-color" v-if="item.refundFlag == 10">申请退款中</div>
<!--             <ul class="mainContent flex space_justify" v-for="item in queryOrdersList">
                <li class="des">
                    <div class="top">
                        <a href="javascript:void(0)" v-for="(imgs, index) in item.goodsImageUrls" v-if="index < 4">
                            <img :src="imgs" alt="">
                        </a>
                    </div>
                    <div class="time">{{item.createTime}}</div>
                </li>
                <li>共{{item.totalQty}}件商品</li>
                <li class="price">{{item.totalAmount}}</li>
                <li class="daifukuan">
                    <p v-if="item.flag == 20 && item.refundFlag <= 0">待收货</p>
                    <p v-if="item.flag == 10 && item.refundFlag <= 0">待发货</p>
                    <p v-if="item.flag == 0 && item.refundFlag < 100">待付款</p>
                    <p v-if="item.refundFlag >= 100 || item.flag == 97 || item.flag == 98">交易关闭</p>
                    <p v-if="item.flag == 100 && item.refundFlag != 10">交易成功</p>
                    <p v-if="item.refundFlag == 10">申请退款中</p>
                    <router-link :to="{path: '/orderDetail?mallOrderId='+ item.mallOrderID}" >查看订单</router-link>
                </li>
                <li class="fukuan">
                    <router-link :to="{path: '/application?id=' + item.mallOrderID}" v-if="item.flag == 0 && item.refundFlag < 100">付款</router-link>
                    <a href="javascript:void(0)" v-if="item.flag == 0 && item.refundFlag < 100" @click="cancelUnPayOrder(item)">取消订单</a>
                    <a  href="javascript:void(0)" v-if="item.flag == 20 && item.refundFlag <= 0" @click="flagConfirm(item)">确认收货</a>
                </li>
            </ul> -->                
                </div>
                <a href="javascript:void(0)" class="clearfix middle font_24 text-color  toolbar-border-color" v-for="item1 in item.items">
                    <span class="img_box left">
                        <img class="lazy-img" v-lazy="item1.imgUrl">
                        <!-- <img src="~assets/images/usercenter_order_list_01.jpg"  alt=""> -->
                    </span>
                    <span class="name left">{{item1.goodsName}}</span>
                    <span class="all right">
                        <span class="price">¥ {{item1.realPrice}}</span>
                        <span class="price gray-color">X {{item1.qty}}</span>
                    </span>
                </a>
                <div class="ctr clearfix">
                    <span class="left font_24 primary-color">¥ {{item.totalAmount}}</span>
                    <a href="javascript:void(0)" class="right border-radius font_24 primary-color primary-border-color"  v-if="item.flag == 0 && item.refundFlag < 100" @click="ctrlBtns(item, 1)">付款</a>
                    <a href="javascript:void(0)" class="right border-radius font_24 gray-color border-color" v-if="item.flag == 0 && item.refundFlag < 100" @click="ctrlBtns(item, 2)">取消</a>
                    <a href="javascript:void(0)" class="right border-radius font_24 primary-color primary-border-color" v-if="item.flag == 20 && item.refundFlag <= 0" @click="ctrlBtns(item, 3)">确认收货</a>
                    <router-link :to="{ path : '/orderDetail?id='+ item.orderId}" v-if="item.flag != 0 || item.refundFlag >= 100"  class="right border-radius font_24 gray-color border-color">查看详情</router-link>
                </div>
            </div>
        </div>
        <pg-default-page 
                icon="wodedingdan" 
                tip="暂无数据" 
                v-else>
        </pg-default-page>         
        <pg-confirm ref="confirm" :confirm="confirm"></pg-confirm>                  
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .order {
        .font_20{
            font-size: 20/@rate;
        }
        .font_24{
            font-size: 24/@rate;
        }
        .font_28{
            font-size: 28/@rate;
        }
        .font_32{
            font-size: 24/@rate;
        }
        .font_42{
            font-size: 42/@rate;
        }        
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
                    border-bottom-width: 1px;
                    border-bottom-style: solid;
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
                    //border-top-width:1px;
                    //border-top-style: solid;
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