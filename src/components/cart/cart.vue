<template>
	<div class="cart">
		<!-- <div class="cart-btns"> -->
			<div class="pay">
				<router-link :to="{path:'/pay'}">立即夺宝</router-link>
			</div>
			<div class="add">
				<router-link :to="{path:'/pay'}">加入清单</router-link>
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
		.add,.pay{
			flex:1;
			margin: 10px;
			padding: 10px;
			font-size: 14px;
			text-align: center;
			border-radius: 3px;
		}
		.pay{
			color:red;
			border:1px solid red;
		}
		.add{
			color:black;
			border:1px solid black;
		}
		.cart-wrap{
			margin: 10px;
			i{
				font-size: 30px;
			}
		} 
	}
</style>
