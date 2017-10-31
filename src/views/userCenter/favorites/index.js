import { userCenter as ajax } from 'services'

export default {
    data() {
        return {
            showPic: true,
            currentDelItem: "",
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
        delFavorite(id, type, index){
            let data = {
                "favoritesData": id+"",
                "favoritesType": type
            };
            console.log(data);
            ajax.delFavorites(data).then((result)=>{
                if(result.code == 0){
                    if(type == 1){
                        this.picList.splice(index, 1);
                    }
                    if(type == 2){
                        this.designerList.splice(index, 1);
                    }
                }
            });
        },
        onSwipeLeft(id){
            this.currentDelItem = id;
        },
        onSwipeRight(){
            this.currentDelItem = "";
        }
    }
}