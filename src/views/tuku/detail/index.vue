<template>
    <pg-main base class="tuku">
        <div class="content">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in list.subImageUrls">
                    <pg-img :src="item" w="1500"></pg-img>
                </swiper-slide>                         
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>             
        </div>
        <a href="javascript:void(0)" class="right" @click="shoucang">
            <pg-icon  name="yishoucang" v-if="isMyFavorites" class="font_42"></pg-icon>
            <pg-icon  name="shoucang" class="font_42" v-else></pg-icon>
        </a>                  
    </pg-main>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .tuku {
        background-color: #000;
        .content {
            // padding-top: 220/@rate;
            img {
                display: block;
                width: 100%;
                top: 30%;
                // position: absolute;
                // left: 50%;
                // top: 50%;
                // transform: translate(-50%, -50%);
                // height: 500/@rate;
            }
        }
        .right {
            padding-top: 30/@rate;
            padding-right: 60/@rate;
            i {
                color:red;
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