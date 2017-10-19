<template>
    <v-touch 
        @panmove="panMove" 
        @panend="panEnd"
        @pinchstart="pinchStart"
        @pinchmove="pinchMove"
        @pinchend="pinchEnd"
        @doubletap="doubleTap"
        :doubletap-options="{intervall: 250}"
        :style="{
                left: imgX + 'px', 
                top: imgY + 'px',
                transform: 'scale('+ imgScale +')'
            }"
        :class="{
                'animate': isDoubleTap
            }"
        class="gesture-img">
        <img src="http://api.sdhongrong.com/Upload/Img/Decoration/086fe1d9-6b4d-4356-a006-0d796c517e42/4e8e222e-44f0-488e-a4f3-1555235f2c9b.jpg?v=1499958199625"></img>
    </v-touch>
</template>

<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .gesture-img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        &.animate {
            transition: transform .2s;
        }
        img {
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>

<script type="text/babel">
    export default {
        name: 'PgGestureImg',
        data() {
            return {
                imgX: 0,
                imgY: 0,
                imgScale: 1.0,
                deltaX: 0,
                deltaY: 0,
                currentScale: 1,
                isDoubleTap: false
            }
        },
        mounted() {
            this.img = this.$refs.gestureImg
        },
        methods: {
            panStart() {

            },
            panMove(e) {
                let dX = this.deltaX + e.deltaX
                let dY = this.deltaY + e.deltaY
                this.imgX = dX
                this.imgY = dY
            },
            panEnd(e) {
                this.deltaX = this.deltaX + e.deltaX
                this.deltaY = this.deltaY + e.deltaY
            },
            pinchStart(e) {
                this.isDoubleTap = false
            },
            pinchMove(e) {
                let scale = this.currentScale + e.scale
                if (scale >= 2.5) {
                    scale = 2.5
                }
                if (scale <= 1.0) {
                    scale = 1.0
                }

                this.imgScale = scale
            },
            pinchEnd(e) {
                this.currentScale = e.scale
            },
            doubleTap(e) {
                this.isDoubleTap = true
                if (this.currentScale > 1.0) {
                    this.currentScale = 1.0
                    this.imgScale = 1.0
                }
                else {
                    console.log('double')
                    this.currentScale = 2.5
                    this.imgScale = 2.5
                }
            }
        }
    }
</script>