import { userCenter as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            navActive: 0,
            confirm: {
                title: '提示',
                content: '确定要付款吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            },
            navList: [
                {
                    name: "全部"
                },
                {
                    name: "待付款"
                },
                {
                    name: "待发货"
                },
                {
                    name: "已发货"
                },
                {
                    name: "交易完成"
                },
            ],
            userInfo:{
                name: "",
                handlePhone: "",
                avatar: ""
            }
        }
    },
    mounted() {
        this.querys()
    },
    methods: {
        ...mapActions([
            'setUserInfo',
        ]),
        changeNav(val) {
            this.navActive = val
        },
        //查询个人信息
        querys() {
            ajax.queryUser().then((result) => {
                this.setUserInfo(result);
                this.userInfo.name = result.name;
                this.userInfo.avatar = result.avatar;
                this.handlePhone(result.phone);
            })
        },
        fuKuan(item) {
            this.$refs.confirm.open().then(() => {
                console.log('aaa')
                this.$refs.confirm.close()
            })
        },
        handlePhone(phone){
            phone += "";
            this.userInfo.handlePhone = phone.slice(0,3) + "****" + phone.slice(7);
        }
    }
}