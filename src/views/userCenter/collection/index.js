import { userCenter as ajax } from 'services'

export default {
    data() {
        return {
            showPic: true,
            designerList: [],
            getDesignerListParam: {
                "pageSize": 10,
                "page": 1
            },
            designerBusy: false,
            picList: [],
            getPicListParam: {
                "pageSize": 10,
                "page": 1
            },
            picBusy: false
        }
    },
    mounted() {

    },
    methods: {
        getDesignerList(){
            ajax.queryDesignerDrawingFavorites(this.getDesignerListParam).then((result)=>{
                console.log(result,1)
                if(result.code == 0){
                    let data = result.data.data;
                    this.getDesignerListParam.page++;
                    if(!data || data.length == 0){
                        this.designerBusy = true;
                        return
                    }
                    if(data.length < this.getDesignerListParam.pageSize) this.designerBusy = true;
                    this.designerList = this.designerList.concat(data);
                }

            })
        },
        getPicList(){
            ajax.queryDecorationEffectFavorites(this.getPicListParam).then((result)=>{
                console.log(result,2)
                if(result.code == 0){
                    let data = result.data.data;
                    this.getPicListParam.page++;
                    if(!data || data.length == 0){
                        this.picBusy = true;
                        return
                    }
                    if(data.length < this.getPicListParam.pageSize) this.picBusy = true;
                    this.picList = this.picList.concat(data);
                    console.log(this.picList)
                }

            })
        },

        onSwipeLeft(e){
            let _target = e.target;
            if(!_target.classList.contains("bd")){
                _target = _target.parentNode;
            }
            _target.querySelector(".cancel").classList.add("active")
        },
        onSwipeRight(e){
            let _target = e.target;
            if(!_target.classList.contains("bd")){
                _target = _target.parentNode;
            }
            _target.querySelector(".cancel").classList.remove("active");
        }
    }
}