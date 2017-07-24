<template>
	<div class="cart">
		<!-- <div class="cart-btns"> -->
			<div class="pay">
				<router-link :to="{path:'/pay'}">立即夺宝</router-link>
			</div>
			<div class="add">
				<p @click="setCart(goodsId)">加入清单</p>
			</div>
			<div class="cart-wrap">
				<router-link :to="{path:'/pay'}">
				  <i class="icon-cart"></i>
				  <span class="num">{{sum}}</span>
				</router-link>
			</div>
		<!-- </div> -->
		
	</div>
</template>
<script>
import {mapActions, mapState, mapMutations} from 'vuex'
export default{
  props: {
    goodsId: ''
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    sum: function () {
      let num = 0
      this.cart.forEach(item => {
        num += item.num
      })
      return num
    }
  },
  created () {
    this.GET_CART()
  },
  methods: {
    ...mapActions([
      'setCart'
    ]),
    ...mapMutations([
      'GET_CART'
    ])
  }
}
</script>
<style lang="less" scoped>
	.cart{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: white;
		z-index: 10;
		.add,.pay{
			flex:1;
			margin: 10px;
			padding: 10px;
			font-size: 14px;
			text-align: center;
			border-radius: 3px;
		}
		.pay{
			color:white;
			background-color: #f66;
			border:1px solid #f66;
		}
		.add{
			color:#5a5a5a;
			border:1px solid #5a5a5a;
		}
		.cart-wrap{
			margin: 10px;
			i{
				font-size: 30px;
				vertical-align: middle;
			}
			a{
				position: relative;
				.num{
					position: absolute;
					left: 0;
					top:-5px;
					padding: 0 5px;
					color: white;
					font-size: 12px;
					background: #f66;
					border-radius: 50%;
				}
			}
		} 
	}
</style>
