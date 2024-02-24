<template>
	<view class="container">
		<view class="title">撰写评价</view>
		<view class="rate">
			<view class="div">为这次服务打个分吧!</view>
			<u-rate :count="5" v-model="rate" size="22" gutter="8"></u-rate>
		</view>
		<view class="advice">
			<view class="div">为他人分享你的一些建议把！</view>
			<u--textarea v-model="textValue" placeholder="说点什么吧..." count height="149"></u--textarea>
		</view>
		<view class="sat">
			<view class="div">您对我们的应用满意吗？</view>
			<view class="rank">
				<view class="it">
					<image src="/static/rank/叹气.png"></image>
				</view>
				<view class="it">
					<image src="/static/rank/一般.png"></image>
				</view>
				<view class="it">
					<image src="/static/rank/正常.png"></image>
				</view>
				<view class="it">
					<image src="/static/rank/不错.png"></image>
				</view>
				<view class="it select">
					<image src="/static/rank/满意.png"></image>
				</view>
			</view>
		</view>
		
		<button class="submit">提交评价</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				rate:1,
				textValue:''
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.container{
	margin: 13px 16px;
	.title{
		text-align: center;
		font-size: 20px;
		font-weight:400;
		color:rgba(51, 62, 99, 1);
		font-family: 'HarmonyOS Sans SC';
	}
	.rate{
		margin-top:51px;
		.div{
			margin-bottom:10px;
		}
	}
	.advice{
		margin-top:24px;
		.div{
			margin-bottom:12px;
		}
	}
	.sat{
		margin-top:127px;
		margin-bottom:128px;
		.rank{
			margin-top:20px;
			display: flex;
			gap:16px;
			.it{
				height:54px;
				width:54px;
				background-color:#fff;
				border-radius:27px;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					height: 32px;
					width:32px;
				}
			}
			.select{
				background-color:#ccc;
			}
		}
	}
	.div{
		font-size:16px;
		font-weight:400;
		color:rgba(51, 62, 99, 1);
	}
	.submit{
		width: 283px;
		height: 48px;
		background: rgba(42, 65, 73, 0.76);
		color:#fff;
	}
}
</style>
