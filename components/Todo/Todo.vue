<template>
	<view class="todo">
		<view class="content">
			<u--textarea v-model="content" :disabled="able" border="none" :autoHeight="true" height="80" @confirm="confirm" @blur="blur"></u--textarea>
		</view>
		<view class="bottom">
			<view class="time">{{todo.time}}</view>
			<view class="action">
				<image src="/static/action/置顶.png" @click="toTop"></image>
				<image src="/static/action/撰写.png" @click="write"></image>
				<image src="/static/action/完成.png" @click="finish"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["todo"],
		name: "Todo",
		data() {
			return {
				able:true,
				content:this.todo.content
			};
		},
		methods:{
			toTop()
			{
				
			},
			write()
			{
				this.able=false;
			},
			finish()
			{
				
			},
			confirm()
			{
				this.able=true;
			},
			blur()
			{
				this.able=true;
			}
		}
	}
</script>

<style lang="scss">
	.todo {
		width: 100%;
		background-color: #fff;
		box-sizing: border-box;
		padding: 11px 16px 11px 14px;
		border-radius: 10px;
		box-shadow: 10px 24px 54px rgba(51, 51, 51, 0.03);

		.content {
			margin-bottom:20px;
		}

		.bottom {
			display: flex;
			justify-content: space-between;

			.time {
				font-size: 14px;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
			}

			.action {
				display: flex;
				gap: 19px;

				image {
					height: 20px;
					width: 20px;
				}
			}
		}
	}
</style>