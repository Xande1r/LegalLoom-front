<template>
	<view class="container">
		<!-- 头部区域 -->
<!-- 		<view class="header">
			<u-icon name="arrow-left" size="28" @click="back"></u-icon>
			<view class="center">
				<image src="/static/logo.png" mode="widthFix" class="logo"></image>
				<text class="title">{{title}}</text>
			</view>
			<u-icon name="chat" size="26"></u-icon>
		</view> -->
		<!-- 聊天区域 -->
		<view class="chatContent">
			<!-- 弹出层 -->
			<view class="popup">
				<view class="content" v-show="this.popup">
					<view class="tab-item">人格权纠纷</view>
					<view class="tab-item">婚姻家庭、继承纠纷</view>
					<view class="tab-item">物权纠纷</view>
					<view class="tab-item select-item">合同、准合同纠纷</view>
					<view class="tab-item">知识产权与竞争纠纷</view>
					<view class="tab-item">劳动争议、人事争议</view>
					<view class="tab-item">海事、海商纠纷</view>
				</view>
				<view class="pop-footer">
					<image :src="this.popSrc" @click="popHandler"></image>
				</view>
			</view>
			<ul class="chatList">
				<li class="robot">
					<u--image :showLoading="true" src="/static/logo.png" width="50px" height="50px" shape="circle"></u--image>
					<span>你好，我是法纹智编chatLaw，您的法律咨询专属Ai,欢迎您向我提问-_-</span>
				</li>
				<li v-for="(chat,index) in chatList" :key="index" :class="chat.role==='user'?'user':'robot'">
					<u--image v-if="chat.role==='user'" :showLoading="true" src="/static/person.png" width="50px" height="50px" shape="circle" ></u--image>
					<u--image v-else :showLoading="true" src="/static/logo.png" width="50px" height="50px" shape="circle"></u--image>
					<span>{{chat.content}}</span>
				</li>
			</ul>
		</view>
		<!-- 底部输入框 -->
		<view class="footer">
			<image src="/static/voice.png" mode="widthFix"></image>
			<input placeholder=" 请输入内容" class="input" type="text" />
			<image src="/static/plus.png" mode="widthFix"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatList:[
					{"role":"user","content":"如果一个人故意驾车向人群冲撞，但没有造成重大损失，会被怎样处罚？"},
					{"role":"assistant","content":"根据问题描述和相关法律，即使没有造成死亡等重伤后果，仍然属于危险驾驶，情况也构成犯罪危险驾驶。从道路交通安全法来看，司乘人员严禁随意跳车和钻车窗口。无论何时，都需要提前落实转车准备工作，包括系紧安全带，关好门窗及天窗，确认手刹和灯光状态，摆正坐姿与座椅角度等。同时需要警惕闯红灯，乱变道，超速行驶等恶习。"},
					],
				value:'',
				popup:false,
			}
		},
		methods: {
			popHandler()
			{
				this.popup = !this.popup;
			}
		},
		computed:{
			popSrc()
			{
				return this.popup?'/static/arrow-up.png':'/static/arrow-down.png';
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	height:100vh;
	width:100vw;
	// .header{
	// 	display:flex;
	// 	justify-content: space-between;
	// 	align-items: center;
	// 	height:44px;
	// 	width:100%;
	// 	background-color: #f6f6f6;
	// 	.center{
	// 		display:flex;
	// 		align-items: center;
	// 		gap:5px;
	// 		.logo{
	// 			width:44px;
	// 		}
	// 		.title{
	// 			font-weight:bold;
	// 		}
	// 	}
	// }
	.chatContent{
		height: calc(100vh - 44px);
		.popup{
			width:100%;
			background-color:#fff;
			border: 1px solid rgba(187, 187, 187, 1);
			border-bottom-left-radius: 40px;
			border-bottom-right-radius: 40px;
			.content{
				display: flex;
				flex-wrap:wrap;
				gap:15px;
				padding:10px 20px;
				.tab-item{
					padding:0px 10px;
					margin:2px 0;
					border: 1px solid rgba(187, 187, 187, 1);
					border-radius:20px;
					font-size:12px;
					font-size:12px;
					font-weight: bold;
					font-family:'PingFang SC';
					color:rgba(154, 154, 154, 1);
				}
				.select-item{
					background-color:rgba(244, 206, 152, 1);
				}
			}
			.pop-footer{
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width:22px;
					height:22px;
				}
			}
		}
		.chatList{
			padding:10px 0;
			font-size:14px;
			list-style:none;
			height:100%;
			display: block;
			overflow: auto;
			li{
				width:100%;
				line-height: 22px;
				display: flex;
				gap:10px;
				span{
					display:inline-block;
					align-self: flex-end;
					padding:10px 15px;
					position:relative;
					top:20px;
				}
				&+li{
					margin-top:20px;
				}
			}
			.robot{
				float:left;
				
				span{
					background-color: rgba(66, 196, 240, 0.1);
					border-radius: 0 15px 15px 15px;
					margin-right:20%;
				}
			}
			.user{
				float:right;
				flex-direction: row-reverse;
				span{
					text-align:right;
					background-color: rgba(73, 154, 41, 0.1);
					border-radius: 15px 0 15px 15px;
					margin-left:20%;
				}
			}
		}
	}
	.footer{
		position:fixed;
		width:100%;
		bottom:0;
		left:0;
		right:0;
		height:44px;
		display: flex;
		align-items: center;
		background-color:#fff;
		border:1px solid rgba(187, 187, 187, 1);
		image{
			width:10%;
		}
		.input {
			background-color: white;
			height: 38px;
			width:80%;
			border-radius: 10px;
			margin: 5px 0;
			border: 1px solid rgba(187, 187, 187, 1);
		}
	}
}

</style>