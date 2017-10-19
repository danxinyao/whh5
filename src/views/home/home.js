import { home as ajax } from 'services' 

export default {
    data() {
        return {
            isActive: 2,
            swiperOption: { // banner滚动配置
                autoplay: 2000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            },
            advertisings: [],
            busy: false,
            effects: [],
            form: {
               condition: {
                    decorationEffectID: 0, //家装0 工装1 全部-1
                    decorationType: '',
                    houseStyleID: '',
                    houseAreaID: '',
                    houseSiteID: '',
                    housePlaceID: '',
                    houseTypeID: '',
                    thumbnailSizeType: 0
               }, 
               pageSize: 15,
               page: 1
            },                    	
        }
    },
    mounted() {
        this.getAdvertisings()
        this.loadmore()
    },
    methods: {
        //回到顶部
        goTop() {
            console.log('k')
            console.log(document.body.scrollTop)
            document.body.scrollTop = 0
        }, 
        //imageUrl
        getAdvertisings() {
            ajax.queryAdvertisings(1).then((result) => {
                this.advertisings =  result
                console.log(result)
            })
        },
        //查询
        loadmore() {
            ajax.queryDecorationEffects(this.form).then((result) => {
                this.effects.push(...result.data)
                if (result.data.length > 0) {
                    this.form.page++
                    if (result.totalCount <= this.effects.length) {
                        this.busy = true
                    }
                    else {
                        this.busy = false
                    }

                } else {
                    this.busy = true
                }                
            })
        }, 
    }
}