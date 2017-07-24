import axios from 'axios'
import { baseUrl } from '../config'
function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + url, params).then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}
export const getUser = () => {
  return fetch('/getUserInfo')
}
export const getGoods = (goodsId) => {
  return fetch('/getGoods', {goodsId})
}

