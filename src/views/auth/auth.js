import { auth as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'
import { rootPath } from '../../services/fetch/config'

export default {
	data() {
		return {
            form: {
                username: '',
                password: '',
                grant_type: 'password',
                scope: ['wechat']
            }
        }
	},
	mounted() {
        if (this.$route.query.q) {
            this.form.username = this.$route.query.q
            this.login()
        }
        else {
            // this.form.username = 'oWCbQwVWa0h-ieVnBoEJb2iKXOqo'
            // this.login()
            this.mallOpenid()
        }
	},
	methods: {
        ...mapActions([
            'setAuth'
        ]),
        // 获取openid
        mallOpenid() {
            if (this.util.isWechat()) {
                let webSite = window.location.protocol + '//' + window.location.host + '/auth'
                window.location = rootPath + '/WechatAuth/LoginAuth?url=' + webSite
            }
        },
        login() {
            ajax.login(this.form).then((result) => {
                this.setAuth(result.access_token)
                this.$router.push('/home')
            })
        }
	}
}