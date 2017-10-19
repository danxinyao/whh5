<template>
    <section class="pg-main" 
        :class="[
            'bottom_' + parseInt(bottom),
            base ? 'bg-color-base' : 'bg-color'
        ]"
    >
        <slot></slot>
    </section>
</template>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>