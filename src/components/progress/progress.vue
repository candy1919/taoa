<template>
	<div class="progress">
		<span :style="'width:'+calPercent (joinedmember,totalmember)+'%'"></span>
	</div>
</template>
<script>
export default{
  props: {
    joinedmember: {
      type: Number,
      default: 0
    },
    totalmember: {
      type: Number,
      default: 0
    }
  },
  methods: {
    calPercent (join, total) {
      return ((join / total) * 100).toFixed(0)
    }
  }
}
</script>
<style lang="less" scoped>
.progress{
	margin-top: 3px;
	width: 100%;
	height: 6px;
	overflow: hidden;
  font-size: 0;
	background-color: #ddd;
	border-radius: 3px;
	span{
		display: inline-block;
		height: 100%;
		background-color: red;
	}
}
</style>
