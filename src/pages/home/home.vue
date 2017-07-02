<template>
	<div>
		<v-header>
			<p slot="title">积分购</p>
		</v-header>
		<div class="banner">
		    <swiper :options="swiperOption">
		        <swiper-slide v-for="banner in banners.result" :key="banner.id" class="swiper-slide">
		        	<img :src="banner.src">
		        </swiper-slide>
		        <div class="swiper-pagination" slot="pagination"></div>
		    </swiper>
		</div>
		<ul class="sequence">
			<li>默认</li>                         
			<li>销量</li>
			<li>上新</li>
			<li>价格<span class="up">▲</span><span class="down">▼</span></li>
		</ul>
		<div class="list-container" v-if="shoplist.retcode">
			<div class="item" v-for="item in shoplist.data.rows" :key="item.sid">
				<!-- <a href=""> -->
					<div class="img-wrap">
						<img :src="item.cover">
					</div>
					<p class="title">{{item.title}}</p>
				<!-- </a> -->
				<div class="msg">
					<div class="state">
						<p class="hit">开奖进度{{calPercent (item.joinedmember,item.totalmember)}}%</p>
						<p class="progress"><span :style=""></span></p>
					</div>
					<button class="red-btn">+清单</button>
				</div>
			</div>
		</div>
		<guide></guide>
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
      banners: {},
      shoplist: {},
      page: 1
    }
  },
  created () {
    this.$http.get('/home/banner').then(response => {
      this.banners = response.body
    }, response => {
    })
    this.getShopList()
  },
  methods: {
    getShopList () {
      this.$http.get('/home/shoplist', {params: {'page': 1}}).then(response => {
        this.shoplist = response.body
      }, response => {
      })
    },
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
	.sequence{
		display: flex;
		padding: 10px 0;
		text-align: center;
		border-bottom: 1px solid #000;
		li{
			flex:1;
		}
	}
	.list-container{
		.item{
			display: inline-block;
			padding: 10px 10px 15px 10px;
			width: 50%;
			border-right: 1px solid #ddd;
			border-bottom: 1px solid #ddd;
			.img-wrap{
				position: relative;
				width: 100%;
				padding-top: 100%;
				img{
					position: absolute;
					top:0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
				}
			}
			.title{
				position: relative;
				line-height: 1.2em;
				height: 2.4em;
				overflow: hidden;
				&:after{
					position: absolute;
					content: "...";
					bottom: 0;
					right: 0;
				}
				//-webkit-line-clamp:2;
			}
			.msg{
				display: flex;
			    margin-top: 3px;
                font-size: 12px;
				.state{
					flex:1;
					font-size: 0;
					.hit{
						font-size: 12px;
					}
					.progress{
						margin-top: 3px;
						width: 80%;
						height: 6px;
						overflow: hidden;
						background-color: #ddd;
						border-radius: 3px;
						span{
							display: inline-block;
							height: 100%;
							width: 24px;
							background-color: red;
						}
					}
					.red-btn{
						font-size: 13px;
					}
				}
			}
		}
	}
</style>
