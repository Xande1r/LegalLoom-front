<template>
	<view class="page-container">
		<image :src="roleSrc" class="background"></image>
		<view class="container">
			<!-- Logo -->
			<image src='/static/logo.png' mode="heightFix" class="logo"></image>
			<view class="title">{{this.roleClient}}</view>
			<!-- 表单区域 -->
			<input placeholder=" 请输入手机号" class="input" type="text" />
			<input placeholder=" 请输入密码" class="input" type="password" />
			<text class="register">{{this.roleRegister}}</text>
			<button class="login" @click="login">登录</button>
			<text class="forget">忘记密码？</text>
			<view class="read">
				<radio></radio>
				<text>我已阅读并同意<text class="dot">《用户协议》《隐私政策》</text></text>
			</view>
			<!-- 其他登录选项 -->
			<view class="another-login">
				<image src="/static/weixin.png" mode="heightFix"></image>
				<image src="/static/phone.png" mode="heightFix"></image>
			</view>
			<!-- 滑动切换角色 -->
			<view class="role-switch">
				<slider @change="changeHandler" backgroundColor="#edf8f8" activeColor="#edf8f8" block-color="#8dc2c9" min="0" max="100"/>
				<text class="tips">{{this.tips}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				role: 'user',
			};
		},
		computed: {
			roleSrc() {
				return `/static/${this.role}_bc.jpg`;
			},
			roleClient() {
				return this.role === 'user' ? '个人用户端' : '律师端';
			},
			roleRegister() {
				return this.role === 'user' ? '个人用户注册' : '律师认证注册';
			},
			tips()
			{
				return this.role === 'user' ? '》》》滑动切换角色': '《《《 滑动切换角色';
			}
		},
		methods:{
			...mapMutations('m_user',['changeRoles']),
			changeHandler(e)
			{
				if(e.detail.value===100)
				{
					this.role = 'lawyer';
					this.changeRoles(this.role);
				}else if(e.detail.value===0)
				{
					this.role = 'user';
					this.changeRoles(this.role);
				}
			},
			login()
			{
				uni.switchTab({
					url:"/pages/home/home",
				})
			}
		}
	}
</script>

<style lang="scss">
	.page-container {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		.background {
			position: absolute;
			height: 100%;
			width:100%;
		}

		.container {
			margin-top: 20px;
			position: absolute;
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;
			align-items: center;

			.logo {
				height: 220px;
			}

			.title {
				font-weight: bold;
				font-size: 16px;
				margin: 10px 0;
			}

			.input {
				background-color: white;
				height: 50px;
				width: 250px;
				border-radius: 10px;
				margin: 5px 0;
			}

			.register {
				font-weight: bold;
				font-size: 13px;
				margin: 10px 0;
				margin-left: 190px;
				color: #728694;
			}

			.login {
				width: 150px;
				background-color: #96bdf5;
				color: white;
				border-radius: 15px;
				box-shadow: 0 5px 5px rgba(0, 0, 0, 0.4);
			}

			.forget {
				color: rgba(153, 153, 153, 1);
				font-weight: 500;
				margin: 30px 0;
			}

			.read {
				color: #9ea0a2;
				font-weight: bold;
				margin-bottom: 20px;

				.dot {
					color: #3aa7f5
				}
			}

			.another-login {
				width: 100%;
				display: flex;
				justify-content: center;
				gap: 100px;

				image {
					height: 48px;
				}
			}

			.role-switch {
				position: absolute;
				bottom: 0;
				width: 100%;
				height: 60px;
				background-color: #edf8f8;
				border-radius: 5px 5px 0 0;

				.tips {
					position: absolute;
					left: 50%;
					top: 35%;
					transform: translate(-50%, -50%);
					color:#c0d7e7;
					font-size:18px;
				}
			}
		}
	}
</style>