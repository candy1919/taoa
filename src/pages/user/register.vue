<template>
	<div class="register">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">注册</p>
		</v-header>
		<form class="form">
			<div class="input-container">
				<div class="input-item">
					<label>手机号：</label>
					<div class="input-wrap">
						<input placeholder="请输入11位手机号" v-model="phone">
					</div>
				</div>
				<div class="input-item">
					<label>验证码：</label>
					<div class="input-wrap">
						<input placeholder="请输入验证码">
					</div>
					<span class="verifycode" @click="getCode">获取验证码</span>
				</div>
				<div class="input-item">
					<label>设置密码：</label>
					<div class="input-wrap">
						<input placeholder="请输入6-15位字符，不能输入特殊字符">
					</div>
				</div>
				<div class="input-item">
					<label>确认密码：</label>
					<div class="input-wrap">
						<input placeholder="请输入确认密码">
					</div>
				</div>
			</div>
			<div class="hit">*注册代表已阅读并同意积分购服务协议
			</div>
			<div class="btns-group btn-wrap">
				<p class="btn btn-submit">注册</p>
			</div>
		</form>
	</div>
</template>
<script>
export default{
  data () {
    return {
      phone: ''
    }
  },
  methods: {
    getCode () {
      // 电话正则表达式
    }
  }
}
</script>
<style lang="less">
.register{
	height: 100%;
	background-color: #ebebeb;
	.title{
		color:#333;
		background-color: #eee;
	}
	.btn-wrap{
		margin-top: 50px;
	}
	.hit{
		font-size: 14px;
	}
	.verifycode{
		color:#888;
	}
}
	
</style>
