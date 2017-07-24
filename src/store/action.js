import {getUser, getGoods} from '../util/axios'
import {GET_USERINFO, SET_CART} from './mutations-types'
export default{
  async getUserInfo ({commit}) {
    let res = await getUser()
    commit(GET_USERINFO, res.data)
  },
  async setCart ({commit}, id) {
    let res = await getGoods(id)
    commit(SET_CART, res.data)
  }
}
