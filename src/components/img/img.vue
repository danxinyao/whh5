<template>
    <img class="lazy-img" v-lazy="autoSrc">
</template>

<script type="text/babel">
    export default {
        name: 'PgImg',
        props: {
            src: String,
            w: {
                type: String,
                default: ''
            },
            h: {
                type: String,
                default: ''
            }
        },
        computed: {
            autoSrc() {
                let src = this.src.replace('_300x300', '')
                let suffix = src.substring(src.lastIndexOf('.'), src.length)
                const srcArr = src.split(suffix)
                return srcArr[0] + (this.w == '' ? '' : ('_w' + this.w)) + (this.h == '' ? '' : ('_h' + this.h))  + suffix
            }
        }
    }
</script>