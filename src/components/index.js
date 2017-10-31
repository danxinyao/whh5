// 系统提示框
import hud from './hud/hud.vue'
//确认提示框
import confirm from './confirm/confirm.vue'
// 没有数据时的默认页面
import defaultpage from './defaultPage/defaultPage.vue'
// 页面框架
import aside from './aside/aside.vue'
// 页面框架
import main from './main/index.vue'
// Icon
import icon from './icon/icon.vue'
// 图片
import img from './img/img.vue'
// 底部工具栏
import toolbar from './toolbar/toolbar.vue'
// 按钮
import button from './button/button.vue'
// 多选框
import checkbox from './checkbox/checkbox.vue'
//省市区
import region from './region/region.vue'
// 手势图片
import gestureImg from './gestureImg/gestureImg.vue'
// 导航
import navigation from './navigation/navigation.vue'

const install = Vue => {
	Vue.component(hud.name, hud) // 系统提示信息
	Vue.component(confirm.name, confirm) // 确认提示框
    Vue.component(defaultpage.name, defaultpage) //没有数据时的默认页面
    Vue.component(aside.name, aside) // 主页框架
    Vue.component(main.name, main) // 主页框架
    Vue.component(icon.name, icon) // 图标
    Vue.component(img.name, img) // 图片
    Vue.component(toolbar.name, toolbar) // 底部导航
    Vue.component(button.name, button) //按钮
    Vue.component(checkbox.name, checkbox) //多选框
    Vue.component(region.name, region) //省市区
    Vue.component(gestureImg.name, gestureImg) // 手势图片
    Vue.component(navigation.name, navigation) // 手势图片
}

export default install