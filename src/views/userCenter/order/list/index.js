import { userCenter as ajax } from 'services'

export default {
    data() {
        return {
            noData: false,
            navActive: 0,
            confirm: {
                title: '提示',
                content: '确定要取消订单吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            },            
            navList: [
                {
                    name: "全部",
                },
                {
                    name: "待付款",
                }, 
                {
                    name: "待发货",
                },
                {
                    name: "已发货",
                }, 
                {
                    name: "交易完成",
                },                                             
            ],
            form: {
               condition: {
                    flag: -1, //订单状态,0:待支付,10:待发货,20:待收货,100:交易成功,97:取消,98:已关闭 ,
                    isRefund: false,
                    sheet: ''
               },
                pageSize: 10,
                page: 1
            },
            orderList: [],
            busy: false,
            cenerForm: {
                id: '',
                payType: 1,
                isWxBrowser: true
            },                                	
        }
    },
    mounted() {
        //this.loadmore()
    },
    methods: {
        changeNav(val) {
            this.navActive = val
            switch(val) 
            { 
                case 0: 
                this.form.condition.flag = -1; 
                break;                
                case 1: 
                this.form.condition.flag = 0; 
                break; 
                case 2: 
                this.form.condition.flag = 10; 
                break; 
                case 3: 
                this.form.condition.flag = 20; 
                break; 
                case 4: 
                this.form.condition.flag = 100; 
                break; 
                default: 
                this.form.condition.flag = -1;  
                break; 
            }
            this.orderList = [] 
            this.form.page = 1
            this.loadmore()
        },
        //付款
        ctrlBtns(item, val) {
            
            //付款
            if(val == 1) {
                this.confirm.content = "确定要付款吗？"
                this.$refs.confirm.open().then(() => {
                    this.$refs.confirm.close()
                    this.cenerForm.id = item.orderId
                    //生成支付订单接口
                    ajax.ceneratePayOrder(this.cenerForm).then((result) => {
                       //let orderId = result.code
                        this.$router.push({
                            path: '/wechatPay',
                            query: {
                                code: result.code, //二维码信息 或 预支付ID
                                orderId: result.id //订单ID ,
                            }
                        })
                    })
                })                

            }
            //取消订单
            if(val == 2) {
                this.confirm.content = "确定要取消订单吗？"
                this.$refs.confirm.open().then(() => {
                    ajax.cancelUnPayOrder({id: item.orderId}).then((result) => {
                        this.$refs.confirm.close()
                        this.util.msg.success('取消订单成功')
                        this.orderList = []
                        this.navActive = 0
                        this.form.page = 1
                        this.form.condition.flag = -1
                        this.loadmore()
                    })                
                })  
            }
            //确认收货
            if(val == 3) {
                this.confirm.content = "确定要收货吗？"
                this.$refs.confirm.open().then(() => {
                    ajax.confirmReceipt(item.orderId).then((result) => {
                        this.$refs.confirm.close()
                        this.util.msg.success('收货成功')
                        this.orderList = []
                        this.navActive = 0
                        this.form.page = 1
                        this.form.condition.flag = -1
                        this.loadmore()
                    })
                })                 
            }                        
        },       
        //查询
        loadmore() {
            this.busy = true
            ajax.queryOrderList(this.form).then((result) => {
                this.orderList.push(...result.data)
                if (result.data.length > 0) {
                    this.form.page++
                    if (result.totalCount <= this.orderList.length) {
                        this.busy = true
                    }
                    else {
                        this.busy = false
                    }

                } else {
                    this.busy = true
                } 
                this.noData = this.orderList.length <= 0                
            })
        },                
    }
}
