import cookie from 'js-cookie'

export const cookie_token_name = 'client_authToken'

// 登录token
export const authToken = cookie.get(cookie_token_name) ? cookie.get(cookie_token_name) : ''

// 保存登录token
export const saveAuthToken = (token) => {
	console.log(token)
    cookie.set(cookie_token_name, token)
}

// 删除登录token
export const removeAuthToken = () => {
    cookie.remove(cookie_token_name)
}
