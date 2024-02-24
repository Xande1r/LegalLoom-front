<template>
	<view class="container">
		<view class="header">
			<u--image src="/static/avatar.png" shape="circle" height="120px" width="120px"></u--image>
			<text class="name">克里斯蒂亚诺</text>
		</view>
		<view class="features">
			<view class="feature-item">
				<view class="title">邮箱</view>
				<view class="info">暂无未读邮件</view>
			</view>
			<view class="feature-item">
				<view class="title">所属律师</view>
				<view class="info">威海市xx事务所</view>
			</view>
			<view class="feature-item">
				<view class="title">律师执照</view>
				<view class="info">点击查看</view>
			</view>
		</view>
		<view class="menus">
			<view class="menu-item">
				<view class="left">
					<u-icon name="lock" size="24"></u-icon>
					<view class="menu-name">信息修改</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right" size="16"></u-icon>
				</view>
			</view>
			<view class="menu-item">
				<view class="left">
					<u-icon name="star" size="24"></u-icon>
					<view class="menu-name">系统评价</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right" size="16"></u-icon>
				</view>
			</view>
			<view class="menu-item">
				<view class="left">
					<u-icon name="list-dot" size="24"></u-icon>
					<view class="menu-name">服务历史</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right" size="16"></u-icon>
				</view>
			</view>
			<view class="menu-item">
				<view class="left">
					<u-icon name="setting" size="24"></u-icon>
					<view class="menu-name">设置</view>
				</view>
				<view class="right">
					<u-icon name="arrow-right" size="16"></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.container{
	margin: 0 25px 0 24px;
	
	.header{
		margin-top:43px;
		width:100%;
		display:flex;
		flex-direction: column;
		align-items: center;
		.name{
			margin-top:22px;
			margin-bottom: 13px;
			font-size: 20px;
			font-weight:400;
			font-family: "Noto Sans SC";
		}
	}
	.features{
		margin:46px 0;
		display: flex;
		justify-content: space-between;
		.feature-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width:109px;
			height:74px;
			background-color:#fff;
			border-radius:16px;
			.title{
				font-size:14px;
				color:rgba(102, 126, 209, 1);
				margin-bottom:8px;
			}
			.info{
				color:rgba(153, 153, 153, 1);
				font-size:12px;
				font-weight:400;
			}
		}
	}
	.menus{
		display: flex;
		flex-direction: column;
		gap:14px;
		.menu-item{
			background-color: #fff;
			height:69px;
			width:100%;
			border-radius:12px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding: 23px 16px;
			.left{
				display: flex;
				gap:12px;
				
				.menu-name{
					font-size:14px;
					font-weight:400;
				}
			}
			.right{
				
			}
		}
	}
}
</style>
