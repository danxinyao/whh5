import { userCenter as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            disable: true,
            psw: "",
            rePsw: ""
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
    confirm(){
        if(this.disable) return;

        let data = {
            "pwd": this.psw,
            "pwdAgain": this.rePsw
        };
        ajax.editUserPwd(data).then((result)=>{
            if(result.code == 0){
            this.util.msg.success('修改成功');
            setTimeout(() => {
                    this.$router.go(-2)
            }, 1000);
            }

        });

    },
    pswInput(){
        if(this.psw.length > 0 && this.rePsw.length > 0) {
            this.disable = false
        }else{
            this.disable = true
        }
    },
    rePswInput(){
        if(this.psw.length > 0 && this.rePsw.length > 0) {
            this.disable = false
        }else{
            this.disable = true
        }
    },
}
}