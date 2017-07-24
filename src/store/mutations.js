import { RECORD_USERINFO, OUT_LOGIN, GET_USERINFO, GET_SCORE, GET_USERID,
 GET_CART, SET_CART, REDUCE_CART, REMOVE_CART
} from './mutations-types'
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
  },
  [SET_CART] (state, cart) {
    let goods = state.cart.filter((item) => {
      return item.goodsId === cart.goodsId
    })
    if (!goods.length) {
      cart.num = 1
      state.cart.push(cart)
      console.log(state.cart)
    } else {
      goods[0].num++
    }
    let cartList = JSON.stringify(state.cart)
    setStore('cartList', cartList)
  },
  [GET_CART] (state) {
    state.cart = JSON.parse(getStore('cartList'))
  },
  [REDUCE_CART] (state, cart) {
    let goods = state.cart.filter((item) => {
      return item.goodsId === cart.goodsId
    })
    goods.num--
    if (!goods.num) {
      let index = state.cart.indexOf(goods)
      state.cart.splice(index, 1)
      let cartList = JSON.stringify(state.cart)
      setStore('cartList', cartList)
    }
  },
  [REMOVE_CART] (state, cartList) {
    state.cartList = state.cart.filter(item => {
      cartList.every(value => {
        return item.goodsId !== value.goodsId
      })
    })
    setStore('cartList', state.cartList)
  }
}
