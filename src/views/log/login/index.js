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
            //this.util.msg.loading()
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