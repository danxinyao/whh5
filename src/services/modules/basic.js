import ajax from '../fetch'

export default{
    /**
     * 省市区
     * @param  {string} parentID 上层ID
     * @param  {number} levelID  1国家，2省，3市，4区
     * @return {[array]}          [description]
     */
    selectRegionList(data) {
        return ajax({
            url: '/HomePage/QueryRegions',
            method: 'post',
            body: data
        })
    },
    /**
     * 发送验证码
     * @param  {string} parentID 
     * @param  {number} levelID  
     * @return {[array]
     */
    sendSms(data, isShowFullLoading = true) {
        return ajax({
            url: '/Common/SendSms',
            method: 'post',
            body: data,
            isShowFullLoading
        })
    },
    /**
     * 验证验证码是否正确
     * @param  {string} parentID 
     * @param  {number} levelID  
     * @return {[array]
     */
    validateCode(data, isShowFullLoading = true) {
        return ajax({
            url: '/Common/ValidateCode',
            method: 'post',
            body: data,
            isShowFullLoading
        })
    },    
}