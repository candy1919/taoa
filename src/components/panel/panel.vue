<template>
	<div class="panel">
		<div @click="toggle">
			<slot name="title"></slot>
		</div>
		<transition v-if="isShow" name="fade">
			<slot name="content"></slot>
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
      isShow: ''
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
        this.isShow = this.show
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to  {
    opacity: 0
  }
</style>
