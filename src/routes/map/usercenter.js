/*
* @Author: danxinwu
* @Date:   2017-10-10 16:55:59
* @Last Modified by:   danxinwu
* @Last Modified time: 2017-10-17 11:10:17
*/
/**
 * demo
 */
const User = resolve => require(['views/userCenter/index/index.vue'], resolve) // 我的首页
const Order = resolve => require(['views/userCenter/order/list/index.vue'], resolve) // 我的订单列表
const OrderDetail = resolve => require(['views/userCenter/order/detail/index.vue'], resolve) // 我的订单详情
const Collection = resolve => require(['views/userCenter/collection/index.vue'], resolve) // 我的收藏
const UserInfo = resolve => require(['views/userCenter/userInfo/detail/index.vue'], resolve) // 个人资料
const AddressList = resolve => require(['views/userCenter/address/list/index.vue'], resolve) // 收货地址列表
const EditAddress = resolve => require(['views/userCenter/address/edit/index.vue'], resolve) // 编辑收货地址
const AddAddress = resolve => require(['views/userCenter/address/add/index.vue'], resolve) // 新增收货地址
const EditPhoneNumber1 = resolve => require(['views/userCenter/userInfo/editPhoneNumber/step1/index.vue'], resolve) // 更换手机号第一步
const EditPhoneNumber2 = resolve => require(['views/userCenter/userInfo/editPhoneNumber/step2/index.vue'], resolve) // 更换手机号第二步
const EditPassword1 = resolve => require(['views/userCenter/userInfo/editPassword/step1/index.vue'], resolve) // 更换密码第一步
const EditPassword2 = resolve => require(['views/userCenter/userInfo/editPassword/step2/index.vue'], resolve) // 更换密码第二步

export default [
    {
        path: '/user',
        name: 'user',
        component: User,
        meta: {
            title: '我的',
            auth: true
        }
    },
    {
        path: '/order',
        name: 'order',
        component: Order,
        meta: {
            title: '我的订单',
            auth: false
        }
    },
    {
        path: '/orderDetail',
        name: 'orderDetail',
        component: OrderDetail,
        meta: {
            title: '订单详情',
            auth: false
        }
    },
    {
        path: '/collection',
        name: 'collection',
        component: Collection,
        meta: {
            title: '我的收藏',
            auth: false
        }
    },
    {
        path: '/userinfo',
        name: 'userinfo',
        component: UserInfo,
        meta: {
            title: '个人资料',
            auth: false
        }
    },
    {
        path: '/addresslist',
        name: 'addresslist',
        component: AddressList,
        meta: {
            title: '收货地址列表',
            auth: false
        }
    },
    {
        path: '/editaddress',
        name: 'editaddress',
        component: EditAddress,
        meta: {
            title: '编辑收货地址',
            auth: false
        }
    },
    {
        path: '/addaddress',
        name: 'addaddress',
        component: AddAddress,
        meta: {
            title: '新增收货地址',
            auth: false
        }
    },
    {
        path: '/editphonenumber1',
        name: 'editphonenumber1',
        component: EditPhoneNumber1,
        meta: {
            title: '修改手机号',
            auth: false
        }
    },
    {
        path: '/editphonenumber2',
        name: 'editphonenumber2',
        component: EditPhoneNumber2,
        meta: {
            title: '修改手机号',
            auth: false
        }
    },
    {
        path: '/editpassword1',
        name: 'editpassword1',
        component: EditPassword1,
        meta: {
            title: '修改密码',
            auth: false
        }
    },
    {
        path: '/editpassword2',
        name: 'editpassword2',
        component: EditPassword2,
        meta: {
            title: '修改密码',
            auth: false
        }
    }
]