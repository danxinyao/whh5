<template>
    <pg-aside>
     
        <pg-main bottom="98" class="tuku bg-color-base" infinite-scroll-disabled="busy" infinite-scroll-distance="form.pageSize" v-infinite-scroll="loadmore">
            <ul class="nav flex-ul bg-color">
                <li>
                    <a href="javascript:void(0)" class="font_30  title-color " :class="[showActive == 0? 'active' : '']" @click="changeNav(0)">家装</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="font_30 title-color" :class="[showActive == 1? 'active' : '']" @click="changeNav(1)">工装</a>
                </li>                
            </ul>
            <ul class="content clearfix bg-color-base"  v-if="!noData">
                 <li v-for="item in drawings" class="bg-color">
                     <router-link :to="{ path : '/designerDetail?id=' + item.designerDrawingID}" class="bg-color">
                         <div class="img_box">
                            <!-- <img class="lazy-img" v-lazy="item.mainImageUrl" v-if="item.mainImageUrl"> -->
                            <pg-img :src="item.mainImageUrl" w="330" h="330"></pg-img>
                         </div>
                         <div class="des clearfix">
                             <div class="left touxiang">
                                <img class="lazy-img" v-lazy="item.designerAvatar" v-if="item.designerAvatar">
                                 <img src="~assets/images/designer_touxiang_01.jpg" v-else alt="">
                             </div>
                             <div class="left cont">
                                 <div class="name font_30 title-color">{{item.designerName}}</div>
                                 <div class="name font_24 disable-color">{{item.name}}</div>
                             </div>
                         </div>
                     </router-link>
                 </li>
             </ul>
            <pg-default-page 
                    icon="wodedingdan" 
                    tip="暂无数据" 
                    v-else>
            </pg-default-page>        
        </pg-main>
        <!-- 底部工具栏 -->
        <pg-toolbar :isActive="0"></pg-toolbar>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .tuku {
        .nav {
            padding: 30/@rate 0;
            li {
                a {
                    width: 160/@rate;
                    margin: 0 auto;
                    display: block;
                    height: 50/@rate;
                    line-height: 50/@rate;
                    //background-color: #f28300;
                    border-radius: 25/@rate;
                    &.active {
                        color: #fff;
                        background-image:linear-gradient( to left, #f28300, #ff7930);
                    }
                }
            }
        }
        .content {
            li {
                margin-bottom: 20/@rate;
                .img_box {
                    height: 420/@rate;
                    img {
                        display: block;
                        width: 100%;
                        height: 420/@rate;
                    }
                }
                .des {
                    padding: 20/@rate 0 30/@rate 0;
                    .touxiang {
                        width: 115/@rate;
                        height: 115/@rate;
                        border-radius: 100%;
                        overflow: hidden;
                        margin-right: 10/@rate;
                        img {
                            display: block;
                            width: 100%;
                        }
                    }
                    .cont {
                        .name {
                            text-align: left;
                            padding: 20/@rate;
                        }
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