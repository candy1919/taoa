<template>
	<div class="me">
		<div class="me-container">
			<div class="header">
				<div class="title">
					<i class="icon-msg pull-left"></i>
					<i class="icon-setting pull-right"></i>
				</div>
				<div class="user">
					<div class="avatar-wrap">
						<img class="avatar" :src="avatar">
					</div>
					<p class="name">{{name}}</p>
				</div>
				<div class="balance-wrap">
					<p class="balance">余额：<span class="num">{{score}}</span>积分</p>
					<p class="refill">充值</p>
				</div>
			</div>
			<div class="content-container">
				<div class="content-item">
					<p class="icon-medal text">全部参与记录</p>
					<router-link class="icon-arrow-go go" to="/me/recordList"></router-link>
				</div>
				<div class="content-item">
					<p class="icon-champion text">中奖记录</p>
					<router-link class="icon-arrow-go go" to="/me"></router-link>
				</div>
				<div class="content-item">
					<p class="icon-redpack text">红包</p>
					<router-link class="icon-arrow-go go" to="/me"></router-link>
				</div>
				<div class="content-item">
					<p class="icon-card text">充值记录</p>
					<router-link class="icon-arrow-go go" to="/me"></router-link>
				</div>
			</div>
		</div>
		<transition name="router-slid" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		<guide></guide>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data () {
    return {
      score: '',
      name: '',
      avatar: ''
    }
  },
  methods: {
    ...mapMutations([
      'GET_SCORE'
    ])
  },
  created () {
    let that = this
    this.name = this.$store.state.userInfo
    this.axios.post(this.baseUrl + '/me', {
      name: that.name
    }).then(function (response) {
      that.avatar = response.data.retdata.src
      that.score = response.data.retdata.score
      that.GET_SCORE(that.score)
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>
<style lang="less" scoped>
	.me{
		padding-bottom:55px; 
		height: 100%;
		background-color: #ebebeb;
		.me-container{
			.header{
				color: white;
				background: linear-gradient(to bottom right, white , #f66);
				.title{
					padding: 20px 20px 0 20px;
					overflow: hidden;
					i{
						font-size: 25px;
						color:white;
					}
				}
				.user{
					position: relative;
					top:-15px;
					margin-bottom: 10px;
					.avatar-wrap{
						text-align: center;
						.avatar{
							width: 80px;
							height: 80px;
							border-radius: 50%;
						}
					}
					.name{
						text-align: center;
						color:white;
					}
				}
				.balance-wrap{
					display: flex;
					padding: 10px 15px 5px 15px;
					background-color: rgba(0, 0, 0, 0.5);
					.balance{
						flex:1;
						padding-left: 0;
					}
					.num{
						margin: 0 5px;
						color:#f66;
						font-weight: bold;
					}
					p{
						padding: 5px 10px;	
					}
					.refill{
						color:#f66;
						background-color: white;
						border-radius: 3px;
					}
				}
			}
			.content-container{
				padding: 0 10px;
				background-color: white;
				.content-item{
					display: flex;
					position: relative;
					padding: 10px 0 15px 0;
					&:before{
						content: '';
						position: absolute;
						left: 0;
						top:0;
						width: 100%;
						height: 1px;
						transform:scaleY(.5);
					}
					.text{
						flex:1;
						&:before{
							margin-right:5px;
							font-size:20px;
							 
						}
						&.icon-medal:before{
							color: #f66;
						}
						&.icon-champion:before{
							color:#fead11;
						}
						&.icon-redpack:before{
							color:#f66;
						}
						&.icon-card:before{
							color:#27c4fe;
						}
					}
					.go{
						position: relative;
						top:3px
					}
				}
			}
		}
	}
	.router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter{
    	transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
    .router-slid-leave-to {
        transform: translate3d(-2rem, 0, 0);
        opacity: 0;
    }
</style>
