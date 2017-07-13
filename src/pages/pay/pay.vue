<template>
	<div  class="pay">
		<form>
			<v-header class="header">
				<p slot="left" class="icon-arrow-back"></p>
				<p slot="title">支付订单</p>
			</v-header>
			<panel class="panel-group" type="fold" :show="true">
				<div class="panel" slot="title">
					<span>奖品合计</span>
					<span class="icon-arrow-up">566积分</span>
				</div>
				<div class="panel" slot="content">
					<span>奖品合计</span>
					<span>566积分</span>
				</div>
			</panel>
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
			background-color: white;
			.panel{
				display: flex;
				position: relative;
				padding: 15px 10px;
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
