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
						<input placeholder="请输入验证码" v-model="code">
					</div>
					<span class="verifycode" @click="getCode" >获取验证码</span>
				</div>
				<div class="input-item">
					<label>设置密码：</label>
					<div class="input-wrap">
						<input placeholder="请输入6-15位字符，不能输入特殊字符" v-model="password">
					</div>
				</div>
				<div class="input-item">
					<label>确认密码：</label>
					<div class="input-wrap">
						<input placeholder="请输入确认密码" v-model="repassword">
					</div>
				</div>
			</div>
			<div class="hit">*注册代表已阅读并同意积分购服务协议
			</div>
			<div class="btns-group btn-wrap">
				<p class="btn btn-submit" @click="submit">注册</p>
			</div>
		</form>
		<v-alert :msg="msg" v-if="flag" @close="close"></v-alert>
	</div>
</template>
<script>
export default{
  data () {
    return {
      phone: '',
      flag: false,
      verifycode: '',
      code: '',
      password: '',
      repassword: ''
    }
  },
  methods: {
    getCode () {
      // 电话正则表达式
      let that = this
      let rex = /^1[0-9]{10}$/
      if (rex.test(this.phone)) {
        this.axios.post(this.baseUrl + '/getCode', {
          phone: that.phone
        }).then(function (response) {
          that.verifycode = response.data.verifycode
        }).catch(function (error) {
          console.log(error)
        })
      } else {
        this.flag = true
        this.msg = '手机号不正确'
      }
    },
    submit () {
      let that = this
      if (this.checkForm()) {
        this.axios.post(this.baseUrl + '/register', {
          phone: that.phone,
          code: that.code,
          password: that.password
        }).then(function (response) {
          that.flag = true
          that.msg = response.data.retmsg
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    checkForm () {
      let rex = /[0-9A-Za-z]{6,15}/
      if (this.code === this.verifycode && rex.test(this.password) && this.password === this.repassword) {
        return true
      } else if (this.code !== this.verifycode) {
        this.msg = '验证码不正确'
      } else if (!rex.test(this.password)) {
        this.msg = '密码格式不对'
      } else if (this.password !== this.repassword) {
        this.msg = '密码不一致'
      } else {
        this.msg = '信息填写错误'
      }
      this.flag = true
      return false
    },
    close () {
      this.flag = false
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
