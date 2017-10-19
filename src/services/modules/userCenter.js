//用户中心
import ajax from '../fetch'

export default {
    /**
     * 获取个人资料
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    queryUser(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/UserCenter/QueryUser',
            method: 'get',
            body: data,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 查询订单中心列表-前台
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    queryOrderList(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/MallOrder/QueryOrderCenter',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 查询订单详情-前台
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    queryOrderDetail(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/MallOrder/QueryOrderDetail?id=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },
    /**
     * 获取验证码
     * @param  {[type]}  data              [description]
     * @param  {[type]}  data              [description]
     * @return {[type]}                    [description]
     */
    sendSms(data) {
        return ajax({
            url: '/Common/SendSms',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false
        })
    },
    /**
     *验证验证码
     * @param  {[type]}  data              [description]
     * @param  {[type]}  data              [description]
     * @return {[type]}                    [description]
     */
    validateCode(data) {
        return ajax({
            url: '/Common/ValidateCode',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false
        })
    },
    /**
     *修改手机号
     * @param  {[type]}  data              [description]
     * @param  {[type]}  data              [description]
     * @return {[type]}                    [description]
     */
    editUserMobile(data) {
        return ajax({
            url: '/UserCenter/EditUserMobile',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: true
        })
    },
    /**
     * 设计师图库收藏列表
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    queryDesignerDrawingFavorites(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Favorites/QueryDesignerDrawingFavorites',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 装修效果图收藏列表
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    queryDecorationEffectFavorites(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/Favorites/QueryDecorationEffectFavorites',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth,
            isShowFullLoading
        })
    },
}