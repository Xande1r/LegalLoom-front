<script>
	export default {
		onLaunch: function() {
			uni.onTabBarMidButtonTap(()=>{
				uni.navigateTo({
					url:"/pages/chat/chat"
				})
			});
		},
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		background-color: #e4f2f2;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>
