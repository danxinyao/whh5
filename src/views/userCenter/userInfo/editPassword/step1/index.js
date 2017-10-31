import { userCenter as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

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
    this.handlePhone(this.userInfo.phone);
},
methods: {
    sendSms(){
        if(!this.getCode) return;
        let data = {
            mobile: this.userInfo.phone,
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
    handlePhone(phone){
        phone += "";
        this.phone = phone.slice(0,3) + "****" + phone.slice(7);
    },
    next(){
        if(this.disable) return;

        let data = {
            "mobile": this.userInfo.phone,
            "code": this.code
        };
        ajax.validateCode(data).then((result)=>{
            this.$router.push({
            path: '/editPassword2',
            query: {

            }
        })
    });

    },
    input(){
        if(this.code.length > 0) {
            this.disable = false
        }else{
            this.disable = true
        }
    }
}
}