<template>
	<div class="listOrder">
		<v-header class="header">
			<p slot="left" class="icon-arrow-back"></p>
			<p slot="title">清单</p>
			<p slot="right" v-show="!showEdit" @click="showCheck">编辑</p>
			<p slot="right" v-show="showEdit" @click="showCheck">取消</p>
		</v-header>
		<div class="list">
			<div class="item" v-for="item in cart">
				<div class="check-wrap">
					<span class="check"  v-show="showEdit" :class="{checked:item.checked}" @click="checkIt(item)"></span>
				</div>
				<div class="goods-wrap">
					<div class="img-wrap">
						<img :src="item.avatar">
					</div>
					<div class="content">
						<p class="title">{{item.name}}</p>
						<p class="person">
							<span>总需：{{item.total}}人次</span>
							<span>剩余：{{item.remain}}人次</span>
						</p>
						<div class="number-wrap">
							<span class="hit">参与人次</span>
							<p class="num-group">
								<span class="sub">-</span>
								<span class="num">{{item.num}}</span>
								<span class="add">+</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pay">
			<div class="pull-right">
				<span>总计{{sorce}}积分</span>
				<p class="red-btn">结算</p>
			</div>
		</div>
		<div class="pay cartEdit" v-show="showEdit">
			<div class="pull-left checkAll">
				<span class="check" :class="{checked:allChecked}"  @click="checkAll"></span>
				<span>全选</span>
			</div>
			<p class="pull-right red-btn" @click="removeCart">删除</p>
		</div>
		<guide></guide>
	</div>
</template>
<script>
import {mapMutations, mapState} from 'vuex'
export default{
  data () {
    return {
      showEdit: false,
      allChecked: false
    }
  },
  computed: {
    ...mapState([
      'cart'
    ]),
    sorce: function () {
      let sum = 0
      if (!this.cart) return 0
      this.cart.forEach(item => {
        sum += item.price * item.num
      })
      return sum
    }
  },
  methods: {
    ...mapMutations([
      'GET_CART',
      'REMOVE_CART'
    ]),
    checkIt (item) {
      item.checked = !item.checked
      let all = this.cart.every(item => {
        return item.checked
      })
      if (all) {
        this.allChecked = true
      } else {
        this.allChecked = false
      }
    },
    checkAll () {
      let that = this
      this.allChecked = !this.allChecked
      this.cart.forEach(item => {
        item.checked = that.allChecked
      })
    },
    showCheck () {
      this.showEdit = !this.showEdit
    },
    removeCart () {
      let list = []
      this.cart.forEach(item => {
        if (item.checked) {
          list.push(item)
        }
      })
      console.log(list)
      this.REMOVE_CART(list)
    }
  },
  created () {
    this.GET_CART()
    this.cart.forEach(item => {
      this.$set(item, 'checked', false)
    })
  }
}
</script>
<style lang="less" scoped>
	.listOrder{
		padding-bottom: 130px;
		height: 100%;
		background-color: #ebebeb;
		.header{
			color:white;
			background-color: #f66;
		}
		.list{
			background-color: white;
			.item{
				display: flex;
				padding: 10px;
				.check-wrap{
					margin-right: 5px;
				}
				.goods-wrap{
					display: flex;
					flex:1;
				}
				.img-wrap{
					padding: 0 5px;
					img{
						height: 96px;
						width: 96px;
					}
				}
				.content{
					flex:1;
					.title{
						font-size: 14px;
						-webkit-line-clamp: 2;
					}
					.person{
						margin-top: 5px;
						font-size: 13px;
						span{
							width: 50%;
						}
					}
					.number-wrap{
						display: flex;
						margin-top: 5px;
						padding-right: 10px;
						font-size: 13px;
						.hit{
							margin-right: 5px;
							line-height: 35px;
						}
						.num-group{
							display: inline-block;
							flex:1;
							border:1px solid #ddd;
							border-radius: 3px;
							.num{
								border-left: 1px solid #ddd;
								border-right:1px solid #ddd;
							}
							.sub,.add,.num{
								display: inline-block;
								text-align: center;
								height: 35px;
								width: 30%;
								line-height: 35px;
							}
						}
					}
				}
			}
		}
		.pay{
			position: fixed;
			left: 0;
			right: 0;
			bottom:55px;
			padding: 15px;
			overflow: hidden;
			font-size: 18px;
			background-color: white;
			p{
				display: inline-block;
				padding: 10px 30px;
				color: white;
				background-color: #f66;
			}
			.red-btn{
				width: auto;
				border:none;
			}
		}
		.check{
			display: inline-block;
            width: 20px;
			height: 20px;
			vertical-align: middle;
			border:1px solid #999;
			border-radius: 50%;
		}
		.cartEdit{
			overflow: hidden;
			.checkAll{
				padding: 10px 0;
			}
		}
		.checked{
			position: relative;
			text-align: center;
			color: white;
			background: #f66;
			border: none;
			&:before{
				content: "√";
				vertical-align: top;
			}
		}
	}

</style>
