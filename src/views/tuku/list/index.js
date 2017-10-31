import { home as ajax } from 'services'

export default {
    data() {
        return {
            noData: false,
            isActive: 2,
            FirstActive: 1, //家装、工装切换
            navTypeActive: 0, //二级菜单
            activeIndex: 0,//三级菜单
            showThree: false,//是否展示三级菜单
            navType: [],
            navType1: [
                {
                    name: "户型"
                },
                {
                    name: "风格"
                }, 
                {
                    name: "面积"
                },
                {
                    name: "空间"
                }, 
            ],
            navType2: [
                {
                    name: "场所"
                }, 
            ],            
            navList: [                                           
            ],
            form: {
               condition: {
                    decorationEffectID: "", 
                    decorationType: 0,//家装0 工装1 全部-1
                    houseStyleID: '',
                    houseAreaID: '',
                    houseSiteID: '',
                    housePlaceID: '',
                    houseTypeID: '',
                    thumbnailSizeType: 0
               }, 
               pageSize: 10,
               page: 1
            },
            effects: [],
            busy: false                     
        }
    },
    mounted() {
        this.changeFirst(1)
        // this.loadmore()
        this.getQueryHouseTypes()
        //this.getQueryHouseStyles()
    },
    methods: {
        //家装、工装切换
        changeFirst(val) {
            this.FirstActive = val
            this.form.condition.houseStyleID = ""
            this.form.condition.houseAreaID = ""
            this.form.condition.houseSiteID = ""
            this.form.condition.housePlaceID = ""
            this.form.condition.houseTypeID = ""
            if(val == 2) {
                this.navType = this.navType2
                this.queryHouseSites()
            }else {
                this.navType = this.navType1
                this.getQueryHouseTypes() 
            }
            this.navTypeActive = 0 
            this.effects = []
            this.loadmore(this.form)           
        },
        navChange(val, item) {
            this.activeIndex = val
            console.log(val)
            console.log(item)
            this.form.page = 1
            if(this.FirstActive == 2) {
                this.form.condition.decorationType = 1
                this.form.condition.houseSiteID  = item.value
            }else {
                this.form.condition.decorationType = 0
                if(this.navTypeActive == 0) {
                    this.form.condition.houseTypeID = item.value
                } 
                if(this.navTypeActive == 1) {
                    this.form.condition.houseStyleID  = item.value
                } 
                if(this.navTypeActive == 2) {
                    this.form.condition.houseAreaID  = item.value
                } 
                if(this.navTypeActive == 3) {
                    this.form.condition.housePlaceID  = item.value
                } 
            }
            this.effects = []
            this.loadmore(this.form)
            this.showThree = false

        },
        changeNavType(val) {
            this.navTypeActive = val
            this.activeIndex = 0
            this.showThree = true
            if(val == 0 && this.FirstActive == 1) {
                this.getQueryHouseTypes() 
            }
            if(val == 1) {
                this.getQueryHouseStyles()
            }
            if(val == 2) {
                this.getQueryHouseAreas()
            }
            if(val == 3) {
                this.getQueryHousePlaces()
            }
            if(this.FirstActive == 2) {
                this.queryHouseSites() 
            }           
        },
        //查询装修效果列表
        loadmore() {
            //this.effects = []
            this.busy = true
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
                this.noData = this.effects.length <= 0                
            })
        },
        //装修户型
        getQueryHouseTypes() {
            ajax.queryHouseTypes().then((result) => {
                this.navList = result
                this.navList.unshift({
                    text: '不限',
                    value: ''
                })                
            })
        },
        //装修类型
        getQueryHouseStyles() {
            ajax.queryHouseStyles().then((result) => {
                this.navList = result
                this.navList.unshift({
                    text: '不限',
                    value: ''
                })                 
            })
        },
        //装修面积
        getQueryHouseAreas() {
            ajax.queryHouseAreas().then((result) => {
                this.navList = result
                this.navList.unshift({
                    text: '不限',
                    value: ''
                })                 
            })
        },
        //装修空间
        getQueryHousePlaces() {
            ajax.queryHousePlaces().then((result) => {
                this.navList = result
                this.navList.unshift({
                    text: '不限',
                    value: ''
                })                 
            })
        },
        //装修场所
        queryHouseSites() {
            ajax.queryHouseSites().then((result) => {
                this.navList = result
                this.navList.unshift({
                    text: '不限',
                    value: ''
                })                 
            })
        },         
    }
}