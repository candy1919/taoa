<template>
	<div>
		<v-header>
			<p slot="title">积分购</p>
		</v-header>
		<div class="banner">
			<swipe class="my-swipe">
		      <swipe-item class="slide" v-for="banner in banners.result" :key="banner.id">
		        <img :src="banner.src">
		      </swipe-item>
		    </swipe>
		</div>
		<ul class="sequence">
			<li>默认</li>
			<li>销量</li>
			<li>上新</li>
			<li>价格<span class="up">▲</span><span class="down">▼</span></li>
		</ul>
		<div class="list-container">
			<div class="item">
				<div class="img-wrap">
					<img >
				</div>
				
				<p class="title">标题</p>
				<div class="msg">
					<div class="state">
						<p class="hit">开奖进度</p>
						<p class="progress"><span></span></p>
					</div>
					<button class="red-btn">+清单</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
  data () {
    return {
      banners: {}
    }
  },
  created () {
    this.$http.get('/home/banner').then(response => {
      this.banners = response.body
    }, response => {
    })
  }
}
</script>
<style lang="less" scoped>
	.my-swipe {
      height: 200px;
      color: #fff;
      font-size: 30px;
      text-align: center;
    }
    .slide {
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
			border-right: 1px solid black;
			border-bottom: 1px solid black;
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
				}
			}
			.msg{
				display: flex;
				.state{
					flex:1;
					.progress{
						width: 80%;
						height: 10px;
						overflow: hidden;
						span{
							display: inline-block;
							height: 100%;
							width: 24px;
							background-color: red;
						}
					}
				}
			}
		}
	}
</style>
