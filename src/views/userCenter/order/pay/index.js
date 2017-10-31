import { userCenter as ajax} from 'services'

export default {
	data() {
		return {
            code: '',//预支付id
            payStatus: {
                title: '',
                isSuccess: false,
                btns: []
            },
            btns: [
                {
                    buttonText: '继续支付',
                    buttonPath: '/pay'
                },
                {
                    buttonText: '查看订单',
                    buttonPath: '/order'
                }
            ]
        }
	},
	mounted() {
        //alert(this.$route.query.orderId) //从订单列表传过来的id   
        if (this.$route.query.code) {
            this.code = this.$route.query.code
            this.getWxCloudPaySign()
        }
        else {
            this.$router.push('/home')
        }
	},
	methods: {
        // 获取微信支付签名
        getWxCloudPaySign() {
            if (this.util.isWechat()) {
                ajax.getPaySign(this.code).then((result) => {
                    ajax.getJsSdkPayConfig(location.href.split('#')[0]).then((rs) => {
                        WeixinJSBridge.invoke(
                            'getBrandWCPayRequest', {
                                ...result,
                                appId: rs.appId
                            },
                            (res) => {
                                if (res.err_msg == 'get_brand_wcpay_request:ok') {
                                    ajax.queryOrderDetail(this.$route.query.orderId).then((result) => {
                                        if (result.flag == 10) {
                                            this.payStatus.title = '支付成功'
                                            this.payStatus.isSuccess = true
                                            this.payStatus.btns = [
                                                {
                                                    buttonText: '返回首页',
                                                    buttonPath: '/home'
                                                },
                                                {
                                                    buttonText: '查看订单',
                                                    buttonPath: '/order'
                                                }
                                            ]
                                        }
                                        else {
                                            this.payStatus.title = '出错了'
                                            this.payStatus.isSuccess = false
                                            this.payStatus.btns = [{
                                                buttonText: '查看订单',
                                                buttonPath: '/order'
                                            }]
                                        }
                                    }).catch((error) => {
                                        this.payStatus.title = error
                                            this.payStatus.isSuccess = false
                                            this.payStatus.btns = [{
                                                buttonText: '查看订单',
                                                buttonPath: '/order'
                                            }]
                                    })
                                }
                                else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
                                    this.payStatus.title = '您已取消支付'
                                    this.payStatus.isSuccess = false
                                    this.payStatus.btns = [{
                                        buttonText: '继续支付',
                                        buttonClick: 'continuePay'
                                    }]
                                }
                                else if (res.err_msg == 'get_brand_wcpay_request:fail') {
                                    this.payStatus.title = '支付失败'
                                    this.payStatus.isSuccess = false
                                    this.payStatus.btns = [{
                                        buttonText: '继续支付',
                                        buttonClick: 'continuePay'
                                    }]
                                }
                                else {
                                    this.payStatus.title = res.errMsg
                                    this.payStatus.isSuccess = false
                                    this.payStatus.btns = [{
                                        buttonText: '继续支付',
                                        buttonClick: 'continuePay'
                                    }]
                                }
                            }
                        )
                    }).catch((error) => {
                        this.payStatus.title = error
                        this.payStatus.isSuccess = false
                        this.payStatus.btns = [{
                            buttonText: '继续支付',
                            buttonClick: 'continuePay'
                        }]
                    })
                }).catch((error) => {
                    this.payStatus.title = error
                    this.payStatus.isSuccess = false
                    this.payStatus.btns = [{
                        buttonText: '继续支付',
                        buttonClick: 'continuePay'
                    }]
                })
            }
            else {
                this.payStatus.title = '请在微信环境中使用'
                this.payStatus.isSuccess = false
                this.payStatus.btns = []
            }
        }
	}
}