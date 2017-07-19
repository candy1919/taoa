<template>
	<div class="alert-wrap" ref="alert">
		<div class="alert">
			<span class="close" @click="close">x</span>
			<p class="msg">{{msg}}</p>
			<div class="btn-wrap">
				<p class="btn" @click="close">确定</p>
			</div>
		</div>
		
	</div>
</template>
<script>
export default{
  props: {
    msg: String
  },
  methods: {
    close () {
      this.$refs.alert.style.display = 'none'
      this.$emit('close', false)
    }
  }
}
</script>
<style lang="less" scoped>
	.alert-wrap{
		position: fixed;
		padding: 30px;
		width: 100%;
		top:15%;
		.alert{
			padding: 10px;
            width: 100%;
			color:#f66;
			background-color: #f66;
			border:1px solid #f66;
		    background-color: white;
			border-radius: 5px;
			.close{
				display: block;
	    		text-align: right;
	    		margin-bottom: 10px;
	    		color:#eee;
	    		border-bottom: 1px solid #eee;
			}
			.msg{
				text-align: center;
				font-size: 18px;
            }
		}
		.btn-wrap{
			text-align: center;
    		margin-top: 14px;
    		font-size: 13px;
		}
		.btn {
			display: inline-block;
			padding: 5px;
		    width: 5em;
		    text-align: center;
		    color: white;
		    background-color: #f66;
		}
	}
</style>
