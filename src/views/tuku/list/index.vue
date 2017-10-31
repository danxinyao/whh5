<template>
    <!-- 带底部工具栏的写法 -->
    <pg-aside>
        <!-- 内容区域 -->
        <pg-main bottom="98" class="tuku bg-color-base"  infinite-scroll-disabled="busy" infinite-scroll-distance="form.pageSize" v-infinite-scroll="loadmore">
            <ul class="nav_title flex-ul bg-color">
                <li>
                    <a href="javascript:void(0)" class="font_30 title-color" :class="[FirstActive == 1? 'active' : '']" @click="changeFirst(1)">家装</a>
                </li>
                <li>
                    <a href="javascript:void(0)" class="font_30 title-color" :class="[FirstActive == 2 ? 'active' : '']" @click="changeFirst(2)">工装</a>
                </li>                
            </ul>
            <ul class="nav flex-ul bg-color">
                <li v-for="(item, index) in navType">
                    <a href="javascript:void(0)" @click="changeNavType(index)" :class="[navTypeActive == index ? 'active' : '']" class="font_30 text-color">{{item.name}}<pg-icon name="xiala" class="title-color font_26"></pg-icon></a>
                </li>               
            </ul>            
            <div class="nav_content clearfix bg-color" v-if="showThree">
                <a href="javascript:void(0)" class="left font_24 text-color bg-color-base" :class="[activeIndex == index ? 'active' : '']" @click="navChange(index, item)" v-for="(item, index) in navList">{{item.text}}</a>
            </div>            
            <ul class="content clearfix" v-if="!noData">
                 <li class="left toolbar-border-color" v-for="item in effects">
                     <router-link :to="{ path : '/tukuDetail?id=' + item.id}" class="bg-color">
                        <pg-img :src="item.mainImageUrl" w="330" h="330"></pg-img>
                         <!-- <img src="~assets/images/meitu_list_01.jpg" alt=""> -->
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
        <pg-toolbar :isActive="2"></pg-toolbar>
    </pg-aside>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .tuku {
        .nav_title {
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
        .nav {
            padding: 0 28/@rate;
            border-bottom: 1px solid #eee;
            li {
                max-width: 172/@rate;
            }
            a {
                line-height: 70/@rate;
                position: relative;
                display: block;
                width: 100%;
                border-bottom: 2px solid transparent;
                i {
                    position: absolute;
                    margin-left: 5/@rate;
                }
            }
            .active {
                border-bottom: 2px solid #f28300;
                color:#f28300;
                i {
                    color:#f28300;
                }
            }
        }
        .nav_content {
             padding: 28/@rate;
             font-size: 0;
             position: absolute;
             z-index: 1;
            a {
                width:220/@rate;
                height: 60/@rate;
                margin-right: 17/@rate;
                margin-bottom: 18/@rate;
                text-align: center;
                line-height: 60/@rate;
                &.active {
                    background-color: #f28300;
                    color:#fff;
                }
                &:nth-of-type(3n) {
                    margin-right: 0;
                }
            }
        }
        .content {
            padding: 0 30/@rate;
            li {
                margin-right: 8/@rate;
                margin-bottom: 5/@rate;
                border-style: solid;
                border-width: 1px;
                font-size: 0;
                &:nth-of-type(2n) {
                    margin-right: 0;
                }
                a {
                    display: block;
                    padding: 3/@rate;
                    img {
                        display: block;
                        height: 330/@rate;
                        width: 330/@rate;
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