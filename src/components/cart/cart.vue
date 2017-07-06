<template>
	<div class="cart">
		<!-- <div class="cart-btns"> -->
			<div class="pay">
				<router-link :to="{path:'/pay'}">立即夺宝</router-link>
			</div>
			<div class="add">
				<router-link :to="{path:'/add'}">加入清单</router-link>
			</div>
			<div class="cart-wrap">
				<router-link :to="{path:'/pay'}"><i class="icon-cart"></i></router-link>
			</div>
		<!-- </div> -->
		
	</div>
</template>
<script>
	export default{}
</script>
<style lang="less" scoped>
	.cart{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: white;
		z-index: 10;
		.add,.pay{
			flex:1;
			margin: 10px;
			padding: 10px;
			font-size: 14px;
			text-align: center;
			border-radius: 3px;
		}
		.pay{
			color:white;
			background-color: #f66;
			border:1px solid #f66;
		}
		.add{
			color:#5a5a5a;
			border:1px solid #5a5a5a;
		}
		.cart-wrap{
			margin: 10px;
			i{
				font-size: 30px;
				vertical-align: middle;
			}
		} 
	}
</style>
