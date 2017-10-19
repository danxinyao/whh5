import * as types from '../mutationTypes'
import { basic } from 'services'
// 基础数据
export default {
    // 获取省
    getRegionStates: ({ state, commit }) => {
        const stateList = state.basic.stateList
        if (stateList.length === 0) {
            basic.selectRegionList({
                levelID: 2,
                parentID: '00000000-0000-0000-0000-000000010001'
            }).then((result) => {
                commit(types.GET_REGIONS, result)
            })
        }
    }
}