import axios from 'axios'
import { baseUrl } from '../config'
export const getUser = () => {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + '/getUserInfo').then(function (response) {
      resolve(response.data)
    }).catch(function (error) {
      console.log(error)
      reject(error)
    })
  })
}
