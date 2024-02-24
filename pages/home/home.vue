<template>
	<view>
		<view class="user-page" v-if="this.role==='user'">
			<!-- 顶部区域 -->
			<view class="top">
				<image src="/static/personal.png" class='personal'></image>
				<u-search 
				placeholder="历史搜索,请输入关键词" 
				inputAlign="center" v-model="keyword" 
				:showAction="false"
				class='search' 
				height="40"
				searchIconColor="#8db1d3"
				searchIconSize="30"
				bgColor="#fff"
				></u-search>
				<image src='/static/memo.png' class="memo"></image>
			</view>
			<!-- 案件区域 -->
			<view class="case">
				<view class="left-case">
					<view class="history">
						<image src="/static/history.png"></image>
						<text>历史案件</text>
					</view>
					<view class="process">
						<image src="/static/process.png"></image>
						<text>案件进程</text>
					</view>
				</view>
				<view class="right-case">
					<view class="co">
						<image src="/static/person.png"></image>
						<text>对接律师</text>
					</view>
					<view class="info">
						<text>姓名: 暂无</text>
						<text>编号: 暂无</text>
						<text>律所: 暂无</text>
					</view>
				</view>
			</view>
			<!-- 案情选择 -->
			<view class="case-choose">
				<text class="title">案情选择:</text>
				<view class="case-container">
					<!-- 一级菜单 -->
					<view class="first-tab">
						<view class="tab-item select-item">诉讼案件</view>
						<view class="tab-item">非诉讼案件</view>
					</view>
					<view class="divider"></view>
					<!-- 二级菜单 -->
					<view class="second-tab">
						<view class="tab-item select-item">民事类</view>
						<view class="tab-item">刑事类</view>
						<view class="tab-item">行政类</view>
						<view class="tab-item">经济类</view>
					</view>
					<view class="divider"></view>
					<!-- 三级菜单 -->
					<view class="third-tab">
						<view class="tab-item">人格权纠纷</view>
						<view class="tab-item">婚姻家庭、继承纠纷</view>
						<view class="tab-item">物权纠纷</view>
						<view class="tab-item">合同、准合同纠纷</view>
						<view class="tab-item">知识产权与竞争纠纷</view>
						<view class="tab-item">劳动争议、人事争议</view>
						<view class="tab-item">海事、海商纠纷</view>
						<view class="tab-item">...</view>
					</view>
				</view>
			</view>
			<!-- 其他功能 -->
			<view class="other-fun">
				<text class="title">其他功能:</text>
				<view class="fun-list">
					<view class="fun-item">
						<image src="/static/TextGenerate.png"></image>
						<text>文书生成</text>
					</view>
					<view class="fun-item">
						<image src="/static/TextDownload.png"></image>
						<text>文书下载</text>
					</view>
					<view class="fun-item">
						<image src="/static/TextCheck.png"></image>
						<text>文书审查</text>
					</view>
					<view class="fun-item">
						<image src="/static/TextTrace.png"></image>
						<text>案件追踪</text>
					</view>
					<view class="fun-item" @click="navigateSub('extend')">
						<image src="/static/KnowledgeExpend.png"></image>
						<text>知识扩展</text>
					</view>
					<view class="fun-item" @click="navigateSub('lawyer')">
						<image src="/static/LawyerMarket.png"></image>
						<text>律师市场</text>
					</view>
				</view>
			</view>
		</view>
		<view class="lawyer-page" v-else>
			<!-- 顶部区域 -->
			<view class="top">
				<image src="/static/personal.png" class='personal'></image>
				<u-search 
				placeholder="历史搜索,请输入关键词" 
				inputAlign="center" v-model="keyword" 
				:showAction="false"
				class='search' 
				height="40"
				searchIconColor="#8db1d3"
				searchIconSize="30"
				bgColor="#fff"
				></u-search>
				<image src='/static/memo.png' class="memo"></image>
			</view>
			<!-- 案件区域 -->
			<view class="case">
				<view class="left-case">
					<view class="history">
						<image src="/static/history.png"></image>
						<text>历史案件</text>
					</view>
					<view class="process">
						<image src="/static/process.png"></image>
						<text>案件进程</text>
					</view>
				</view>
				<view class="right-case">
					<view class="co">
						<image src="/static/person.png"></image>
						<text>对接客户</text>
					</view>
					<view class="info">
						<text>姓名: 暂无</text>
						<text>案件分类: 暂无</text>
					</view>
				</view>
			</view>
			<!-- 轮播图区域 -->
			<view class="swiper">
				    <u-swiper
				            :list="swiperList"
				            indicator
				            indicatorMode="dot"
				            circular
							height="200"
				    ></u-swiper>
			</view>
			<!-- 其他功能 -->
			<view class="other-fun">
				<text class="title">其他功能:</text>
				<view class="fun-list">
					<view class="fun-item">
						<image src="/static/TextGenerate.png"></image>
						<text>合同生成</text>
					</view>
					<view class="fun-item">
						<image src="/static/Retrieve.png"></image>
						<text>法条检索</text>
					</view>
					<view class="fun-item">
						<image src="/static/TextCheck.png"></image>
						<text>文书审查</text>
					</view>
					<view class="fun-item">
						<image src="/static/TextTrace.png"></image>
						<text>业务留痕</text>
					</view>
					<view class="fun-item">
						<image src="/static/LawyerMarket.png"></image>
						<text>接单市场</text>
					</view>
					<view class="fun-item">
						<image src="/static/RecordManage.png"></image>
						<text>档案管理</text>
					</view>
					<view class="fun-item">
						<image src="/static/Community.png"></image>
						<text>精英社区</text>
					</view>
					<view class="fun-item" @click="navigateSub('case')">
						<image src="/static/Feed.png"></image>
						<text>案件推送</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				keyword: '',
				swiperList:[
					'/static/swiper/swiper1.png',
				]
			};
		},
		computed: {
			...mapState('m_user', ['role']),
		},
		onLoad() {
			console.log(this.role);
		},
		methods:{
			navigateSub(str)
			{
				switch(str)
				{
					case 'extend':
						uni.navigateTo({
							url:'/subpackage/knowledge-extend/knowledge-extend'
						});
						break;
					case 'case':
						uni.navigateTo({
							url:'/subpackage/case_forward/case_forward'
						});
						break;
					case 'lawyer':
						uni.navigateTo({
							url:'/subpackage/lawyer_market/lawyer_market'
						});
						break;
					
				}
			}
		}
	}
