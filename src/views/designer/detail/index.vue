<template>
    <pg-main base class="tuku">
        <div class="img_box">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in list.subImageUrls">
                    <a href="javascript:void(0)">
                        <img :src="item" alt="">
                        <!-- <img src="~assets/images/home_banner_01.jpg" alt=""> -->
                    </a>
                </swiper-slide>                   
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper> 
        </div>
        <div class="content">
            <div class="item border-color">
                <div class="name white-color font_30 left">{{list.designerName}}</div>
                <a href="javascript:void(0)" class="right" @click="shoucang">
                    <pg-icon  name="yishoucang" v-if="isMyFavorites" class="font_42"></pg-icon>
                    <pg-icon  name="shoucang" class="font_42" v-else></pg-icon>
                </a>                  
            </div>
            <div class="text font_24 gray-color">{{list.designerDesc}}</div>
        </div>
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .tuku {
        background-color: #000;
        .img_box {
            padding-top: 220/@rate;
            a {
                display: block;
                width:100%;            
                height: 500/@rate;
                img {
                    display: block;
                    width: 100%;
                    height: 500/@rate;
                }
            }             
        }
        .content {
            padding:0 30/@rate;
            .item {
                height: 100/@rate;
                line-height: 100/@rate;
                border-bottom: 1px solid #808080;
                a {
                    margin-right: 30/@rate;
                    i {
                        color:red;
                    }
                }
            }
            .text {
                padding-top: 30/@rate;
                text-align: left;
                line-height: 30/@rate;
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