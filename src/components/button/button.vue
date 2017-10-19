<template>
    <a
        href="javascript:void(0)"
        :disabled="disabled"
        class="pg-btn"
        :class="[
            size ? size : '',
            {
                'disabled': disabled,
                'circle': circle
            }
        ]"
        @click="handleClick"
    >
        <slot></slot>
    </a>
</template>
<script type="text/babel">
    export default {
        name: 'PgButton',
        props: {
            size: {
                type: String,
                default: 'default'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleClick(evt) {
                this.$emit('click', evt)
            }
        }
    }
</script>