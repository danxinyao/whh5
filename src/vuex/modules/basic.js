// 基础数据
import * as types from '../mutationTypes'
import cookie from 'js-cookie'

const state = {
    stateList: [], // 省
    companyInfo: {}, //公司信息
}

const mutations = {
    // 保存省数据
    [types.GET_REGIONS] (state, data) {
        state.stateList = data
    },
    //获取公司信息
    [types.GET_COMPANYINFO] (state, data) {
        if (data.securityWebSite) {
            cookie.set('WXB_COMPANYINFO', data)
            state.companyInfo = data
        }
    }
}

export default{
    state,
    mutations
}