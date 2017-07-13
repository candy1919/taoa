<template>
	<div class="login">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">登录</p>
		</v-header>
		<form>
			<div class="input-container">
				<div class="input-wrap">
					<label>账号：</label>
					<p>
						<input type="text" placeholder="请输入账号\手机号" required v-model="user_id">
					</p>
				</div>
				<div class="input-wrap">
					<label>密码：</label>
					<p>
						<input type="password" placeholder="请输入密码" required v-model="password">
					</p>
					<router-link to="/user/findPassword">忘记密码</router-link>
				</div>
			</div>
			<div class="btns-group">
				<p class="btn btn-login" @click="login">登录</p>
				<router-link to="/user/register" class="btn btn-register">注册</router-link>
			</div>
		</form>
		<v-alert :msg="msg" :flag="flag" v-if="flag" @close="close"></v-alert>
	</div>
</template>
<script>
import {mapMutations} from 'vuex'
export default{
  data () {
    return {
      user_id: '',
      password: '',
      msg: 'aaa',
      flag: false
    }
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO'
    ]),
    login () {
      if (this.user_id && this.password) {
        this.$http({
          url: '/user/login',
          method: 'POST',
          body: JSON.stringify({
            user_id: this.user_id,
            password: this.password
          }),
          headers: {
            contentType: 'application/x-www-form-urlencoded'
          }
        }).then(response => {
          let res = response.body.res
          console.log(res)
          if (!res) {
            this.flag = true
            this.msg = '账号或密码错误'
          } else {
              // 保存登录数据
            this.RECORD_USERINFO({user_id: this.user_id})
            // 跳转到原来想跳转的页面
            this.$router.push({ path: this.$route.query.redirect })
          }
        }, response => {
        })
      } else {
        this.flag = true
        this.msg = '账号或密码不能为空'
      }
    },
    close () {
      this.flag = false
    }
  }
}
</script>
<style lang="less" scoped>
	.login{
		background-color: #eee;
		height: 100%;
		.title{
			color:#333;
			background-color: #eee;
		}
		.input-container{
			margin:20px 0;
			padding: 0 15px;
			font-size: 18px;
			color: #333;
			background-color: #fff;
			.input-wrap{
				padding: 10px 0;
				display: flex;
				&:nth-of-type(1){
					border-bottom: 1px solid #ddd;
				}
				p{
					flex:1;
					input{
						width: 100%;
					}
				}
				a{
					margin-left: 5px;
					color:#888;
				}
			}
		}
		.btns-group{
			padding:0 15px;
			.btn{
				display: block;
				margin-bottom: 15px;
				padding: 10px 0;
				text-align: center;
				border-radius: 3px;
				border:1px solid #f66;
				&.btn-login{
					color:white;
					background-color: #f66;
				}
				&.btn-register{
					color: #f66;
					//background-color: 
				}
			}
		}
	}
</style>
