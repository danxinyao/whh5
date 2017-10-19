import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            phone: ""
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted() {
        this.handlePhone(this.userInfo.phone);
    },
    methods: {
        handlePhone(phone){
            phone += "";
            this.phone = phone.slice(0,3) + "****" + phone.slice(7);
        }
    }
}