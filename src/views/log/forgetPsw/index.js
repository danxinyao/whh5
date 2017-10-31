import { auth as ajax, basic } from 'services'

export default {
    data() {
        return {
            form: {
                mobile: '',
                smsType: 2
            },
            //验证验证码
            validCode: {
                mobile: '',
                code: ''
            },
            //修改后的新密码
            newForm: {
               mobile: '', 
               pwd: '', 
               pwdAgain: '', 
            },
            showNext: false, 
            endTime: 90,
            isSendSMS: true, //可以点击发送按钮                       
        }
    },
    mounted() {

    },
    methods: {
        next() {
            this.queryFact()
            //this.showNext = true
        },
        submit() {
            this.newForm.mobile = this.form.mobile
            //判断两输入密码是否相等
            if(this.util.isEmpty(this.newForm.pwd)) {
                this.util.msg.error('密码不能为空')
                return
            }
            
            if(this.newForm.pwd != this.newForm.pwdAgain) {
                this.util.msg.error('两次密码输入不一致')
                return
           }            
            ajax.resetUserPwd(this.newForm).then((result) => {
                this.util.msg.success('密码设置成功')
                setTimeout(() => {
                    this.$router.push('/home')
                }, 2000)                  
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
        //验证短信验证码
        queryFact() {
            this.validCode.mobile = this.form.mobile
            basic.validateCode(this.validCode).then((result) => {
                this.showNext = true
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
