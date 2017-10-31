import { wxPay as ajax, order } from 'services'

export default {
	data() {
		return {
            cloudOrderID: '',
            payStatus: {
                title: '',
                isSuccess: false,
                btns: []
            },
            btns: [
                {
                    buttonText: '去支付',
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
        if (this.$route.query.cloudOrderID) {
            this.cloudOrderID = this.$route.query.cloudOrderID
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
                ajax.getWxCloudPaySign(this.cloudOrderID).then((result) => {
                    WeixinJSBridge.invoke(
                        'getBrandWCPayRequest', {
                            ...result
                        },
                        (res) => {
                            if (res.err_msg == 'get_brand_wcpay_request:ok') {
                                order.getCloudOrderDetail(this.cloudOrderID).then((result) => {
                                    if (result.orderStatus == 10) {
                                        this.payStatus.title = '支付成功'
                                        this.payStatus.isSuccess = true
                                        this.payStatus.btns = [
                                            {
                                                buttonText: '继续购物',
                                                buttonPath: '/home'
                                            },
                                            {
                                                buttonText: '查看订单',
                                                buttonPath: '/order?flag=10'
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
            }
            else {
                this.payStatus.title = '请在微信环境中使用'
                this.payStatus.isSuccess = false
                this.payStatus.btns = []
            }
        }
	}
}