<template>
	<view class="container">
		<view class="blank"></view>
		<!-- 搜索栏区域 -->
		<u-search placeholder="劳动纠纷..." v-model="keyword" :showAction="false" margin="0 30px"></u-search>
		<!-- 历史搜索区域 -->
		<view class="history">
			<view class="title">历史搜索</view>
			<u-icon name="trash" size="28px"></u-icon>
		</view>
		<!-- 历史搜索内容 -->
		<view class="history-content">
			<view class="history-item">威海民事律师</view>
			<view class="history-item">李勇律师</view>
			<view class="history-item">李勇</view>
			<view class="history-item">劳动争议与人事争议</view>
			<view class="history-item">没有签合同</view>
			<view class="history-item">离职合同纠纷</view>
			<view class="history-item">从公司离职，合同</view>
			<view class="history-item more">更多搜索历史  ↓</view>
		</view>
		<!-- 猜你想搜区域 -->
		<view class="command">
			<view class="title">猜你想搜</view>
			<u-icon name="reload" label="换一换" size="28px"></u-icon>
		</view>
		<!-- 推荐内容 -->
		<view class="command-content">
			<view class="command-item">国家赔偿范围</view>
			<view class="command-item">劳务合同赔偿风险</view>
			<view class="command-item">房贷逾期被起诉</view>
			<view class="command-item">婚前财产离婚怎么算</view>
			<view class="command-item">离婚房屋增值部分</view>
			<view class="command-item">出售有贷款的房屋</view>
			<view class="command-item">二手房</view>
			<view class="command-item">申请商品预售条件</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				keyword:''
			};
		}
	}
</script>

<style lang="scss">
.container{
	width:100vw;
	height:100vh;	
	background-color:#fff;
	.blank{
		height: 20px;
	}
	.history{
		margin:20px 20px;
		display: flex;
		justify-content:space-between;
		.title{
			font-size:17px;
			font-weight:bold;
			padding-left:10px;
			border-left:2px solid #46676b;
		}
	}
	.history-content{
		margin:0 20px;
		display: flex;
		font-weight:400;
		flex-wrap: wrap;
		.history-item{
			width:50%;
			margin:5px 0;
		}
		.more{
			color:#c2cccd;
			
		}
	}
	.command{
		margin:20px 20px;
		display: flex;
		justify-content:space-between;
		.title{
			font-size:17px;
			font-weight:bold;
			padding-left:10px;
			border-left:2px solid #46676b;
		}
	}
	.command-content{
		margin:0 20px;
		display: flex;
		font-weight:400;
		flex-wrap: wrap;
		.command-item{
			width:50%;
			margin:5px 0;
		}
	}
}
</style>
