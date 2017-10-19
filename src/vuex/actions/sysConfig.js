import * as types from '../mutationTypes'

export default {
	/**
	 * [设置遮罩层的显示/隐藏开关]
	 * @param  {[type]} options.commit [description]
	 * @param  {[type]} val            [description]
	 * @return {[type]}                [description]
	 */
	setMaskShow: ({ commit }, val) => {
		commit(types.SYSTEM_MASKSHOW_BY_SET, val)
	},
	/**
	 * [显示系统提示信息]
	 * @param  {[type]} options.commit [description]
	 * @param  {[type]} options        [description]
	 * @return {[type]}                [description]
	 */
	showHUD: ({ commit }, options) => {
		commit(types.SYSTEM_HUD_SHOW, options)
	},
	/**
	 * [关闭系统提示信息]
	 * @param  {[type]} options.commit [description]
	 * @return {[type]}                [description]
	 */
	hideHUD: ({ commit }) => {
		commit(types.SYSTEM_HUD_HIDE)
	}
}