import { home as ajax } from 'services'
export default {
    data() {
        return {
            swiperOption: { // banner滚动配置
                autoplay: 2000,
                loop: true,
                pagination: '.swiper-pagination',
                //paginationClickable: true,
                paginationType: 'fraction'

            },
            list: {},
            isMyFavorites: false,          	
        }
    },
    mounted() {
        this.getDecorationEffects()
        if (this.util.isLogin()) {
            this.isFavorites()
        }        
    },
    methods: {
        getDecorationEffects() {
            ajax.queryDecorationEffect(this.$route.query.id).then((result) => {
                this.list = result
            })
        },
        // 是否已收藏
        isFavorites() {
            ajax.isFavorites(this.$route.query.id).then((result) => {
                this.isMyFavorites = result
            })
        },
        // 收藏
        shoucang() {
            if(!this.util.isLogin()) {
                this.util.msg.error('请先进行登录！')
                setTimeout(() => {
                    this.$router.push('/auth')
                }, 1000)  
                return
            }
            const ajaxMethod = this.isMyFavorites ? ajax.delFavorites : ajax.addFavorites
            this.util.msg.loading()
            ajaxMethod({
                favoritesData: this.$route.query.id,
                favoritesType: 1 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
            }).then(() => {
                this.util.msg.close()
                this.isMyFavorites = !this.isMyFavorites
            })
        },                 
    }
}