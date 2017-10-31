<template>
    <pg-aside>
        <pg-main>
            <div class="nav">
                <ul>
                    <li><span :class="{cur:showPic}" @click="showPic=true">图库</span></li>
                    <li><span :class="{cur:!showPic}" @click="showPic=false">设计师</span></li>
                </ul>
            </div>
            <div class="content bg-color">
                <div class="list" v-show="showPic" infinite-scroll-disabled="picBusy" infinite-scroll-distance="50" v-infinite-scroll="getPicList">
                    <ul>
                        <li v-for="(item,index) in picList" :key="item.id">
                            <v-touch class="bd" @panleft="onSwipeLeft(item.id)" @panright="onSwipeRight" :pan-options="{ direction: 'horizontal'}">
                                <img class="lazy-img" v-lazy="item.imgUrl" alt="">
                                <span class="font_30">{{item.name}}</span>
                                <span class="font_24">{{item.desc}}</span>
                                <div class="cancel" :class="{'active' : currentDelItem == item.id}" @click="delFavorite(item.id, 1, index)"><pg-icon name="shoucang" class="right white-color font_42"></pg-icon>取消收藏</div>
                            </v-touch>

                        </li>
                    </ul>
                </div>
                <div class="list" v-show="!showPic" infinite-scroll-disabled="designerBusy" infinite-scroll-distance="50" v-infinite-scroll="getDesignerList">
                    <ul>
                        <li v-for="(item,index) in designerList" :key="item.id">
                            <v-touch class="bd" @panleft="onSwipeLeft(item.id)" @panright="onSwipeRight" :pan-options="{ direction: 'horizontal'}">
                                <img class="lazy-img" v-lazy="item.imgUrl" alt="">
                                <span class="font_30">{{item.name}}</span>
                                <span class="font_24">{{item.desc}}</span>
                                <div class="cancel" :class="{'active' : currentDelItem == item.id}" @click="delFavorite(item.id, 2, index)"><pg-icon name="shoucang" class="right white-color font_42"></pg-icon>取消收藏</div>
                            </v-touch>
                        </li>
                    </ul>
                </div>
            </div>
        </pg-main>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';

    @sprites8_width: 50/@rate;
    @sprites8_height: 300/@rate;

    .nav{
        background: #fff;
        height: 90/@rate;
        padding: 0 30/@rate;
        margin-bottom: 20/@rate;
        border-bottom: 1px solid #eee;
        li{
            float: left;
            width: 50%;
            height: 90/@rate;
        }
        span{
            display: block;
            width: 160/@rate;
            height: 50/@rate;
            margin: 20/@rate auto 0;
            -webkit-border-radius: 25/@rate;
            -moz-border-radius: 25/@rate;
            border-radius: 25/@rate;
            text-align: center;
            line-height: 50/@rate;
            color: #333;
            font-size: 30/@rate;
            &.cur{
                background: #f28300;
                color: #fff;
            }
        }
    }
    .content{
        text-align: left;
        background: #fff;
    }
    .list{
        // padding: 10/@rate 0;
        .bd{
            position: relative;
            width: 100%;
            height: 160/@rate;
            padding: 20/@rate 30/@rate 20/@rate 170/@rate;
            border-bottom: 1px solid #eee;
            overflow: hidden;
        }
        img{
            position: absolute;
            width: 120/@rate;
            height: 120/@rate;
            left: 30/@rate;
            top: 10/@rate;
        }
        span{
            display: block;
            &:nth-child(2){
                padding: 13/@rate 0 16/@rate;
                color: #333
            }
            &:nth-child(3){
                color: #999;
            }
        }
        .cancel{
            position: absolute;
            background: #fa7d1c;
            width: 200/@rate;
            height: 120/@rate;
            right: -200/@rate;
            top: 10/@rate;
            padding-left: 75/@rate;
            -webkit-box-sizing: border-box;
            -webkit-transition: .3s;
            line-height: 120/@rate;
            color: #fff;
            &.active{
                right: 0;
            }
            i::before{
                position: absolute;
                width: 34/@rate;
                height: 30/@rate;
                left: 31/@rate;
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