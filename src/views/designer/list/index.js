import { home as ajax } from 'services'
export default {
    data() {
        return {
            isActive: 2,
            showActive: 0,
            swiperOption: { // banner滚动配置
                autoplay: 2000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            }, 
            form: {
               condition: {
                    decorationType: 0, //家装0 工装1 全部-1
                    name: ''
               }, 
               pageSize: 15,
               page: 1
            },
             drawings: [],
             busy: false    	
        }
    },
    mounted() {
        this.loadmore()
        //this.gertDesignerDrawings()
    },
    methods: {
        changeNav(val) {
            this.form.page = 1
            this.showActive = val
            this.form.condition.decorationType = val
            this.drawings = []
            this.loadmore()
        },
        gertDesignerDrawings() {
            ajax.queryDesignerDrawings(this.form).then((result) => {
                this.drawings = result.data                
            })
        },
        //查询
        loadmore() {
            //this.drawings = []
            ajax.queryDesignerDrawings(this.form).then((result) => {
                this.drawings.push(...result.data)
                if (result.data.length > 0) {
                    this.form.page++
                    if (result.totalCount <= this.drawings.length) {
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