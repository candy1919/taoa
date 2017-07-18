<template>
	<div class="panel">
		<div @click="toggle">
			<slot name="title"></slot>
		</div>
  		<transition name="fade" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave">
        <div v-show="isShow" class="content-wrap" ref="content">
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
      isShow: true,
      endHeight: ''
    }
  },
  mounted () {
    let box = this.$refs.content
    this.endHeight = getComputedStyle(box).height
    console.log(this.endHeight)
    this.init()
  },
  methods: {
    enter (el) {
      el.style.height = 'auto'
      var endWidth = getComputedStyle(el).height
      el.style.height = '0px'
      el.offsetHeight // force repaint
      el.style.height = endWidth
    },
    afterEnter (el) {
      el.style.height = 'auto'
    },
    beforeLeave (el) {
      el.style.height = getComputedStyle(el).height
      el.offsetHeight // force repaint
      el.style.height = '0px'
    },
    toggle () {
      if (this.type === 'fold') {
        this.isShow = !this.isShow
      }
    },
    init () {
      if (this.type === 'normal') {
        this.isShow = true
      } else {
        this.isShow = this.show
      }
    }
  }
}
</script>
<style lang="less" scoped>
.content-wrap {
  overflow: hidden;
}

.p {
  padding: 30px;
  line-height: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: height 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  height: 0
}
</style>
