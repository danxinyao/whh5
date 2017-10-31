import { basic as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'PgRegion',
    props: {
        state: {
            type: String,
            default() {
                return ''
            }
        },
        city: {
            type: String,
            default() {
                return ''
            }
        },
        district: {
            type: String,
            default() {
                return ''
            }
        },
        stateName: {
            type: String,
            default() {
                return ''
            }
        },
        cityName: {
            type: String,
            default() {
                return ''
            }
        },
        districtName: {
            type: String,
            default() {
                return ''
            }
        },
        isReturnName: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            stateRegionName: '',
            cityRegionName: '',
            districRegiontName: '',
            stateRegionID: '',
            cityRegionID: '',
            districtRegionID: '',
            cityList: [],
            districtList: [],
            isEdit: false
        }
    },
    computed: {
        ...mapGetters([
            'regionStateList'
        ])
    },
    mounted() {
        this.getRegionStates()
        if (this.state !== '' && this.city !== '' && this.district !== '') {
            this.isEdit = true
            this.getRegions(3, this.state)
            this.getRegions(4, this.city)
        }
    },
    methods: {
        ...mapActions([
            'getRegionStates'
        ]),
        getRegions(levelID = 2, parentID = '00000000-0000-0000-0000-000000010001') {
            ajax.selectRegionList({
                levelID: levelID,
                parentID: parentID
            }).then((result) => {
                if (levelID === 3) {
                    this.cityList = result
                }
                else if (levelID === 4) {
                    this.districtList = result
                    if (this.districtList.length === 0) {
                        this.cityList.forEach((item) => {
                            if (item.value == this.cityRegionID) {
                                this.districtList.push(item)
                            }
                        })
                    }
                }
                this.refreshRegionID()
            })
        },
        refreshRegionID() {
            if (this.isEdit && this.regionStateList.length > 0 && this.cityList.length > 0 && this.districtList.length > 0) {
                this.$nextTick(() => {
                    this.stateRegionID = this.state
                    this.cityRegionID = this.city
                    this.districtRegionID = this.district
                })
            }
        }
    },
    watch: {
        regionStateList() {
            this.refreshRegionID()
        },
        stateRegionID() {
            if ((this.isEdit && this.stateRegionID !== this.state) || !this.isEdit) {
                this.isEdit = false
                this.cityRegionID = ''
                this.cityList = ''
                this.districtRegionID = ''
                this.districtList = []
                this.getRegions(3, this.stateRegionID)
            }
        },
        cityRegionID() {
            if ((this.isEdit && this.cityRegionID !== this.city) || (!this.isEdit && this.cityRegionID !== '')) {
                this.isEdit = false
                this.districtRegionID = ''
                this.districtList = []
                this.getRegions(4, this.cityRegionID)
            }
        },
        districtRegionID() {
            if (this.districtRegionID !== '') {
                this.$emit('update:state', this.stateRegionID)
                this.$emit('update:city', this.cityRegionID)
                this.$emit('update:district', this.districtRegionID)

                if (this.isReturnName) {
                    for (let i = 0; i < this.regionStateList.length; i++) {
                        if (this.regionStateList[i].value === this.stateRegionID) {
                            this.stateRegionName = this.regionStateList[i].text
                        }
                    }

                    for (let i = 0; i < this.cityList.length; i++) {
                        if (this.cityList[i].value === this.cityRegionID) {
                            this.cityRegionName = this.cityList[i].text
                        }
                    }

                    for (let i = 0; i < this.districtList.length; i++) {
                        if (this.districtList[i].value === this.districtRegionID) {
                            this.districRegiontName = this.districtList[i].text
                        }
                    }

                    this.$emit('update:stateName', this.stateRegionName)
                    this.$emit('update:cityName', this.cityRegionName)
                    this.$emit('update:districtName', this.districRegiontName)
                }
            }
        }
    }
}