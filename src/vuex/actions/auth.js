import * as types from '../mutationTypes.js'

export default {
    setAuth: ({ commit }, token) => {
    commit(types.AUTH, token)
},
clearAuth: ({ commit }) => {
    commit(types.CLEAR_AUTH)
},
setUserInfo: ({ commit }, userInfo) => {
    commit(types.USER_INFO, userInfo)
}
}