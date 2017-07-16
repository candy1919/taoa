<template>
	<div class="panel">
		<div @click="toggle">
			<slot name="title"></slot>
		</div>
  		<transition name="fade">
        <div ref="content" v-show="isShow" class="content-wrap">
  			   <slot name="content"></slot>
         </div>
  		</transition>
	</div>
</template>
<script>
export default{
  props: {
    type: {
      type: String, // normal/fold
      default: 'normal'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isShow: '',
      height: ''
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    toggle () {
      if (this.type === 'fold') {
        this.isShow = !this.isShow
      }
    },
    init () {
      if (this.type === 'normal') {
        this.isShow = true
      } else {
        // this.isShow = this.show
       // this.$refs.
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content-wrap {
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: height 0.5s ease; //动画过渡
}
.fade-enter,.fade-leave-to {
  height: 0
}
</style>
