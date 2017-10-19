<template>
    <i 
        class="iconfont" 
        :class="[
            name ? 'icon-weihaiicon_' + name : '',
            place + '-icon'
        ]"
        @click="tap">
    </i>
</template>
<script type="text/babel">
    export default {
        name: 'PgIcon',
        props: {
            name: String,
            place: {
                type: String,
                default: 'left'
            }
        },
        methods: {
            tap() {
                this.$emit('click')
            }
        }
    }
</script>