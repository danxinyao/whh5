import 'whatwg-fetch'
import store from '../../vuex'
import actions from '../../vuex/actions'
import {rootPath} from '../fetch/config.js'

export default{
    uploadFile(file, useWatermark = false) {
        let data = new FormData()
        data.append(file.name, file)
        return new Promise((resolve, reject) => {
            actions.showHUD(store, {
                type: 'loading'
            })
            fetch(rootPath + '/Upload/UploadImg?useWatermark=' + useWatermark, {
                method: 'post',
                headers: {
                    Authorization: 'Bearer ' + store.getters.authToken
                },
                body: data
            })
                .then((response) => response.json())
                .then((result) => {
                    if (result.code === 0 || result.Code === 0) {
                        resolve(result.data)
                    }
                    else {
                        reject(result.message || result.Message)
                        actions.showHUD(store, {
                            type: 'error',
                            content: result.message || result.Message
                        })
                        throw new Error(result.ErrorMessage)
                    }
                    actions.hideHUD(store)
                })
                .catch((error) => {
                    actions.showHUD(store, {
                        type: 'error',
                        content: error.message || error.Message
                    })
                })
        })
    }
}
