<template>
	<div class="winConfirm">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">中奖确认</p>
		</v-header>
		<split></split>
		<div class="container">
			<div class="progress">
				<span class="line"></span>
				<span class="point red"></span>
				<div class="content">
					<p>确认订单 2015-09-01</p>
				</div>
			</div>
			<div class="progress">
				<span class="line"></span>
				<span class="point red"></span>
				<div class="content">
					<p>仓库确认订单 2015-09-01</p>
					<p>创建打包 2015-09-01</p>
					<p>创建发货 2015-09-01</p>
				</div>
			</div>
			<div class="progress">
				<span class="line"></span>
				<span class="point"></span>
				<div class="content">
					<p>等待快递 2015-09-01</p>
					<p>快递收揽 2015-09-01</p>
					<p>快递运送 2015-09-01</p>
					<p>快递转运 2015-09-01</p>
					<p>快递最终站点 2015-09-01</p>
					<p>快递派送 2015-09-01</p>
				</div>
			</div>
			<div class="progress">
				<span class="line"></span>
				<span class="point"></span>
				<div class="content">
					<p>快递派送 2015-09-01</p>
					<p>客户签收 2015-09-01</p>
					<p>奖品活动完成 2015-09-01</p>
				</div>
			</div>
		</div>
		<split></split>
		<div class="container">
			<p class="head">地址信息</p>
			<p class="info">
				<span class="name">姓名</span>
				<span class="phone">123432434</span>
			</p>
			<p class="info-text">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
		</div>
		<split></split>
		<div class="container">
			<p class="head">获奖信息</p>
			<div class="item">
				<div class="avatar-wrap">
					<img :src="item.src">
				</div>
				<div class="content">
					<p class="title">{{item.title}}</p>
					<div class="text">
						<p>
							<span>期&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;&nbsp;</span><span>{{item.issue}}</span>
						</p>
					</div>
					<div class="text">总需{{item.total}}次</div>
					<div class="text">幸运号码：<span class="red">{{item.luckynum}}</span></div>
					<div class="text">参与人数：<span class="red">{{item.join}}</span>人</div>
					<div class="text">
						揭晓时间：{{item.time|formate}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {formateTime} from '@/util/util'
export default{
  data () {
    return {
      item: JSON.parse(sessionStorage.getItem('winData'))
    }
  },
  filters: {
    formate (time) {
      let data = new Date(time)
      return formateTime(data, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>
<style lang="less" scoped>
.winConfirm{
	position: absolute;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	z-index: 5;
	background: #ebebeb;
	.item{
		display: flex;
		align-items: center;
		padding: 20px 15px 10px 0;
		background-color: white;
		.avatar-wrap{
			margin: 0 15px;
			img{
				margin: auto 0;
				width: 60px;
				height: 60px;
			}
		}
		.content{
			flex:1;
			font-size: 14px;
			color: #999;
			background: white;
			.title{
				margin-bottom: 15px;
				font-size: 16px;
				color: black;
				overflow: hidden;
			}
			.text{
				margin-bottom: 5px;
				vertical-align: middle;
			}
		}
	}
	.container{
		padding: 10px;
		background-color: white;
		.progress{
			position: relative;
			padding-bottom: 10px;
			font-size: 12px;
			color: #333;
			&:nth-last-of-type(1){
				.line{
					height: 0;
				}
			}
			.line{
				display: inline-block;
				position: absolute;
				top:0;
				left: 7px;
				height: 100%;
				width: 2px;
				background-color: #e9e9e9;
			}
			.point{
				position: absolute;
				display: inline-block;
				top:0;
				left: 0;
				height: 15px;
				width: 15px;
				border-radius: 50%;
				background-color: white;
				border:1px solid #e9e9e9;
				&.red{
					background-color: #f66;
				}
			}
			.content{
				position: relative;
				margin-left: 30px;
				padding-bottom: 15px;
				&:after{
					content: "";
					position:absolute;
					bottom: 0;
					width: 100%;
					height: 1px;
					background-color: #e9e9e9;
					
				}
			}
		}
		.head{
			position: relative;
			padding-bottom: 10px;
			font-size: 13px;
			&:after{
				content: "";
				position: absolute;
				left: 0;
				bottom: 0;
				height: 1px;
				width: 100%;
				transform:scaleY(.5);
				background-color: #e9e9e9;
			}
		}
		.info{
			margin: 10px 0;
			font-size: 14px;
			.name,.phone{
				display: inline-block;
			}
			.name {
				width: 50%;
			}
		}
		.info-text{
			font-size: 13px;
			color:#999;
		}
	}
}	
</style>
