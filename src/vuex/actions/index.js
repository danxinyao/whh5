import sysConfig from './sysConfig' // 系统配置
import basic from './basic'
import auth from './auth'

export default {
	...sysConfig,
    ...basic,
    ...auth,
}