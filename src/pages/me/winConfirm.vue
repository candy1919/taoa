<template>
	<div class="winConfirm">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">中奖确认</p>
		</v-header>
		<split></split>
		<div class="contanier">
			<div class="progress">
				<span></span>
				<p>dafasd</p>
			</div>
		</div>
		<split></split>
		<div class="container">
			<p class="title">地址信息</p>
			<p class="info">
				<span>姓名</span>
				<span>123432434</span>
			</p>
			<p>dafsdfasdfasdsd</p>
		</div>
		<div class="container">
			<p class="title">获奖信息</p>
			<div class="item">
				<div class="avatar-wrap">
					<img :src="item.src">
				</div>
				<div class="content">
					<p class="title">{{item.title}}</p>
					<div class="text">
						<p>
							<span>期&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;&nbsp;</span><span>{{item.issue}}</span>
						</p>
					</div>
					<div class="text">总需{{item.total}}次</div>
					<div class="text">幸运号码：<span class="red">{{item.luckynum}}</span></div>
					<div class="text">参与人数：<span class="red">{{item.join}}</span>人</div>
					<div class="text">
						揭晓时间：{{item.time|formate}}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {formateTime} from '@/util/util'
export default{
  data () {
    return {
      item: {}
    }
  },
  mounted () {
    this.item = this.$route.params.winInf
  },
  filters: {
    formate (time) {
      let data = new Date(time)
      return formateTime(data, 'yyyy-MM-dd hh:mm:ss')
    }
  }
}
</script>
<style lang="less" scoped>
.winConfirm{
	position: absolute;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	z-index: 5;
	background: #ebebeb;
}	
</style>
