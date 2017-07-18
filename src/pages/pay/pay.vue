<template>
	<div  class="pay">
		<form>
			<v-header class="header">
				<p slot="left" class="icon-arrow-back"></p>
				<p slot="title">支付订单</p>
			</v-header>
			<panel class="panel-group" type="fold" :show="true" >
				<div class="panel" slot="title">
					<span>奖品合计</span>
					<span class="icon-arrow-up">566积分</span>
				</div>
				<div class="order-detail" slot="content">
					<p class="hit">注：请确认如下订单明细</p>
					<p class="order-item">
						<span>注：请确认如下订单明细注：请确认如下订单明细请确认如下订单明细请确认如下订单明细</span>
						<span>1234积分</span>
					</p>
					<p class="order-item">
						<span>注：请确认如下订单明细请确认如下订单明细请确认如下订单明细</span>
						<span>1234积分</span>
					</p>
				</div>
			</panel>
			<!-- <panel type="fold"></panel> -->
			<!-- <panel class="panel-group" type="fold" :show="false">
				<div class="panel" slot="title">
					<span>奖品合计</span>
					<span>566积分</span>
				</div>
			</panel> -->
			<split></split>
			<div class="panel-group">
				<div class="panel">
					<span>奖品合计</span>
					<span class="icon-arrow-up">566积分</span>
				</div>
			</div>
			<p class="submit">确认支付</p>
		</form>
		<guide></guide>
	</div>
</template>
<script>
import panel from '../../components/panel/panel'
export default{
  components: {
    panel
  }
}
</script>
<style lang="less" scoped>
	.pay{
		height: 100%;
		padding-bottom: 55px;
		background-color: #ebebeb;
		.header{
			color: #333;
			background-color: white;
			p{
				display: inline-block;
			}
		}
		.panel-group{
			.panel{
				display: flex;
				position: relative;
				padding: 15px 10px;
				background-color: white;
				span:nth-of-type(1){
					flex:1;
					color: #333;
				}
				span:nth-of-type(2){
					color: #888;
				}
				span:after{
					margin-left: 5px;
				}
				&:after{
					position:absolute;
					left: 0;
					bottom: 0;
					content: "";
					width: 100%;
					height: 1px;
					background-color: #d9d9d9;
					transform:scaleY(.5)
				}
			}
			.order-detail{
				margin: 15px;
				padding: 15px;
				background-color: white;
				.hit{
					padding-bottom: 5px;
					font-size: 14px;
					color: #f69f16;
				}
				.order-item{
					display: flex;
					font-size: 12px;
					span:nth-of-type(1){
						flex:1;
						text-overflow:ellipsis;
						white-space: nowrap;
						overflow: hidden;
						text-indent: 1em;
					}
					span:nth-of-type(2){
						margin-left: 10px;
					}
				}
			}
		}
		.submit{
			margin: 30px 10px;
			padding: 10px;
			text-align: center;
			color:white;
			background-color: #f66;
			border-radius: 3px;
		}
	}
</style>
