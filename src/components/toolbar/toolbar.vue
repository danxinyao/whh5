<template>
    <div 
        class="pg-toolbar bg-color toolbar-border-top-color"
        :class="[
            maskShow ? 'filter' : 'none_filter'
         ]">
        <ul class="flex-ul">
            <li>
                <router-link 
                    :class="[
                        isActive === 1 ? 'primary-color' : 'gray-color'
                    ]" :to="{path: '/home'}">
                    <pg-icon class="font_46" :name="isActive === 1 ? 'shouye-dianji' : 'shouye-weidianji'"></pg-icon>
                    <span class="title font_20">首页</span>
                </router-link>
            </li>
            <li>
                <router-link 
                    :class="[
                        isActive === 2 ? 'primary-color' : 'gray-color'
                    ]" :to="{path: '/tuku'}">
                    <pg-icon class="font_46" :name="isActive === 2 ? 'tuku-dianji' : 'tuku-weidianji'"></pg-icon>
                    <span class="title font_20">图库</span>
                </router-link>
            </li>
            <li>
                <router-link 
                    :class="[
                        isActive === 3 ? 'primary-color' : 'gray-color'
                    ]" :to="{path: '/user'}">
                    <pg-icon class="font_46" :name="isActive === 3 ? 'wode-dianji' : 'wode-weidianji'"></pg-icon>
                    <span class="title font_20">我的</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-toolbar {
        position: fixed;
        .pxToRem(width, 750);
        height: 98/@rate;
        bottom: 0;
        z-index: 9999;
        border-top-style: solid;
        border-top-width: 1px;
        a {
            position: relative;
            display: block;
            height: 98/@rate;
            line-height: 98/@rate;
            padding: 10/@rate 0;
            i {
                display: block;
                height: 44/@rate;
                line-height: 44/@rate;
            }
            .title {
                display: block;
                height: 34/@rate;
                line-height: 34/@rate;
            }
        }
    }
</style>

<script type="text/babel">

    export default {
        name: 'PgToolbar',
        props: {
            isActive: {
                type: Number,
                default() {
                    return 1
                }
            }
        }     
    }
</script>