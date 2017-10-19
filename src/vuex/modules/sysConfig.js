import * as types from '../mutationTypes'

const state = {
    // 全局的遮罩层的显示隐藏
    mask_show : false,
    // 系统提示信息参数
    hud_options : {
        show: false,
        timers: [],
        options: {}
    }
}

const mutations = {
    /**
     * 设置显示/隐藏全局遮罩层
     */
    [types.SYSTEM_MASKSHOW_BY_SET](state, val) {
        state.mask_show = val
    },
    /**
     * 显示 提示信息
     */
    [types.SYSTEM_HUD_SHOW](state, options = {type: 'loading', content: ''}) {
        let icontype
        let isLoading
        if (options.type == 'success') {
            icontype = 'icon-weihaiicon_zhengquetishi'
            isLoading = false
        } else if (options.type == 'error') {
            icontype = 'icon-weihaiicon_shibaitishi'
            isLoading = false
        } else if (options.type == 'loading') {
            icontype = 'icon-loading'
            isLoading = true
        } else {
            icontype = 'icon-none'
            isLoading = true
        }

        //如果为show，则重置hide时间
        state.hud_options.timers.forEach((timer) => {
            window.clearTimeout(timer)
        })
        state.hud_options.timers = []

        if (!isLoading) {
            const t = setTimeout(() => {
                state.hud_options.show = false
                setTimeout(() => {
                    state.hud_options.options = {}
                }, 300)
            }, state.hud_options.options.showTime || 1000)
            state.hud_options.timers.push(t)
        }

        state.hud_options.show = true
        state.hud_options.options = { type: icontype, content: options.content || '' }
    },
    /**
     * 隐藏 提示信息
     */
    [types.SYSTEM_HUD_HIDE](state) {
        state.hud_options.timers.forEach((timer) => {
            window.clearTimeout(timer)
        })
        state.hud_options.timers = []

        let time = 1500
        if (state.hud_options.options.type == 'icon-loading') {
            time = 500
        }
        const t = setTimeout(() => {
            state.hud_options.show = false
            setTimeout(() => {
                state.hud_options.options = {}
            }, 300)
        }, state.hud_options.options.showTime || time)
        state.hud_options.timers.push(t)
    }
}

export default {
    state,
    mutations
}