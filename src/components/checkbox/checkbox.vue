<template>
    <label class="pg-checkbox"
            :class="[
                isChecked ? 'primary-color' : 'text-color'
            ]">
        <span class="pg-checkbox_input"
                :class="{
                    'is-checked': isChecked
                }">
            <span class="pg-checkbox_inner">
                    <span class="pg-checkbox-spot primary-bg-color">
                        <pg-icon name="gou" class="white-color font_24"></pg-icon>
                    </span>
            </span>
            <input
                class="pg-checkbox_original"
                type="checkbox"
                name="name"
                :value="label"
                :disabled="disabled"
                v-model="model"
                @change="handleChange"
                @focus="focus = true"
                @blur="focus = false">
        </span>
        <span class="pg-checkbox_label font_28">
            <slot></slot>
        </span>
    </label>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/css/variables';
    .pg-checkbox {
        position: relative;
        cursor: pointer;
        display: inline-block;
        white-space: nowrap;
        & + & {
            margin-left: 30/@rate;
        }
        &_input {
            white-space: nowrap;
            cursor: pointer;
            outline: none;
            display: inline-block;
            line-height: 1;
            position: relative;
            vertical-align: middle;
            &.is-checked .pg-checkbox_inner .pg-checkbox-spot {
                transform: scale(1);
            }
        }
        &_inner {
            display: inline-block;
            position: relative;
            border-width: 1px;
            border-style: solid;
            border-radius: 50%;
            width: 34/@rate;
            height: 34/@rate;
            box-sizing: border-box;
            overflow: hidden;
            z-index: 1;
            .pg-checkbox-spot {
                text-align: center;
                position: absolute;
                left: -1px;
                top: -1px;
                width: 34/@rate;
                height: 34/@rate;
                line-height: 34/@rate;
                border-radius: 50%;
                font-weight: bold;
                transform: scale(0);
                transition: transform .15s cubic-bezier(.71, -.46, .88, .6);
            }
        }
        &_original {
            opacity: 0;
            outline: none;
            position: absolute;
            z-index: -1;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: 0;
        }
        &_label {
            vertical-align: middle;
        }
    }
</style>
<script type="text/babel">
    import Emitter from '../../util/emitter.js'

    export default {
        name: 'PgCheckbox',
        mixins: [Emitter],
        props: {
            value: {},
            label: {},
            indeterminate: Boolean,
            disabled: Boolean,
            checked: Boolean,
            name: String,
            trueLabel: [String, Number],
            falseLabel: [String, Number]
        },
        data() {
            return {
                selfModel: false,
                focus: false
            }
        },
        computed: {
            model: {
                get() {
                    return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel
                },
                set(val) {
                    if (this.isGroup) {
                        let isLimitExceeded = false

                        if (this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min) {
                            isLimitExceeded = true
                        }
                        if (this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max) {
                            isLimitExceeded = true
                        }
                        if (isLimitExceeded === false) {
                            this.dispatch('PgCheckboxGroup', 'input', [val])
                        }

                    } else if (this.value !== undefined) {
                        this.$emit('input', val)
                    } else {
                        this.selfModel = val
                    }
                }
            },
            isChecked() {
                if ({}.toString.call(this.model) === '[object Boolean]') {
                    return this.model
                } else if (Array.isArray(this.model)) {
                    return this.model.indexOf(this.label) > -1
                } else if (this.model !== null && this.model !== undefined) {
                    return this.model === this.trueLabel
                }
            },
            isGroup() {
                let parent = this.$parent
                while (parent) {
                    if (parent.$options.name !== 'PgCheckboxGroup') {
                        parent = parent.$parent
                    } else {
                        this._checkboxGroup = parent
                        return true
                    }
                }
                return false
            },
            store() {
                return this._checkboxGroup ? this._checkboxGroup.value : this.value
            }
        },
        methods: {
            addToStore() {
                if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
                    this.model.push(this.label)
                } else {
                    this.model = this.trueLabel || true
                }
            },
            handleChange(ev) {
                this.$emit('change', ev)
                if (this.isGroup) {
                    this.$nextTick(_ => {
                        this.dispatch('PgCheckboxGroup', 'change', [this._checkboxGroup.value])
                    });
                }
            }
        },
        created() {
            this.checked && this.addToStore()
        }
    }
</script>