</script>

<style lang="scss">
	.user-page {
		margin: 5px;

		.top {
			display: flex;
			gap: 5px;
			align-items: center;

			.personal {
				height: 32px;
				width: 32px;
			}

			.search {
		
			}

			.memo {
				height: 32px;
				width: 32px;
			}
		}
		.case{
			margin:20px 0;
			display:flex;
			justify-content: space-between;
			.left-case{
				width:43%;
				padding:5px 10px;
				border:1px solid black;
				border-radius:20px;
				.history{
					display:flex;
					align-items:center;
					justify-content: space-around;
					margin:10px 0;
				}
				.process{
					display:flex;
					align-items:center;
					justify-content: space-around;
					margin:10px 0;
				}
				image{
					width:50px;
					height:50px;
				}
				text{
					font-family: 'PingFang SC';
					font-size: 16px;
				}
			}
			.right-case{
				width:43%;
				padding:5px 10px;
				border:1px solid black;
				border-radius:20px;
				display:flex;
				justify-content: space-around;
				align-items: center;
				font-family: 'PingFang SC';
				.co{
					display:flex;
					align-items: center;
					flex-direction: column;
					gap:10px;
					font-size: 16px;
					image{
						width:50px;
						height:50px;
					}
				}
				.info{
					display: flex;
					flex-direction: column;
					font-size:14px;
					gap:10px;
				}
			}
		}
		.case-choose{
			.title{
				font-family: 'PingFang SC';
				margin-left:5px;
			}
			.case-container{
				margin-top:10px;
				// height:200px;
				width:100%;
				padding:10px 0;
				background-color:#fff;
				border-radius:20px;
				border: 1px solid rgba(187, 187, 187, 1);
				font-size:12px;
				font-weight: bold;
				font-family:'PingFang SC';
				color:rgba(154, 154, 154, 1);
				.select-item{
					background-color:rgba(228, 242, 242, 1);
				}
				.first-tab{
					display: flex;
					justify-content: space-around;
					.tab-item{
						padding:2px 40px;
						margin:2px 0;
						border: 1px solid rgba(187, 187, 187, 1);
						border-radius:30px;
					}
				}
				.divider{
					height: 1px;
					background-color:#9cc8cd;
					margin: 5px 20px;
				}
				.second-tab{
					display: flex;
					justify-content: space-evenly;
					.tab-item{
						padding:0px 10px;
						margin:2px 0;
						border: 1px solid rgba(187, 187, 187, 1);
						border-radius:20px;
						font-size:12px;
					}
				}
				.third-tab{
					display: flex;
					flex-wrap:wrap;
					gap:10px;
					padding:0 20px;
					.tab-item{
						padding:0px 10px;
						margin:2px 0;
						border: 1px solid rgba(187, 187, 187, 1);
						border-radius:20px;
						font-size:12px;
					}
				}
			}
		}
		.other-fun{
			margin-top: 10px;
			.title{
				font-family: 'PingFang SC';
				margin-left:5px;
			}
			.fun-list{
				width:100%;
				padding:10px 0px;
				background-color:#fff;
				border-radius:20px;
				border: 1px solid rgba(187, 187, 187, 1);
				font-size:12px;
				font-family:'PingFang SC';
				display: flex;
				flex-wrap:wrap;
				color:rgba(42, 66, 73, 1);
				.fun-item{
					width:25%;
					display: flex;
					flex-direction:column;
					justify-content: center;
					align-items: center;
					margin-bottom:5px;
					image{
						width:50px;
						height:50px;
						margin-bottom:5px;
					}
					text{
						
					}
				}
			}
		}
	}
	.lawyer-page{
		margin: 5px;
		
		.top {
			display: flex;
			gap: 5px;
			align-items: center;
		
			.personal {
				height: 32px;
				width: 32px;
			}
		
			.search {
		
			}
		
			.memo {
				height: 32px;
				width: 32px;
			}
		}
		.case{
			margin:20px 0;
			display:flex;
			justify-content: space-between;
			.left-case{
				width:43%;
				padding:5px 10px;
				border:1px solid black;
				border-radius:20px;
				.history{
					display:flex;
					align-items:center;
					justify-content: space-around;
					margin:10px 0;
				}
				.process{
					display:flex;
					align-items:center;
					justify-content: space-around;
					margin:10px 0;
				}
				image{
					width:50px;
					height:50px;
				}
				text{
					font-family: 'PingFang SC';
					font-size: 16px;
				}
			}
			.right-case{
				width:43%;
				padding:5px 10px;
				border:1px solid black;
				border-radius:20px;
				display:flex;
				justify-content: space-around;
				align-items: center;
				font-family: 'PingFang SC';
				.co{
					display:flex;
					align-items: center;
					flex-direction: column;
					gap:10px;
					font-size: 16px;
					image{
						width:50px;
						height:50px;
					}
				}
				.info{
					display: flex;
					flex-direction: column;
					font-size:14px;
					gap:10px;
				}
			}
		}
		.swiper{
			margin:40px 10px;
		}
		.other-fun{
			margin-top: 10px;
			.title{
				font-family: 'PingFang SC';
				margin-left:5px;
			}
			.fun-list{
				margin-top:10px;
				width:100%;
				padding:10px 0px;
				background-color:#fff;
				border-radius:20px;
				border: 1px solid rgba(187, 187, 187, 1);
				font-size:12px;
				font-family:'PingFang SC';
				display: flex;
				flex-wrap:wrap;
				color:rgba(42, 66, 73, 1);
				.fun-item{
					width:25%;
					display: flex;
					flex-direction:column;
					justify-content: center;
					align-items: center;
					margin-bottom:5px;
					image{
						width:50px;
						height:50px;
						margin-bottom:5px;
					}
					text{
						
					}
				}
			}
		}
	}
</style>