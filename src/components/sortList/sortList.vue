<template>
	<div>
		<ul class="sequence">
			<li @click="changeTpye(0)">默认</li> 
			<li @click="changeTpye(1)">销量</li>
			<li @click="changeTpye(2)">上新</li>
			<li>价格<span class="up"  @click="changeTpye(3)">▲</span><span class="down"  @click="changeTpye(4)">▼</span></li>
		</ul>
	</div>
</template>
<script>
export default{
  methods: {
    changeTpye (type) {
    }
  }
}
</script>
<style lang="less" scoped>
	.sequence{
		display: flex;
		padding: 10px 0;
		text-align: center;
		border-bottom: 1px solid #000;
		li{
			flex:1;
		}
	}
</style>
