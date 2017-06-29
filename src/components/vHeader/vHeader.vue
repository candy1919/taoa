<template>
	<div class="header">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="middle">
			<slot name="title"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
	export default{}
</script>
<style lang="less" scroped>
	.header{
		display: flex;
		padding: 0 10px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		color: #fff;
		background-color: #f66;
		.left,.right{
			width: 60px;
		}
		.middle{
			flex:1;
			font-size: 18px;
			font-weight: bold;
		}
	}	
</style>
