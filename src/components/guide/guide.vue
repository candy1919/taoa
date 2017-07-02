<template>
	<div class="guide">
		<a class="item active">
			<i class="icon-home"></i>
			<p>首页</p>
		</a>
		<a class="item">
			<i class="icon-champion"></i>
			<p>最新揭晓</p>
		</a>
		<a class="item">
			<i class="icon-cart"></i>
			<p>清单</p>
		</a>
		<a class="item">
			<i class="icon-user"></i>
			<p>我的</p>
		</a>
	</div>	
</template>
<script>
	export default{

	}
</script>
<style lang="less" scoped>
	.guide{
		display: flex;
		.item{
			flex:1;
			text-align: center;
			i{
				width: 20px;
				height: 20px;
			}
			&.active{
				color:red;
			}

		}
	}
</style>
