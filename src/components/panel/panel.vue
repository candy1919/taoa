<template>
	<div class="panel">
		<div @click="toggle">
			<slot name="title"></slot>
		</div>
		<div v-if="isShow">
			<slot name="content"></slot>
		</div>
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
	.panel{

	}
</style>
