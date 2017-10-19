import { userCenter as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'
import auth from "../../../../../vuex/actions/auth";

export default {
    data() {
        return {
            disable: true,
            phone: "",
            code: "",
            message: "获取验证码",
            getCode: true
        }
    },
    computed:{
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted() {

    },
    methods: {
        sendSms(){
            if(!this.getCode) return;
            let data = {
                mobile: this.phone,
                smsType: 3
            };
            ajax.sendSms(data).then(()=>{
                this.getCode = false;
                let time = 90;
                this.message = time + "秒后可获取";
                let countDown = setInterval(()=>{
                    if(time <= 0){
                        clearInterval(countDown);
                        this.getCode = true;
                        this.message = "获取验证码";
                        return
                    }
                    time--;
                    this.message = time + "秒后可获取";
                },1000);
            });
        },
        confirm(){
            if(this.disable) return;

            let data = {
                "mobile": this.userInfo.phone,
                "code": this.code
            };
            ajax.validateCode(data).then(()=>{
                let data = {
                    newMobile: this.phone
                }
                ajax.editUserMobile(data).then(()=>{
                    this.util.msg.success('修改成功')
                    setTimeout(() => {
                        this.$router.push('/user')
                    }, 1000)
                });
            });

        },
        phoneInput(){
            if(this.code.length > 0 && (/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))) {
                this.disable = false
            }else{
                this.disable = true
            }
        },
        codeInput(){
            if(this.code.length > 0 && (/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))) {
                this.disable = false
            }else{
                this.disable = true
            }
        },
    }
}