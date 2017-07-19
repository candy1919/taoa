<template>
	<div class="record">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">登录</p>
		</v-header>
		<div class="item-wrap">
			<split></split>
			<div class="item">
				<div class="avatar-wrap">
					<img>
				</div>
				<div class="content">
					<p class="title">标题</p>
					<p><span>期号</span><span>111111</span></p>
					<p class="btn">追加</p>
					<p>总需1000次</p>
					<p>参与人数：10人</p>
					<router-link class="link">查看号码</router-link>
					<p>揭晓时间</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {

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
		background: grey

	}	
</style>
