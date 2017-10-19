<template>
    <div class="pg-default-page">
        <div class="pg-default-page_icon primary-bg-color" v-if="icon">
            <pg-icon :name="icon" class="white-color font_110"></pg-icon>
        </div>
        <span class="pg-default-page_tip text-color font_28">{{tip || '暂无数据'}}</span>
        <div class="pg-default-page_btns" v-if="btns">
            <pg-button class="primary-color primary-border-color border" @click="goTo(btn)" v-for="(btn, index) of btns" :key="index">{{btn.buttonText}}</pg-button>
        </div>
        <pg-button class="primary-color primary-border-color border" @click="goPath(buttonPath)" v-if="buttonPath">{{buttonText}}</pg-button>
    </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-default-page {
        text-align: center;
        padding: 270/@rate 0;
        &_icon {
            margin: 0 auto;
            width: 180/@rate;
            height: 180/@rate;
            line-height: 180/@rate;
            border-radius: 100%;
            overflow: hidden;
        }
        &_tip {
            display: block;
            padding: 40/@rate 0;
        }
        &_btns {
            a:not(:last-child) {
                margin-right: 20/@rate;
            }
        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgDefaultPage',
        props: {
            icon: String,
            tip: String,
            btns: Array,
            buttonText: String,
            buttonPath: String
        },
        methods: {
            goTo(btn) {
                if (btn.buttonClick) {
                    this.$emit(btn.buttonClick)
                }
                else {
                    this.$router.push(btn.buttonPath)
                }
            },
            goPath(path) {
                this.$router.push(path)
            }
        }
    }
</script>