<template>
	<div class="user">
		<transition  name="router-slid" mode="out-in">
		  		<router-view></router-view>
		</transition>
	</div>
</template>
<script>
	
</script>
<style lang="less" scoped>
	.user{
		height: 100%;
	}
	.router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter{
    	transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
    .router-slid-leave-to {
        transform: translate3d(-2rem, 0, 0);
        opacity: 0;
    }
</style>
