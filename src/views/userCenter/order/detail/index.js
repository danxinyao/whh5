import { userCenter as ajax } from 'services'
export default {
    data() {
        return {
                message: [
                    {
                        text: "已发货",
                        time: "2015-12-02"
                    },
                    {
                        text: "已发货2",
                        time: "2015-12-02"
                    },
                    {
                        text: "已发货3",
                        time: "2015-12-02"
                    },                                        
                ],
            form: {
                login: '111111',
            } ,
            detail: {}      	
        }
    },
    mounted() {
        this.getdetail()
    },
    methods: {
        getdetail() {
            ajax.queryOrderDetail(this.$route.query.id).then((result) => {
                this.detail = result
            })
        } 
    }
}