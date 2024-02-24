<template>
	<view class="container">
		<view class="top">
			<image src="/static/搜索.png" @click="toSearch"></image>
			<u-tabs :list="list1" @click="switchTabs" lineColor="transparent"
				activeStyle="fontWeight:bold;color:#000;transform:scale(1.2)"></u-tabs>
			<image src="/static/通知.png" @click="show=true"></image>
		</view>
		<view class="command">
			<view class="command-item">
				<uni-card title="李勇" sub-title="33分钟前 发布于山东" thumbnail="/static/resource/lawyer1.jpg" shadow="0 0 0 0" :border="false">
					<text class="uni-body">分享一则案例，一处闲置的住宅楼内发现十几具鸟类国家保护动物的尸体....</text>
					<view class="pict">
						<image src="/static/resource/bird1.jpg"></image>
						<image src="/static/resource/bird2.jpg"></image>
						<image src="/static/resource/bird3.jpg"></image>
					</view>
					<view class="operator">
						<u-icon name="heart" label="166" size="22px"></u-icon>
						<u-icon name="chat" label="95" size="22px"></u-icon>
						<u-icon name="share" size="22px"></u-icon>
					</view>
				</uni-card>
			</view>
			<view class="command-item">
				<uni-card title="张鑫鑫" sub-title="60分钟前 发布于山东" thumbnail="/static/resource/lawyer1.jpg" shadow="0 0 0 0" :border="false">
					<text class="uni-body">国家赔偿的范围包括行政赔偿和刑事赔偿。国家赔偿申请需要的资料包括了...</text>
					<view class="pict">
						<image src="/static/resource/赔偿1.jpg"></image>
						<image src="/static/resource/赔偿2.jpg"></image>
						<image src="/static/resource/赔偿3.jpg"></image>
					</view>
					<view class="operator">
						<u-icon name="heart" label="166" size="22px"></u-icon>
						<u-icon name="chat" label="95" size="22px"></u-icon>
						<u-icon name="share" size="22px"></u-icon>
					</view>
				</uni-card>
			</view>
		</view>
		<!-- 弹出层 -->
		<u-popup :show="show" @close="close" @open="open" mode="right" :round="10">
			<view class="popup">
				<u-icon name="bell" size="20px" label="消息通知" labelColor="#000" class="notice"></u-icon>
				<view class="message">
					<image class='avatar' src="/static/resource/lawyer1.jpg"></image>
					<view class="info">
						<view class="name">张鑫鑫
							<text class="time">6小时前</text>
						</view>
						<view>点赞了你的评论</view>
					</view>
				</view>
				<view class="message">
					<image class='avatar' src="/static/resource/lawyer2.jpg"></image>
					<view class="info">
						<view class="name">李勇
							<text class="time">6小时前</text>
						</view>
						<view>收藏了你的分享</view>
					</view>
				</view>
				<view class="message">
					<image class='avatar' src="/static/resource/lawyer1.jpg"></image>
					<view class="info">
						<view class="name">胡轩洪
							<text class="time">6小时前</text>
						</view>
						<view>点赞了你的评论</view>
					</view>
				</view>
				<view class="message">
					<image class='avatar' src="/static/resource/lawyer1.jpg"></image>
					<view class="info">
						<view class="name">王志萍
							<text class="time">6小时前</text>
						</view>
						<view>点赞了你的评论</view>
					</view>
				</view>
				<view class="message">
					<image class='avatar' src="/static/resource/lawyer1.jpg"></image>
					<view class="info">
						<view class="name">李海
							<text class="time">6小时前</text>
						</view>
						<view>回复了你的评论</view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '热榜'
				}],
				show:false
			};
		},
		methods: {
			switchTabs() {

			},
			close()
			{
				this.show=false;
			},
			open()
			{
				
			},
			toSearch()
			{
				uni.navigateTo({
					url:'/subpackage/search/search'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		margin: 10px;

		.top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			image {
				width: 24px;
				height: 24px;
			}
		}
		.command{
			margin-top:20px;
			.pict{
				display: flex;
				gap:20px;
				margin-top:10px;
				image{
					width:100px;
					height:100px;
					border-radius: 10px;
				}
			}
			.operator{
				margin-top:20px;
				display: flex;
				justify-content: space-between;
			}
		}
		.popup{
			width:50vw;
			margin:10px;
			display: flex;
			flex-direction:column;
			align-items: center;
			gap:40px;
			.notice{
				align-self: flex-end;
				margin-bottom:20px;
			}
			.message{
				display: flex;
				align-items: center;
				.avatar{
					width:40px;
					height:40px;
					border-radius: 50%;
					margin-right:10px;
				}
				.info{
					font-size:17px;
					.name{
						
						.time{
							font-size:12px;
							font-weight:400;
							color:rgba(153, 153, 153, 1);
							margin-left:10px;
						}
					}
				}
			}
		}
	}
</style>