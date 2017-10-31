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
     * 查询订单中心列表-前台  不用
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    queryOrderLists(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/MallOrder/QueryOrderCenter',
            method: 'post',
            body: data,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 查询微官网订单中心
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @param  {Boolean} isShowFullLoading [description]
     * @return {[type]}                    [description]
     */
    queryOrderList(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/MallOrder/QueryMicroOrderCenter',
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
    sendSms(data, isShowFullLoading = true) {
        return ajax({
            url: '/Common/SendSms',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            isShowFullLoading
        })
    },
    /**
     *验证验证码
     * @param  {[type]}  data              [description]
     * @param  {[type]}  data              [description]
     * @return {[type]}                    [description]
     */
    validateCode(data, isShowFullLoading = true) {
        return ajax({
            url: '/Common/ValidateCode',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            isShowFullLoading
        })
    },
    /**
     *修改手机号
     * @param  {[type]}  data              [description]
     * @param  {[type]}  data              [description]
     * @return {[type]}                    [description]
     */
    editUserMobile(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/UserCenter/EditUserMobile?newMobile='+data,
            method: 'post',
            auth,
            isShowFullLoading
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
    /**
     * 删除收藏
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    delFavorites(data, auth = true) {
        return ajax({
            url: '/Favorites/DelFavorites',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth
        })
    },
    // 取消未支付的订单
    cancelUnPayOrder(data, auth = true) {
        return ajax({
            url: '/OrderCreation/CancelUnPayOrder',
            method: 'post',
            body: data,
            auth
        })
    },
    /**
     * 确认收货
     * @param  {Boolean} auth 令牌
     * @param  {id} data 收获地址id
     */
    confirmReceipt(data, auth = true) {
        return ajax({
            url:'/MallOrder/ConfirmReceipt',
            method: 'post',
            auth,
            body: {
                id: data
            },
        })
    },
    /**
     * 收货地址列表
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    queryAddressLists(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/AddressList/QueryAddressLists',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 修改收货地址
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    saveAddressList(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/AddressList/SaveAddressList',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 修改密码
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    editUserPwd(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/UserCenter/EditUserPwd',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth,
            isShowFullLoading
        })
    },
    /**
     * 修改个人资料
     * @param  {[type]}  data              [description]
     * @param  {Boolean} auth              [description]
     * @return {[type]}                    [description]
     */
    editUserInfo(data, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/UserCenter/EditUserInfo',
            method: 'post',
            body: data,
            headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
            formJson: false,
            auth,
            isShowFullLoading
        })
    },
    // 获取支付签名，对prepayId进行签名
    getPaySign(id, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/WechatPay/GetPaySign?prepayId=' + id,
            method: 'get',
            auth,
            isShowFullLoading
        })
    }, 
    // 获取sdk
    getJsSdkPayConfig(url, auth = true, isShowFullLoading = true) {
        return ajax({
            url: '/WechatPay/GetJsSdkPayConfig?url=' + url,
            method: 'get',
            auth,
            isShowFullLoading
        })
    },

    //生成支付订单
    ceneratePayOrder(data, auth = true) {
        return ajax({
            url: '/OrderCreation/GeneratePayOrder',
            method: 'post',
            body: data,
            auth
        })
    },       
}
