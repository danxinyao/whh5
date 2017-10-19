export default {
	// 系统配置部分
    maskShow : state => state.sysConfig.mask_show, // 全局的遮罩层的显示隐藏
	isShowHUD : state => state.sysConfig.hud_options.show, // 是否显示系统提示信息
	optionsHUD : state => state.sysConfig.hud_options.options, // 系统提示信息的参数
}