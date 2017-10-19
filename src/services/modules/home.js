/**
 * 首页
 */

import ajax from '../fetch'

export default{
    /**
     * 首页轮播图
     * @param  {Number} pType 1首页 2商城 3文章
     * @return {Object}       Data
     */
    queryAdvertisings(pType) {
        return ajax({
            url: '/HomePage/QueryAdvertisings?positionType=' + pType,
            method: 'get'
        })
    },
    /**
     * 在线预约
     * @param  {Number}
     * @return {Object}
     */
    addSubscribe(data) {
        return ajax({
            url: '/HomePage/AddSubscribe',
            method: 'post',
            body: data
        })
    },    
    /**
     * 查询设计师图库列表
     * @param  {Number} pType 1首页 2商城
     * @return {Object}       Data
     */
    queryDesignerDrawings(data) {
        return ajax({
            url: '/Designer/QueryDesignerDrawings',
            method: 'post',
            body: data
        })
    },
    /**
     * 查询设计师图库详情
     * @param  {Number} pType 1首页 2商城 3文章
     * @return {Object}       Data
     */
    queryDesignerDrawing(id) {
        return ajax({
            url: '/Designer/QueryDesignerDrawing?id=' + id,
            method: 'get'
        })
    },  
    /**
     * 查询装修效果图列表
     * @param  {Number} pType 1首页 2商城
     * @return {Object}       Data
     */
    queryDecorationEffects(data) {
        return ajax({
            url: '/DecorationEffect/QueryDecorationEffects',
            method: 'post',
            body: data
        })
    },
    /**
     * 查询装修效果图详情
     * @param  {Number} pType 1首页 2商城 3文章
     * @return {Object}       Data
     */
    queryDecorationEffect(id) {
        return ajax({
            url: '/DecorationEffect/QueryDecorationEffect?id=' + id,
            method: 'get'
        })
    },
    //装修户型GET 
    queryHouseTypes() {
        return ajax({
            url: '/DropDownList/GetHouseType',
            method: 'get',
        })
    },

    //装修类型GET /api/DropDownList/GetHouseStyles
    queryHouseStyles() {
        return ajax({
            url: '/DropDownList/GetHouseStyles',
            method: 'get',
        })
    },
    //装修面积
    queryHouseAreas() {
        return ajax({
            url: '/DropDownList/GetHouseAreas',
            method: 'get',
        })
    },
    //装修空间
    queryHousePlaces() {
        return ajax({
            url: '/DropDownList/GetHousePlaces',
            method: 'get',
        })
    },
    //装修场所
    queryHouseSites() {
        return ajax({
            url: '/DropDownList/GetHouseSites',
            method: 'get',
        })
    },
    /**
     * 添加收藏
     * @param {[type]}  data [description]
     * @param {Boolean} auth [description]
     */
    addFavorites(data, auth = true) {
        return ajax({
            url: '/Favorites/AddFavorites',
            auth,
            method: 'post',
            body: data
        })
    },
    /**
     * 删除收藏
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    delFavorites(data, auth = true) {
        return ajax({
            url: '/Favorites/DelFavorites',
            auth,
            method: 'post',
            body: data
        })
    },
    /**
     * 是否已收藏
     * @param  {[type]}  id   [description]
     * @param  {Boolean} auth [description]
     * @return {Boolean}      [description]
     */
    isFavorites(id, auth = true) {
        return ajax({
            url: '/Favorites/IsFavorites?refId=' + id,
            auth,
            method: 'get'
        })
    },                    
}