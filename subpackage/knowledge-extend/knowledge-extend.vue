<template>
	<view class="container">
		<view class="top-info">
			<view class="left">
				<image class="avatar" src="/static/avatar.png"></image>
				<view class="name">
					<text class='username'>谢金苓</text>
					<text class="mail">@xiejinlin</text>
				</view>
			</view>
			<button class="manage" size="mini" style="color:#fff;backgroundColor:#4db8d3;border-radius:15px;">推送管理</button>
		</view>
		<view class="tabs">
			<u-tabs :list="tabList" @click="switchTab"></u-tabs>
			<image src="/static/sub.png" class="img"></image>
		</view>
		<view class="content">
			<view class="item" v-for="item in 10">
				<view class="ctx">
					<view class="title">西安宝马彩票案</view>
					<view class="con">这段案子案中有案，离奇曲折，西安一个农村小伙应为买彩票...</view>
					<view class="info">李律师  ·  14mins</view>
				</view>
				<image src="/static/bingo.jpg" class="pict"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList:[
					{
						name:'民事类'
					},
					{
						name:'刑事类'
					},
					{
						name:'行政类'
					}
				]
			};
		},
		methods:{
			switchTab()
			{
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	margin:20px 8px;
	.top-info{
		width:100%;
		margin:0 5px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.left{
			display: flex;
			align-items: center;
			.avatar{
				height:52px;
				width:52px;
				border-radius: 50%;
			}
			.name{
				display: flex;
				flex-direction: column;
				margin-left:20px;
				.username{
					font-weight:400;
					font-size:14px;
					color: rgba(51, 51, 51, 1);

				}
				.mail{
					color:rgba(153, 153, 153, 1);
					font-weight:400;
					font-size:12px;
				}
			}
		}
		.manage{
			position:relative;
			left:50px;
		}
	}
	.tabs{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top:28px;
		.img{
			width:23px;
			height:28px;
		}
	}
	.content{
		margin:0 10px;
		margin-top:22px;
		display: flex;
		flex-direction:column;
		gap:20px;
		.item{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-radius: 10px;
			box-sizing: border-box;
			padding:10px 20px;
			.ctx{
				display: flex;
				flex-direction: column;
				font-size:14px;
				.title{
					
				}
				.con{
					
				}
				.info{
					font-size:10px;
					font-weight:400;
					color:rgba(153, 153, 153, 1);
				}
			}
			.pict{
				height:64px;
				width:128px;
				border-radius:10px;
			}
		}
	}
}
</style>
