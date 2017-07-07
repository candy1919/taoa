import { RECORD_USERINFO, OUT_LOGIN } from './mutation-types'
import {setStore, getStore} from '../util/util'

export default{
  [RECORD_USERINFO](state, info){
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  }
}