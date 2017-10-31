import { userCenter as ajax } from 'services'

export default {
    data() {
        return {
            info: {
                address: "",
                linkMan: "",
                mobile: ""
            },
            disable: true
        }
    },
    beforeMount(){
        if(this.$route.query.address){
            this.info = this.$route.query;
            this.disable = false;
        }
    },
    mounted() {

    },
    methods: {
        save(){
            if(this.disable) return;
            this.info.defaultFlag = this.$refs.checkbox.checked ? 1 : 0;
            let data = this.info;
            ajax.saveAddressList(data).then((result)=>{
                if(result.code == 0){
                    this.util.msg.success('保存成功');
                    setTimeout(()=>{
                        this.$router.go(-1);
                    },1000);
                }
            });
        },
        checkValue(){
            if(this.trim(this.info.address) && this.trim(this.info.linkMan) && this.trim(this.info.mobile)){
                this.disable = false;
            } else{
                this.disable = true;
            }
        },
        trim(str){
            return str.replace(/^\s+|\s+$/gm,'');
        }
    }
}