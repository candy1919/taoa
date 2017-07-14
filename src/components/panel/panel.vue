<template>
	<div class="panel">
		<div @click="toggle">
			<slot name="title"></slot>
		</div>
  		<transition name="fade">
        <div v-show="isShow" class="content-wrap">
  			 <slot name="content"></slot>
        </div>
  		</transition>
      <!-- <div>
        <button type="button" @click='fns'>点击</button>
        <transition name="fade">
          <div class='background' v-show='isShow'>
            <p class="p">
              this is a p
            </p>
          </div>
        </transition>
      </div> -->
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
      isShow: false
    }
  },
  mounted () {
    // this.init()
  },
  methods: {
    fns () {
      this.isShow = !this.isShow
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
  //background: #000;
  //width: 100px;
  transform: scaleY(1);
  transform-origin: top;
}

.p {
  padding: 30px;
  line-height: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  transform: scaleY(0);
}
</style>
