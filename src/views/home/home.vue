<template>
    <!-- 带底部工具栏的写法 -->
    <pg-aside>
        <!-- 内容区域 -->
        <pg-main bottom="98" class="home bg-color-base" infinite-scroll-disabled="busy" infinite-scroll-distance="50" v-infinite-scroll="loadmore">
            <div class="banner">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="item in advertisings">
                        <a :href="item.url" >
                            <img :src="item.imageUrl" alt="">
                            <!-- <img src="~assets/images/home_banner_01.jpg" alt=""> -->
                        </a>
                    </swiper-slide>             
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>            
            </div>
            <ul class="nav flex-ul bg-color">
                <li>
                    <router-link 
                        :to="{path: '/reserve'}">
                        <pg-icon class="font_38 primary-color" name="zaixianyuyue"></pg-icon>
                    </router-link>
                    <span class="title font_28 text-color">在线预约</span>
                </li>
                <li>
                    <router-link 
                        :to="{path: '/tuku'}">
                        <pg-icon class="font_38 primary-color" name="tuku-dianji"></pg-icon>
                    </router-link>
                    <span class="title font_28 text-color">图库</span>
                </li>
                <li>
                    <router-link 
                        :to="{path: '/designer'}">
                        <pg-icon class="font_38 primary-color" name="shejishi"></pg-icon>
                    </router-link>
                    <span class="title font_28 text-color">设计师</span>
                </li>
                <li>
                    <a href="http://shop.sdhongrong.com">
                        <pg-icon class="font_38 primary-color" name="shangcheng"></pg-icon>
                    </a>
                    <span class="title font_28 text-color">商城</span>
                </li>                
            </ul>  
            <div class="banner2 bg-color">
                <a href="javascript:void(0)">
                    <img src="~assets/images/home_banner_01.png" alt="">
                </a>                
            </div>                      
            <div class="content bg-color">
                <div class="title gray-color font_28">——<span class="title-color font_32">美图</span>——</div>
                <ul>
                    <li v-for="item in effects">
                        <router-link :to="{ path : '/tukuDetail?id=' + item.id}">
                        <!-- <img class="lazy-img" v-lazy="item.mainImageUrl"> -->
                            <pg-img :src="item.mainImageUrl" w="345" h="210"></pg-img>
                            <span class="name title-color font_30">{{item.name}}</span>
                            <span class="name gray-color font_24">共{{item.subImageUrls.length}}张</span>
                        </router-link>                        
                    </li>
                </ul>
                <a href="javascript:void(0)" class="goTop" v-if="isTapTop">
                    <pg-icon class="font_60 title-color" name="fanhuidingbu" @click="goTop"></pg-icon>
                </a>
            </div>
        </pg-main>  
        <!-- 底部工具栏 -->
        <pg-toolbar :isActive="1"></pg-toolbar>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .home {
        .font_20{
            font-size: 20/@rate;
        }
        .font_24{
            font-size: 24/@rate;
        }
        .font_28{
            font-size: 28/@rate;
        }
        .font_38{
            font-size: 38/@rate;
        }        
        .font_32{
            font-size: 32/@rate;
        }
        .font_42{
            font-size: 42/@rate;
        }        
        .banner {
            a {
                display: inline-block;
                width: 100%;
                height: 400/@rate;
                img {
                    display: inline-block;
                    width: 100%;
                    height: 400/@rate;
                }
            }
        }
        .banner2 {
            padding: 20/@rate 0;
            margin-top: 20/@rate;
            a {
                display: inline-block;
                width: 100%;
                img {
                    display: inline-block;
                    width: 100%;
                }
            }
        }        
        .nav {
            padding:30px;
            a {
                display: block;
                height: 120/@rate;
                width: 120/@rate;
                margin: 0 auto;
                background-color: #f5f5f5;
                border-radius: 50%;
                i {
                    display: block;
                    height: 120/@rate;
                    line-height: 120/@rate;
                    font-size: 60/@rate;
                    //background-image:linear-gradient( to left, #f28300, #ff7930);
                }
            }            
            .title {
                display: block;
                padding-top: 15px;
            }
        }
        .content {
            margin-top: 20/@rate;
            position: relative;
            .title {
                height: 75/@rate;
                line-height: 75/@rate;
                span {
                    padding: 0 25/@rate; 
                }
            }
            .goTop {
                position: absolute;
                width: 80/@rate;
                height: 80/@rate;
                bottom: 120/@rate;
                right: 30/@rate;
                border-radius: 100%;
                border: 1px solid #f5f5f5;
                line-height: 80/@rate;
            }
            ul {
                padding: 0 30/@rate;
                li {
                    padding-bottom: 35/@rate; 
                    a {
                        display: block;
                        img {
                            display: block;
                            width: 690/@rate;
                            height: 420/@rate;
                            margin-bottom: 20/@rate;
                        }
                        .name {
                            display: block;
                            text-align: left;
                            line-height: 45/@rate;
                        }
                    }
                }
            }           
        }
    }

</style>

<script type="text/babel">
    import home from './home'
    export default {
        ...home
    }
</script>