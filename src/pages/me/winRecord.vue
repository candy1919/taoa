<template>
	<div class="winRecord">
		<v-header class="title">
			<p slot="left"><</p>
			<p slot="title">中奖记录</p>
		</v-header>
		<div class="item-wrap" v-for="item in itemdatas"   :key="item.issue">
			<split></split>
			<div class="item" @click="goDetail(item)">
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
			<p class="state">{{item.state}}</p>
		</div>
	</div>
</template>
<script>
import {formateTime} from '@/util/util'
export default {
  data () {
    return {
      itemdatas: [],
      name: this.$store.state.userInfo
    }
  },
  created () {
    let that = this
    this.axios.post(this.baseUrl + '/winRecord', {
      name: that.name
    }).then(function (response) {
      that.itemdatas = response.data.retdata
    }).catch(function (error) {
      console.log(error)
    })
  },
  filters: {
    formate (time) {
      let data = new Date(time)
      return formateTime(data, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  methods: {
    goDetail (val) {
      if (typeof val === 'object') {
        val = JSON.stringify(val)
      }
      sessionStorage.setItem('winData', val)
      this.$router.push('/me/winConfirm')
    }
  }
}
</script>
<style lang="less" scoped>
.winRecord{
	position: absolute;
	left:0;
	top:0;
	width: 100%;
	height: 100%;
	z-index: 5;
	background: #ebebeb;
	.item{
		display: flex;
		align-items: center;
		padding: 20px 15px 10px 0;
		background-color: white;
		.avatar-wrap{
			margin: 0 15px;
			img{
				margin: auto 0;
				width: 60px;
				height: 60px;
			}
		}
		.content{
			flex:1;
			font-size: 14px;
			color: #999;
			background: white;
			.title{
				margin-bottom: 15px;
				font-size: 16px;
				color: black;
				overflow: hidden;
			}
			.text{
				margin-bottom: 5px;
				vertical-align: middle;
			}
		}
	}
	.state{
		position: relative;
		padding: 5px 10px;
		text-align: right;
		font-size: 14px;
		color: #333;
		background-color: white;
		&:before{
			content: "";
			position: absolute;
			left: 10px;
			right:10px;
			top:0;
			height:1px;
			transform:scaleY(.5);
			background-color: #d9d9d9;
		}
	}	
	.red{
		color:#f66;
	}
}
</style>
