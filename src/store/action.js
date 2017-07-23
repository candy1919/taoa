import {getUser} from '../util/axios'
import {GET_USERINFO} from './mutations-types'
export default{
  async getUserInfo ({commit}) {
    let res = await getUser()
    commit(GET_USERINFO, res.data)
  }
}
