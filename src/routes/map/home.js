/*
* @Author: danxinwu
* @Date:   2017-10-09 11:23:13
* @Last Modified by:   danxinwu
* @Last Modified time: 2017-10-17 10:44:06
*/
const Home = resolve => require(['views/home/home.vue'], resolve) // home
const Auth = resolve => require(['views/auth/auth.vue'], resolve) // 微信授权
const Register = resolve => require(['views/log/register/index.vue'], resolve) //注册
const ForgetPsw = resolve => require(['views/log/ForgetPsw/index.vue'], resolve) //忘记密码
const Tuku = resolve => require(['views/tuku/list/index.vue'], resolve) //图库
const TukuDetail = resolve => require(['views/tuku/detail/index.vue'], resolve) //图库详情
const Designer = resolve => require(['views/designer/list/index.vue'], resolve) //设计师
const DesignerDetail = resolve => require(['views/designer/detail/index.vue'], resolve) //设计师详情
const Reserve = resolve => require(['views/log/reserve/index.vue'], resolve) //在线预约
//const ReserveSuccess = resolve => require(['views/log/reserve/success/index.vue'], resolve) //在线预约


export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: '首页',
            auth: true // 是否需要登录
        }
    },
    {
        path: '/auth',
        name: 'auth',
        component: Auth,
        meta: {
            title: '微信授权登录',
            auth: false 
        }
    }, 
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            title: '注册',
            auth: false 
        }
    }, 
    {
        path: '/forgetPsw',
        name: 'forgetPsw',
        component: ForgetPsw,
        meta: {
            title: '忘记密码',
            auth: false 
        }
    },     
    {
        path: '/tuku',
        name: 'tuku',
        component: Tuku,
        meta: {
            title: '图库',
            auth: true 
        }
    }, 
    {
        path: '/tukuDetail',
        name: 'tukuDetail',
        component: TukuDetail,
        meta: {
            title: '图库详情',
            auth: true 
        }
    },  
    {
        path: '/designer',
        name: 'designer',
        component: Designer,
        meta: {
            title: '设计师',
            auth: true 
        }
    },  
    {
        path: '/designerDetail',
        name: 'designerDetail',
        component: DesignerDetail,
        meta: {
            title: '设计师详情',
            auth: true 
        }
    },  
    {
        path: '/reserve',
        name: 'reserve',
        component: Reserve,
        meta: {
            title: '在线预约',
            auth: true 
        }
    },
    // {
    //     path: '/designerDetail',
    //     name: 'designerDetail',
    //     component: reserve,
    //     meta: {
    //         title: '设计师详情',
    //         auth: false 
    //     }
    // },    
]