import { auth as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            form: {
                username: '13128648607',
                password: '123456',
                grant_type: 'password',
                scope: ['pc']
            }   	
        }
    },
    mounted() {

    },
    methods: {
        ...mapActions([
            'setAuth',
        ]),        
        /**
         * 登录
         */
        login() {
            // if(this.util.isEmpty(this.form.username)) {
            //     this.util.msg.error("请输入用户名")
            //     return
            // } 
            // if(this.util.isEmpty(this.form.password)) {
            //     this.util.msg.error("请输入密码")
            //     return
            // }                         
            ajax.login(this.form).then((result) => {
                if (result) {
                    this.setAuth(result.access_token)
                    this.util.msg.success('登录成功')
                    setTimeout(() => {
                        this.$router.push('/home')
                    }, 1000)                    
                }
            })
        },
        
    }
}