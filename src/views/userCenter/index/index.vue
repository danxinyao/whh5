<template>
    <pg-aside>
        <pg-main class="user" bg-color-base>
            <div class="info bg-color clearfix line-bottom-color">
                <div class="left left_img">
                    <img :src="userInfo.avatar"  alt="">
                </div>
                <div class="left left_text">
                    <div class="text name font_32 title-color">{{userInfo.name}}</div>
                    <!-- <div class="text phone font_20 gray-color">{{userInfo.handlePhone}}</div> -->
                </div>
                <!-- <router-link  class="right link-color font_24" :to="{ path : '/userinfo'}">编辑</router-link> -->
            </div>
            <div class="nav bg-color clearfix">
                <router-link class="item line-bottom-color clearfix" :to="{ path : '/order'}">
                    <pg-icon name="wodedingdan" class="left gray-color font_42"></pg-icon>
                    <span class="left font_28 text-color">我的订单</span>
                    <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                </router-link>
                <router-link class="item line-bottom-color clearfix" :to="{ path : '/favorites'}">
                    <pg-icon name="shoucang" class="left gray-color font_42"></pg-icon>
                    <span class="left font_28 text-color">我的收藏</span>
                    <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                </router-link>
                <router-link class="item line-bottom-color clearfix" :to="{ path : '/addresslist'}">
                    <pg-icon name="shouhuodizhi" class="left gray-color font_42"></pg-icon>
                    <span class="left font_28 text-color">我的地址</span>
                    <pg-icon name="youjiantou" class="right gray-color font_24"></pg-icon>
                </router-link>
            </div>
        </pg-main>
        <pg-toolbar :isActive="3"></pg-toolbar>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .user {
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

        .info {
            padding: 50/@rate 30/@rate;
            border-bottom-style: solid;
            border-bottom-width:10/@rate;
            .left_img {
                width: 115/@rate;
                height: 115/@rate;
                border-radius: 100%;
                overflow: hidden;
                margin-right: 20/@rate;
                img {
                    display: block;
                    width: 100%;
                }
            }
            .text {
                text-align: left;
            }
            .name {
                margin: 25/@rate 0 20/@rate 0;
            }
            a {
                margin-top: 63/@rate;
            }
        }
        .nav {
            // padding-bottom: 100/@rate;
            .item {
                display: block;
                text-align: left;
                line-height: 100/@rate;
                height: 100/@rate;
                padding: 0 30/@rate;
                border-bottom-style: solid;
                border-bottom-width:1px;
                span {
                    margin-left: 20/@rate;
                    display: inline-block;
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