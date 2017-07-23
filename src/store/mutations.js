import { RECORD_USERINFO, OUT_LOGIN, GET_USERINFO, GET_SCORE, GET_USERID } from './mutations-types'
import {setStore, getStore, delStore} from '../util/util'

export default{
  [RECORD_USERINFO] (state, info) {
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  },
  [OUT_LOGIN] (state) {
    state.login = false
    delStore('user_id')
  },
  [GET_USERID] (state) {
    state.userInfo.user_id = getStore('user_id')
  },
  [GET_SCORE] (state, score) {
    state.score = score
  },
  [GET_USERINFO] (state, info) {
    state.userInfo = info
  }
}
