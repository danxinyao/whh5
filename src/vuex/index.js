import promisePolyfill from 'es6-promise'
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import * as types from './mutationTypes'

promisePolyfill.polyfill()
Vue.use(Vuex)

import sysConfig from './modules/sysConfig' //系统配置

export default new Vuex.Store({
	actions,
	getters,
	modules: {
    	sysConfig
	}
})