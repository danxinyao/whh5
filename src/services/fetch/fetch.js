// 引入window.fetch polyfill
import 'whatwg-fetch'
import { rootPath, errHandler } from './config'
import store from '../../vuex'
import actions from '../../vuex/actions'
import cookie from 'js-cookie'
import { cookie_token_name, removeAuthToken } from 'util/auth'

/**
 * 检查ajax返回的状态码,如果为401,则跳转到登录页
 * @param response
 * @returns {*}
 */
const checkStatus = function(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    else if (response.status == 500) {
        const error = new Error('服务器错误')
        error.response = response
        throw error
    }
    else {
        // 如果没有登录,则跳转到登录页面
        if (response.status === 401) {
            removeAuthToken()
            window.location = '/auth'
        }
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};
/**
 * 参数为空时报错
 * @param param {string} 参数名
 */
const throwIfMissing = function(param) {
    throw new Error(param + '不能为空');
};
/**
 *
 * @param url {string}  接口路径,必填
 * @param formJson {boolean} 是否需要转换为json格式
 * @param body {object | array} data,传送给后端的数据
 * @param headers {object} 请求头
 * @param method {string} 请求方法 主要是'get'和'post',默认为get
 * @param path {string} 接口路径,默认为'/Api'
 * @param isShowFullLoading {boolean} 是否显示全屏loading动画,默认为false
 * @param auth {boolean} 是否需要口令
 * @param isShowError {boolean} 是否显示错误信息,默认为true
 * @returns {Promise}
 */
const ajax = ({
    url = throwIfMissing('url'),
    formJson = true,
    body = null,
    headersData = { 'Content-Type': 'application/json; charset=utf-8' },
    method = 'get',
    path = rootPath,
    isShowFullLoading = false,
    auth = false,
    isShowError = true,
}) => {
    let headers = {}
    if (auth) {
        headers = {
            ...headersData,
            Authorization: 'Bearer ' + cookie.get(cookie_token_name)
            // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiI0MjdlNTg0ZS01MTI2LTQ1MTEtYWU2My0wZTY5MzcyZDcyNzkiLCJ1c2VybmFtZSI6InF3ZXIiLCJzY29wZSI6IndlY2hhdCIsImxvZ2luIjoie1wiTWVyY2hhbnRJZFwiOlwiMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMTAxXCIsXCJSb2xlVHlwZVwiOjAsXCJNZW1iZXJTaG9wSWRcIjpudWxsLFwiTG9naW5NZW1iZXJTaG9wSWRcIjpudWxsLFwiTWVtYmVyR3JvdXBJZFwiOm51bGwsXCJMb2dpblwiOlwiMTUwMTE3NjE3MjZcIixcIk5hbWVcIjpcInF3ZXJcIixcIlVzZXJJZFwiOlwiNDI3ZTU4NGUtNTEyNi00NTExLWFlNjMtMGU2OTM3MmQ3Mjc5XCJ9IiwiaXNzIjoibHhYeW1uIiwiYXVkIjoiQW55IiwiZXhwIjoxNTA2Njk5NzY3LCJuYmYiOjE1MDY2NzgxNjd9.OcQgtKOtWHzYe91O5cPbb_ae3agkm5ONAVo4LxxReXM'

        }
    }
    else {
        headers = headersData
    }

    const options = {
        // credentials: 'same-origin', // 发送cookie
        // credentials: 'include', // cross-origin  调试用 上线删
        // withCredentials: true,  // cross-origin cookie  调试用 上线删
        method,
        headers,
    };

    let bodyString = '';
    if (formJson) {
        bodyString = JSON.stringify(body);
    } else {
        bodyString = Object.keys(body).map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(body[key]);
        }).join('&');
    }
    if (bodyString !== 'null') {
        options.body = bodyString;
    }

    if (isShowFullLoading) {
        actions.showHUD(store)
    }
    return new Promise((resolve, reject) => {
        fetch(path + url, options)
            .then(checkStatus)
            .then((response) => response.json())
            .then((result) => {
                if (isShowFullLoading) {
                    actions.hideHUD(store)
                }
                if (!formJson) {
                    resolve(result)
                    return
                }

                // 返回正确数据
                if (result.code === 0) {
                    resolve(result.data)
                }
                else {
                    // 处理后端抛出错误
                    if (result.message == '登录超时') {
                        removeAuthToken()
                        window.location = '/auth'
                    }

                    reject(result.message)
                    if (isShowError) {
                        actions.showHUD(store, {
                            type: 'error',
                            content: result.message
                        })
                    }
                }
            })
            .catch((error) => {
                // 显示错误提示
                if (!formJson) {
                    window.location = '/auth'
                    actions.showHUD(store, {
                        type: 'error',
                        content: '账号或密码错误'
                    })
                }
                else {
                    actions.showHUD(store, {
                        type: 'error',
                        content: error
                    })
                }
            });
    });
};

export default ajax;