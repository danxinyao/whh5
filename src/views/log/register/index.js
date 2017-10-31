import { auth as ajax, basic } from 'services'

export default {
    data() {
        return {
            form: {
                login: '',
                mobile: '',
                password: '',
                code: '',
                note: '',
                smsType: 3
            },
            sendCodes: {
               mobile: '', 
               smsType: 3
            },
            endTime: 90,
            isSendSMS: true, //可以点击发送按钮                   	
        }
    },
    mounted() {

    },
    methods: {
        //注册
        login() {
            if(this.util.isEmpty(this.form.login)) {
                this.util.msg.error("请输入用户名")
                return
            }
            if(!this.util.isMobile(this.form.mobile)) {
                this.util.msg.error("手机号码格式错误")
                return
            }
            if(this.util.isEmpty(this.form.password)) {
                this.util.msg.error("请输入密码")
                return
            }
            if(this.util.isEmpty(this.form.code)) {
                this.util.msg.error("请输入验证码")
                return
            }                        
            ajax.register(this.form).then((result) => {
                this.util.msg.success('注册成功')
            })
        },
        //发送验证码
        sendCode() {
            if(!this.util.isMobile(this.form.mobile)) {
                this.util.msg.success("手机号码格式错误")
                return
            }
            basic.sendSms(this.form).then((result) => {
                this.util.msg.success('发送成功')
                this.overTime()
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