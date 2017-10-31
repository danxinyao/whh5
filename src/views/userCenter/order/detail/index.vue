<template>
    <pg-main class="order"> 
        <div class="status bg-color line-bottom-color">
            <div class="item">
                <div class="name font_24 primary-color">订单状态：{{detail.flagDesc}}</div>
                <div class="name font_20 gray-color">订单号：{{detail.sheet}}</div>
                <div class="name font_20 gray-color">下单时间: {{detail.createTime}}</div>
                <pg-icon name="zhuangtai" class="primary-color font_42"></pg-icon>
            </div>
            <div class="item toolbar-border-top-color">
                <div class="name font_24 text-color">收货人：{{detail.linkMan}}<span class="right">{{detail.phone}}</span></div>
                <div class="name font_24 text-color">{{detail.stateName}} {{detail.cityName}} {{detail.districtName}} {{detail.address}}</div>
                <pg-icon name="shouhuodizhi" class="primary-color font_42"></pg-icon>
            </div>            
        </div> 
        <div class="message bg-color line-bottom-color" v-if="detail.deliveryTimeline.length">
            <div class="title font_24 title-color">配送信息</div> 
            <ul>
                <!-- <li v-for="(item,index) in detail.orderFlagTimeline" :key="index"> -->
                <li v-for="(item,index) in detail.deliveryTimeline" :key="index"  :class="{'haveLine' : item.flag != 100}">
                  <div class="text font_20 gray-color" :class="{'textActive': item.hasValue}">{{item.text}}</div>
                  <div class="text time font_20 gray-color" :class="{'textActive': item.hasValue}">{{item.time}}</div>
                  <div class="mask"  :class="{'active' : item.hasValue}">
                    <div class="line"></div>
                    <div class="dot"></div>
                  </div>
                </li>
            </ul>                     
        </div>
        <div class="content">
            <div class="item bg-color line-bottom-color" v-for="item in detail.orderItems">
                <a href="javascript:void(0)" class="clearfix middle font_24 text-color">
                    <span class="img_box left">
                        <!-- <img src="~assets/images/usercenter_order_list_01.jpg"  alt=""> -->
                        <img :src="item.imgUrl"  alt="">
                    </span>
                    <span class="name left">{{item.name}}</span>
                    <span class="all right">
                        <span class="price">¥ {{item.price}}</span>
                        <span class="price gray-color">X {{item.qty}}</span>
                    </span>
                </a>
                <div class="ctr clearfix toolbar-border-top-color">
                    <span class="font_20 primary-color right"><span class="title-color">小计：</span>¥ {{item.actualAmount}}</span>                  
                </div>
            </div>            
        </div>
        <div class="note_content bg-color line-bottom-color">
            <div class="item font_24 text-color clearfix line-bottom-color">
                <div class="left">备注</div>
                <div class="right">{{detail.buyerMemo}}</div>
            </div>
            <div class="item font_24 text-color clearfix line-bottom-color">
                <div class="left">优惠</div>
                <div class="right">-¥ {{detail.discount}}</div>
            </div> 
            <div class="item font_24 text-color clearfix line-bottom-color">
                <div class="left">配送费</div>
                <div class="right">¥ {{detail.installFee}}</div>
            </div>
            <div class="item font_24 title-color clearfix line-bottom-color">
                <div class="left">实付金额</div>
                <div class="right primary-color">¥ {{detail.itemAmount}}</div>
            </div>                                       
        </div> 
        <div class="phone bg-color clearfix">
            <pg-icon name="lianxidianhua" class="link-color font_42"></pg-icon>
            <span class="font_28 title-color">400-0631-400</span>
        </div>              
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
        .status {
            padding:0 30/@rate;
            border-bottom-width: 10/@rate;
            border-bottom-style:solid;            
            .item {
                padding: 30/@rate 0 30/@rate 60/@rate;
                position: relative;
                &:last-child {
                    border-top-width: 1px;
                    border-top-style:solid;
                }
                .name {
                    text-align: left;
                    line-height: 40/@rate;
                }
                i {
                    position: absolute;
                    left: 0;
                    top:50%;
                    margin-top: -21/@rate;
                }
            }
        }
        .message {
            border-bottom-width: 10/@rate;
            border-bottom-style:solid; 
            padding:30/@rate;  
            .title {
                height: 70/@rate;
                line-height: 70/@rate;
                text-align: left;
            }
            ul {
                padding-top: 20/@rate;
                padding-left: 60/@rate;
                li {
                    text-align: left;
                    margin-bottom: 30/@rate;
                    position: relative;
                    &.haveLine {
                        .mask {
                            .line {
                                border-left: 1px solid #1abc8a;
                            }
                        }  
                    }
                    // &:last-of-type {
                    //     .mask {
                    //         .line {
                    //             display: none;
                    //         }
                    //     }
                    // }
                    .text {
                        line-height: 40/@rate;
                    }
                    .textActive {
                        color: #1abc8a;
                    }
                    .mask {
                        width: 15/@rate;
                        height: 35/@rate;
                        top: -30/@rate;
                        left:-40/@rate;
                        &.active {
                            .dot {
                                background-color: #1abc8a;
                            }
                            // .line {
                            //     border-left: 1px solid #1abc8a;
                            // }
                        }
                        .dot {
                            width: 15/@rate;
                            height: 15/@rate;
                            background-color: #dddddd;
                            border-radius: 100%;
                            margin-bottom: 10/@rate;
                            margin-left: -5/@rate;
                            &.active {
                                // background-color: #1abc8a;
                            }
                        }
                        position: absolute;
                        .line {
                            border-left: 1px solid #fff;
                            width: 1px;
                            height: 55/@rate;
                        }
                    }
                }
            }          
        }
        .content {
            .item {
                border-bottom-width:10/@rate;
                border-bottom-style: solid;                 
               .middle {
                    padding: 10/@rate 30/@rate; 
                    display: block;
                    text-align: left;
                    line-height: 40/@rate;
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
               }
            }
        } 
        .note_content {
            padding: 0 30/@rate;
            border-bottom-style:solid;
            border-bottom-width: 10/@rate;            
            .item {
                height: 80/@rate;
                line-height: 80/@rate;
                &:not(:last-child) {
                    border-bottom-style:solid;
                    border-bottom-width: 1px;
                }                
            }
        }  
        .phone {
            height: 80/@rate;
            line-height: 80/@rate;
            i {
                margin-right: 20/@rate;
                vertical-align: middle;
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