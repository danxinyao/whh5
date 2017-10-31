//用户中心
import ajax from '../fetch'
import {rootPath} from '../fetch/config'

export default {
    /**
     * 登录
     * @return {[type]}
     */
    login(data, isShowFullLoading = true) {
        return ajax({
                url: '/oauth2/token',
                formJson: false,
                method: 'post',
                body: data,
                headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
                path: rootPath.substring(0, rootPath.length - 4),
                isShowFullLoading
            })
    },    
    /**
     * 忘记密码，重新设置密码
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    resetUserPwd(data, isShowFullLoading = true) {
        return ajax({
            url: '/UserCenter/ResetUserPwd',
            method: 'post',
            body: data,
            isShowFullLoading
        })
    },
    /**
     *用户注册
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    register(data, isShowFullLoading = true) {
        return ajax({
            url: '/Login/UserRegister',
            method: 'post',
            body: data,
            isShowFullLoading
        })
    },     
}