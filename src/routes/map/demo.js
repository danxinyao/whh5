/**
 * demo
 */
const Demo = resolve => require(['views/demo/demo.vue'], resolve) // demo

export default [
    {
        path: '/demo',
        name: 'demo',
        component: Demo,
        meta: {
            title: 'Demo',
            auth: false // 是否需要登录
        }
    }
]