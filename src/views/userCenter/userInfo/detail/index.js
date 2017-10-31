import { mapGetters, mapActions } from 'vuex'
import { userCenter as ajax } from 'services'
import { upload } from 'services'

export default {
    data() {
        return {
            phone: "",
            confirm: {
                title: '提示',
                content: '确定要退出当前登录吗？',
                cancelButtonText: '取消',
                confirmButtonText: '确定'
            },              
        }
    },
    computed: {
        ...mapGetters([
            'userInfo',
        ])
    },
    mounted() {
        this.handlePhone(this.userInfo.phone);
        console.log(this.userInfo)
    },
    methods: {
        ...mapActions([
            'clearAuth',
        ]),            
        handlePhone(phone){
            phone += "";
            this.phone = phone.slice(0,3) + "****" + phone.slice(7);
        },
        // 上传图片
        uploadImage(e) {
            const files = e.target.files
            if (!files) {
                return
            }
            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0) return
            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        upload(file) {
            upload.uploadFile(file, false).then((result) => {
                this.userInfo.avatar = result.filePath;
                let data = {
                    avatar: result.filePath
                };
                ajax.editUserInfo(data).then(result=>{
                   if(result.code == 0){
                        this.util.msg.success('修改成功');
                    }
                });
            })
        },
        exit() {
            this.$refs.confirm.open().then(() => {
                this.clearAuth()
                this.$refs.confirm.close()
                this.util.msg.success('退出成功')
                setTimeout(() => {
                    this.$router.push('/home')
                }, 1000)    
            })            
        }
    }
}