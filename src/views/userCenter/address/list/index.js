import { userCenter as ajax } from 'services'

export default {
    data() {
        return {
            list: [],
            getListParam: {
                "pageSize": 10,
                "page": 1
            },
            busy: false
        }
    },
    mounted() {
    },
    methods: {
        getList(){
            ajax.queryAddressLists(this.getListParam).then((result)=>{
                console.log(result,2)
                if(result.code == 0){
                    let data = result.data.data;
                    this.getListParam.page++;
                    if(!data || data.length == 0){
                        this.busy = true;
                        return
                    }
                    if(data.length < this.getListParam.pageSize) this.busy = true;
                    this.list = this.list.concat(data);
                }

            })
        }
    }
}