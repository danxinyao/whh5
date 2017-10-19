import * as types from '../mutationTypes'
import cookie from 'js-cookie'

const state = {
    authToken: '',
    userInfo: {}
}

const mutations = {
    [types.AUTH](state, token){
        state.authToken = token
        cookie.set('authToken', token)
    },
    [types.CLEAR_AUTH](state) {
        state.authToken = ''
        cookie.remove('authToken')
        cookie.remove('userInfo')
    },
    [types.USER_INFO](state, userInfo) {
        state.userInfo = userInfo
    }
}

console.log(1);

export default{
    state,
    mutations
}