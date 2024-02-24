<template>
	<view class="container">
		<!-- 顶部区域 -->
		<view class="tabs">
			<view class="left">
				<view class="item" :class="tab=='command'?'active':''" @click="changeTab('command')">推荐</view>
				<view class="item" :class="tab=='shandong'?'active':''" @click="changeTab('shandong')">山东</view>
			</view>
			<view class="item" :class="tab=='sort'?'active':''" @click="changeTab('sort')">分类</view>
		</view>
		<!-- 推荐区域 -->
		<view class="command" v-if="tab=='command'">
			<!-- 搜索框 -->
			<view class="search">
				<input type="text" class="searchText">
				<view class="logo">
					<image src="/static/search.png" class="img"></image>
				</view>
			</view>
			<!-- 律师内容区域 -->
			<view class="lawyer-area">
				<view class="lawyer-item">
					<image src="/static/resource/lawyer10.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系李勇律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer11.jpg" class="avatar"></image>
					<view class="introduce">高级合伙人律师，擅长互联网纠纷，劳动纠纷，婚姻家庭...</view>
					<u-icon size="26px" name="chat" label="联系萧展律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer12.jpg" class="avatar"></image>
					<view class="introduce">一位经验丰富的专业律师，专注于民事诉讼和商业法律事务。</view>
					<u-icon size="26px" name="chat" label="联系李若仙律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer13.jpg" class="avatar"></image>
					<view class="introduce">一位经验丰富的家庭法律律师，专注于离婚和子女抚养事务</view>
					<u-icon size="26px" name="chat" label="联系韩美林律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer14.jpg" class="avatar"></image>
					<view class="introduce">充满激情的刑事辩护律师，对公正和正义充满热情。他在处理各种刑事案件方面经验丰富</view>
					<u-icon size="26px" name="chat" label="联系王骁律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer15.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系商晓峰律师" label-color="#000"></u-icon>
				</view>
 			</view>
		</view>
		<!-- 省份区域 -->
		<view class="shandong" v-else-if="tab=='shandong'">
			<!-- 搜索框 -->
			<view class="search">
				<input type="text" class="searchText">
				<view class="logo">
					<image src="/static/search.png" class="img"></image>
				</view>
			</view>
			<!-- 律师内容区域 -->
			<view class="lawyer-area">
				<view class="lawyer-item">
					<image src="/static/resource/lawyer1.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系李勇律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer11.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系萧展律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer12.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系李若仙律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer13.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系韩美林律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer14.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系王骁律师" label-color="#000"></u-icon>
				</view>
				<view class="lawyer-item">
					<image src="/static/resource/lawyer15.jpg" class="avatar"></image>
					<view class="introduce">全国律师协会会员，擅长：债权债务，证券投资</view>
					<u-icon size="26px" name="chat" label="联系商晓峰律师" label-color="#000"></u-icon>
				</view>
			</view>
		</view>
		<!-- 分类区域 -->
		<view class="sort" v-else>
			<!-- 搜索框区域 -->
			<u-search placeholder="劳动纠纷..." v-model="keyword" :showAction="false" margin="0 10px" bgColor="#fff" height="70rpx"></u-search>
			<!-- 主要内容区域 -->
			<view class="main-content">
				<view class="left-menu">
					<view class="menu-item">
						<view class="section">案件类型</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>刑事类</text>
						</view>
						<view class="item">
							<image src="/static/selected.png"></image>
							<text class="selected">民事类</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>经济类</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>行政类</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>非诉讼</text>
						</view>
					</view>
					<view class="menu-item">
						<view class="section">预估报价</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>&lt;1k</text>
						</view>
						<view class="item">
							<image src="/static/selected.png"></image>
							<text class="selected">1k-5k</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>5k-1w</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>1w-3w</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>&gt;3w</text>
						</view>
					</view>
					<view class="menu-item">
						<view class="section">所属律所</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>青天律所</text>
						</view>
						<view class="item">
							<image src="/static/selected.png"></image>
							<text class="selected">海峰律所</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>快捷律所</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>美琪律所</text>
						</view>
						<view class="item">
							<image src="/static/option.png"></image>
							<text>很棒律所</text>
						</view>
					</view>
				</view>
				<view class="right-content">
					<view class="content-item">
						<view class="section">一级案由</view>
						<view class="item">人格权纠纷</view>
						<view class="item">婚姻家庭、继承纠纷</view>
						<view class="item">侵权责任纠纷</view>
						<view class="item">物权纠纷</view>
						<view class="item">合同、准合同纠纷</view>
						<view class="item">劳动争议与人事争议</view>
						<view class="item">知识产权与竞争纠纷</view>
						<view class="item">海事海商纠纷</view>
						<view class="item">证券纠纷</view>
						<view class="item">保险纠纷</view>
						<view class="item">与公共，证券，保险，相关的民事纠纷</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tab:'command',
				keyword:''
			}
		},
		methods: {
			changeTab(str)
			{
				this.tab = str;
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color:#fff;
}
.container{
	margin:10px 10px;
	.tabs{
		display: flex;
		justify-content: space-between;
		margin-bottom:20px;
		.left{
			display: flex;
		}
		.item{
			font-size:20px;
			font-weight:bold;
			margin:9px;
			display: inline-block;
			position:relative;
		}
		.active{
			transform: scale(1.2);
		}
		.active::before{
			content:'';
			position:absolute;
			left:-3px;
			right:-3px;
			height:40%;
			bottom:-2px;
			background-color: #97bbbb;
			z-index:-1;
		}
	}
	.command{
		.search{
			position: relative;
			height:60px;
			.searchText{
				position:absolute;
				border:3px solid #000;
				border-radius:30px;
				height: 30px;
				width:100%;
			}
			.logo{
				position:absolute;
				right:-2px;
				height:28px;
				width:50px;
				top:2.5px;
				background-color:#000;
				border-radius:30px;
				border:1px solid #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				.img{
					height:20px;
					width:20px;
				}
			}
		}
		.lawyer-area{
			display: flex;
			flex-wrap:wrap;
			justify-content: space-between;
			.lawyer-item{
				display: flex;
				flex-direction: column;
				width:45vw;
				gap:9px;
				margin-bottom:20px;
				.avatar{
					height:55vw;
					width:45vw;
					border-radius:20px;
				}
				.introduce{
					font-size:12px;
					font-weight:bold;
				}
			}
		}
	}
	.shandong{
		.search{
			position: relative;
			height:60px;
			.searchText{
				position:absolute;
				border:3px solid #000;
				border-radius:30px;
				height: 30px;
				width:100%;
			}
			.logo{
				position:absolute;
				right:-2px;
				height:28px;
				width:50px;
				top:2.5px;
				background-color:#000;
				border-radius:30px;
				border:1px solid #fff;
				display: flex;
				justify-content: center;
				align-items: center;
				.img{
					height:20px;
					width:20px;
				}
			}
		}
		.lawyer-area{
			display: flex;
			flex-wrap:wrap;
			justify-content: space-between;
			.lawyer-item{
				display: flex;
				flex-direction: column;
				width:45vw;
				gap:9px;
				margin-bottom:20px;
				.avatar{
					height:55vw;
					width:45vw;
					border-radius:20px;
				}
				.introduce{
					font-size:12px;
					font-weight:bold;
				}
			}
		}
	}
	.sort{
		background-color: #b2cdcd;
		padding-top:10px;
		border-radius:10px;
		min-height:90vh;
		.main-content{
			display: flex;
			margin:20px;
			.left-menu{
				width:25vw;
				padding-right:10px;
				border-right:1px solid #000;
				display: flex;
				flex-direction: column;
				gap:10px;
				.menu-item{
					display: flex;
					flex-direction:column;
					align-items: flex-start;
					gap:10px;
					padding-bottom:10px;
					border-bottom:2px solid #82a0a2;
					.section{
						font-size:18px;
						font-weight:bold;
						color:#3f6266;
					}
					.item{
						display: flex;
						align-items: center;
						gap:10px;
						color:#94b1b2;
						image{
							width:16px;
							height:16px;
						}
						.selected{
							font-weight:bold;
							color:#5a7b7e;
						}
					}
				}
			}
			.right-content{
				width:60vw;
				margin-left:20px;
				.content-item{
					display: flex;
					flex-direction: column;
					gap:15px;
					.section{
						font-size:18px;
						font-weight:bold;
						color:#3f6266;
					}
					.item{
						color:#a6babc;
						background-color: #deebeb;
						padding:10px;
						font-size:16px;
						border-radius: 10px;;
					}
				}
			}
		}
	}
}
</style>
