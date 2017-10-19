<template>
    <img :src="this.util.hostUrl() + src">
</template>

<script type="text/babel">
    export default {
        name: 'PgImg',
        props: {
            src: String
        }
    }
</script>