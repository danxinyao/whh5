import { home as ajax, basic } from 'services'

export default {
    data() {
        return {
            showSuccess: false,
            form: {
                name: "",
                state: "",
                city: "",
                district: "",
                mobile: "",
                code: "",
                smsType: 3,
                flag: 0
            }, 
            endTime: 90,
            isSendSMS: true, //可以点击发送按钮                              	
        }
    },
    mounted() {

    },
    methods: {
        //发送验证码
        sendCode() {
            if(!this.util.isMobile(this.form.mobile)) {
                this.util.msg.success("手机号码格式错误")
                return
            }
            basic.sendSms(this.form).then((result) => {
                this.util.msg.success('发送成功')
                this.overTime()
            }).catch((error) => {
                this.util.msg.error(error)
            })
        }, 
        //验证短信验证码
        submit() {
            // 验证省市区
            if(this.util.isEmpty(this.form.state) || this.util.isEmpty(this.form.city)) {
                this.util.msg.error('请选择预约地址')
                return
            }
            // 验证内容
            if(this.util.isEmpty(this.form.name)) {
                this.util.msg.error('请填写姓名')
                return
            } 
            //判断手机号码
            if (!this.util.isMobile(this.form.mobile)) {
                this.util.msg.error('手机号码格式错误')
                return
            }
            if (this.util.isEmpty(this.form.code)) {
                this.util.msg.error('请输入手机验证码')
                return
            } 
            //this.util.msg.loading()               
            basic.validateCode(this.form).then((result) => {
                ajax.addSubscribe(this.form).then((result) => {
                    //this.util.msg.close()
                    this.showSuccess = true 
                    setTimeout(() => {
                        this.$router.push('/home')
                    }, 2000)                    
                })
            })
        },               
        //发送短信验证码倒计时
        overTime() {
            this.endTime = 90
            this.isSendSMS = false;
            let time = setInterval(() => {
                if (this.endTime > 0) {
                    this.endTime --;
                } else {
                    clearInterval(time);
                    this.isSendSMS = true;
                    this.endTime = 90;
                }
            }, 1000);
        },         

    }
}