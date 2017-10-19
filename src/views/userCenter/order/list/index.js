import { userCenter as ajax } from 'services'

export default {
    data() {
        return {
            navActive: 0,
            confirm: {
                title: '提示',
                content: '确定要付款吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            },            
            navList: [
                {
                    name: "全部"
                },
                {
                    name: "待付款"
                }, 
                {
                    name: "待发货"
                },
                {
                    name: "已发货"
                }, 
                {
                    name: "交易完成"
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
            busy: false                    	
        }
    },
    mounted() {
        this.loadmore()
    },
    methods: {
        changeNav(val) {
            console.log(val)
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
        fuKuan(item) {
            this.$refs.confirm.open().then(() => {
                console.log('aaa')
                this.$refs.confirm.close()
            })
        },
        // getOrderList() {
        //     ajax.queryOrderList(this.form).then((result) => {
        //     })
        // },
        //查询
        loadmore() {
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
            })
        },                
    }
}
