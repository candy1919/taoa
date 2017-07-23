<template>
	<div class="header">
		<div class="left"  @click="back">
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
import { mapActions } from 'vuex'
export default{
  created () {
    this.getUserInfo()
  },
  methods: {
    ...mapActions([
      'getUserInfo'
    ]),
    back () {
      this.$router.go(-1)
    }
  }
}
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
		.left{
			display: inline-block;
		}
		.left,.right{
			width: 60px;
			align-items:center;
		}
		.middle{
			flex:1;
			font-size: 18px;
			font-weight: bold;
		}
	}	
</style>
