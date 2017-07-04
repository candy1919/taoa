<template>
	<div class="goods">
		<v-header>
			<p slot="left">》</p>
			<p slot="title">商品详情</p>
			<p slot="right">分享</p>
		</v-header>
		<div class="banner">
		    <swiper :options="swiperOption">
		        <swiper-slide v-for="(src,index) in goodsInf.images" :key="index" class="swiper-slide">
		        	<img :src="src">
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		    </swiper>
		</div>
		<div class="inf">
			<p class="title">
				<span v-if="goodsInf.isshow==0" class="tag">进行中</span>
				<span v-if="goodsInf.isshow==1" class="tag">倒计时</span>
				<span v-if="goodsInf.isshow==2" class="tag">已揭晓</span>
				<span>电源电源电源电源</span>
			</p>
			<!-- 进行中 -->
			<div class="showType" v-if="goodsInf.isshow==0">
				<p>期号:{{goodsInf.periods}}</p>
				<p class="progress">
					<span :style="'width:'+calPercent (goodsInf.joinedmember,goodsInf.totalmember)+'%'"></span>
				</p>
				<p class="number">
					<span class="join">总需{{goodsInf.joinedmember}}人次</span><span class="remain">剩余{{goodsInf.totalmember}}</span>
				</p>
			</div>
			<!-- 倒计时 -->
			<div v-if="goodsInf.isshow==1">
				<p>期号:{{goodsInf.periods}}</p>
				<p class="timer">
                   <span>揭晓倒计时：05:52:13</span>
                </p>
			</div>
			<!-- 已揭晓 -->
			<div v-if="goodsInf.isshow==2">
               <!-- <div class="centent">
                 <div class="Rimg"><img :src="list.wuser.portrait"></div>
                 <div class="Rtxt">
                    <p>获奖者：{{list.wuser.nickname}}</p>
                    <p>用户ID：{{list.wuser.bingocode}}</p>
                    <p>期号：{{list.periods}}</p>
                    <p>本期参与：{{list.wuser.buycount}}人次</p>
                    <p>揭晓时间：{{list.publishtime | dateFormat 'yyyy-MM-dd hh:mm:ss' }}</p>
                 </div>
                </div> -->

               <div class="item v-flexbox">
                    <p class="lucknum v-flexbox-item">幸运号码：12346790</p>
                    <p class="btn">
                       <a class="match-btn">计算详情</a>
                    </p>
               </div>
            </div>
			<div class="inf-item center">
				<router-link :to="{path:'login'}" class="login">登录</router-link>查看记录
			</div>
			<div class="inf-item">
				<p>你参与了：{{goodsInf.buyInfo.buycount}}人次</p>
				<p>夺宝号码:{{goodsInf.buyInfo.buycodes}}</p>
			</div>
		</div>
		<split></split>
		<div class="list-item">
			<p>
				<span>图文详情</span>
				<router-link :to="{path:'grapic'}">WiFi</router-link>
			</p>
			<p>
				<span>图文</span>
				<router-link>WiFi</router-link>
			</p>
		</div>
		<div class="list-item">
			<p>记录</p>
			<div>
				<div>
					<img src="">
				</div>
				<div>
					<p>mingzi</p>
					<p>
						<span>ip</span>
						<span>1ci</span>
					</p>
				</div>
			</div>
		</div>
		<cart></cart>
	</div>	
</template>
<script>
export default{
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      },
      goodsInf: {}
    }
  },
  created () {
    this.$http.get('/goods/detail').then(response => {
      this.goodsInf = response.body.data
    }, response => {
    })
  },
  methods: {
    calPercent (join, total) {
      return ((join / total) * 100).toFixed(0)
    }
  }
}
</script>
<style lang="less" scoped>
	.swiper-slide{
		width: 100%;
		height: 200px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.goods{
		.inf{
			padding: 10px;
			background-color: white;
			.tag{
				padding: 3px;
				color:red;
				border:1px solid red;
			}
			.progress{
				margin-top: 3px;
				width: 100%;
				height: 6px;
				overflow: hidden;
				font-size: 0;
				background-color: #ddd;
				border-radius: 3px;
				span{
					display: inline-block;
					height: 100%;
					width: 24px;
					background-color: red;
				}
			}
			.number{
				padding: 5px 0;
				overflow: hidden;
				.join{
					float: left;
				}
				.remain{
					float: right;
				}
			}
			.showType{
				padding: 5px 0
			}
			.inf-item{
				margin: 10px 0;
				padding: 10px;
				background-color: #ddd;
				.login{
					color:red;
				}
				&.center{
					text-align: center;
				}
				p{
					font-size: 10px;
				}
			}
		}
		.list-item{
			padding: 10px;
			p{
				padding: 5px;
			}
			p:nth-of-type(1){
				border-bottom: 1px solid #ddd;
			}
		}
	}
</style>
