<template>
	<div  class="home">
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
		<sort-list></sort-list>
		<div class="list-container" v-if="retcode">
			<div class="item" v-for="item in shoplist" :key="item.sid">
				<router-link :to="{path:'goods',query:{sid:item.sid}}">
					<div class="img-wrap">
						<img :src="item.cover">
					</div>
					<p class="title">{{item.title}}</p>
				</router-link>
				<div class="msg">
					<div class="state">
						<p class="hit">开奖进度{{calPercent (item.joinedmember,item.totalmember)}}%</p>
						<p class="progress"><span :style="'width:'+calPercent (item.joinedmember,item.totalmember)+'%'"></span></p>
					</div>
					<button class="red-btn">+清单</button>
				</div>
			</div>
			<div v-if="end">
				已经到最后
			</div>
		</div>
		<div v-else>
          网络出现问题稍后加载		
		</div>
		<guide></guide>
	</div>
</template>
<script>
import sortList from '@/components/sortList/sortList'
export default{
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
      },
      retcode: false,
      banners: {},
      shoplist: [],
      page: 0,
      scroll: true,
      totalPage: 0,
      end: false
    }
  },
  components: {
    sortList
  },
  created () {
    this.$http.get('/home/banner').then(response => {
      this.banners = response.body
    }, response => {
    })
    this.getShopList()
    window.addEventListener('scroll', this.getScrollData)
  },
  methods: {
    getShopList () {
      this.$http.get('/home/shoplist', {params: {'page': this.page + 1}}).then(response => {
        this.page++
        if (this.page === 1) {
          this.shoplist = response.body.data.rows
          this.totalPage = response.body.data.total
        } else {
          this.shoplist = this.shoplist.concat(response.body.data.rows)
        }
        this.scroll = true
        this.retcode = true
      }, response => {
        this.retcode = false
      })
    },
    calPercent (join, total) {
      return ((join / total) * 100).toFixed(0)
    },
    // 滚动加载
    getScrollData () {
      let totalHeight = window.innerHeight + window.scrollY
      if (this.scroll) {
        if (document.body.clientHeight <= totalHeight + 200) {
          this.scroll = false
          if (this.page < this.totalPage) {
            this.getShopList()
          } else {
            this.end = true
          }
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
	// ::-webkit-scrollbar{
	// 	display: none;
	// }
	.swiper-slide{
		width: 100%;
		height: 200px;
		img{
			width: 100%;
			height: 100%;
		}
	}
	.list-container{
		padding-bottom: 60px;
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
