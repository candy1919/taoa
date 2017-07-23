<template>
	<div class="listOrder">
		<v-header class="header">
			<p slot="left" class="icon-arrow-back"></p>
			<p slot="title">清单</p>
			<p slot="left" class="icon-arrow-back"></p>
			<p slot="right">编辑</p>
		</v-header>
		<div class="list">
			<div class="item">
				<div class="img-wrap">
					<img>
				</div>
				<div class="content">
					<p class="title">dfadaasfa</p>
					<p class="person">
						<span>总需：8942人次</span>
						<span>剩余：6136人次</span>
					</p>
					<div class="number-wrap">
						<span class="hit">参与人数</span>
						<p class="num-group">
							<span class="sub">-</span>
							<span class="num">234</span>
							<span class="add">+</span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="pay">
			<div class="pull-right">
				<span>总计2345积分</span>
				<p class="red-btn">结算</p>
			</div>
		</div>
		<guide></guide>
	</div>
</template>
<script>
	export default{}
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
	}

</style>
