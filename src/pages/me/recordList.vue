<template>
	<div class="record">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">夺宝记录</p>
		</v-header>
		<div class="item-wrap">
			<split></split>
			<div class="item">
				<div class="avatar-wrap">
					<img>
				</div>
				<div class="content">
					<p class="title">标题</p>
					<div class="text">
						<p>
							<span>期&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;&nbsp;</span><span>111111</span>
						</p>
					<span class="btn">追加</span>
					</div>
					<div class="text">总需1000次</div>
					<div class="text">
						<p>参与人数：10人</p>
						<router-link class="link" to="/me">查看号码</router-link>
					</div>
					<div class="text">
						揭晓时间
					</div>
				</div>
			</div>
		</div>
		<div class="item-wrap">
			<split></split>
			<div class="item">
				<div class="avatar-wrap">
					<img>
				</div>
				<div class="content">
					<p class="title">标题</p>
					<div class="text">
						<p>
							<span>期&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;&nbsp;</span><span>111111</span>
						</p>
					<span class="btn">追加</span>
					</div>
					<div class="text progress-wrap">
						<vprogress :joinedmember="20" :totalmember="40"></vprogress>
					</div>
					<div class="text">
						<p>参与人数：10人</p>
						<router-link class="link" to="/me">查看号码</router-link>
					</div>
				</div>
			</div>
		</div>
		<div class="item-wrap">
			<split></split>
			<div class="item">
				<div class="avatar-wrap">
					<img>
				</div>
				<div class="content">
					<p class="title">标题</p>
					<div class="text">
						<p>
							<span>期&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;&nbsp;</span><span>111111</span>
						</p>
					</div>
					<div class="text">
						<p>参与人数：10人</p>
						<router-link class="link" to="/me">查看号码</router-link>
					</div>
					<div class="info">
						<p>获奖者：哎哎哎</p>
						<p>参与人数：20</p>
						<p>幸运号码：123445</p>
						<p>揭晓时间：1111</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import vprogress from '@/components/progress/progress'
export default {
  components: {
    vprogress
  }
}
</script>
<style lang="less" scoped>
	.record{
		position: absolute;
		left:0;
		top:0;
		width: 100%;
		height: 100%;
		z-index: 5;
		// background: grey;
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
				.btn{
					display: inline-block;
					margin-left: 3em;
					padding: 5px 10px;
					color: white;
					background-color: #f66;
					border-radius: 3px;
				}
				.link{
					position: relative;
					top:-2px;
					color: #10aeff
				}
			}
		}
		.progress-wrap{
			width: 60%;
		}
		.info{
			padding: 10px;
			color: #999;
			background-color: #eee;
		}

	}	
</style>
