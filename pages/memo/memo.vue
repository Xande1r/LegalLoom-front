<template>
	<view class="container">
		<view class="todo-list">
			<Todo v-for="todo,index in todoList" :todo="todo" :key="todo.id"></Todo>
		</view>
		<view class="bottom">
			<view class="operate">
				<image src="/static/action/文件夹.png"></image>
				<text class="title">添加事件</text>
			</view>
			<view class="operate">
				<image src="/static/action/历史记录.png"></image>
				<text class="title">历史记录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				todoList:[
					{
						id:1,
						content:"今天入驻LegalLoom，我的律师编号为0361，记得向公司提交申请，方便后续工作的安排。",
						time:'2024-12-13'
					},
					{
						id:2,
						content:"今天接到一单民事纠纷案，当事人名为韩火慢，电话为123456789666，案件属于男方出轨，被女方知道后敲诈勒索。女方收集了证据，包括照片、短信和录音等。然后，她通过匿名邮件向当事人发送了勒索信，要求。。。",
						time: '2024-1-14'
					},
					{
						id:3,
						content:"案件的代理词已经向法院申请，记得提醒当事人提交证据以此来在法庭上为其维护。",
						time: '2024-1-14'
					},
					{
						id:4,
						content:'案件已经完结，记得提醒当事人结清尾款，记得向公司提交报告。',
						time:'2024-1-14'
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
.container{
	margin: 37px 18px 0 15px; 
	.todo-list{
		display: flex;
		flex-direction: column;
		gap:10px;
		margin-bottom:69px;
		overflow: auto;
	}
	.bottom{
		position:fixed;
		bottom:69px;
		left:0;
		right:0;
		display: flex;
		justify-content: space-around;
		.operate{
			display: flex;
			flex-direction: column;
			align-items: center;
			image{
				height:48px;
				width:48px;
			}
			.title{
				font-size:14px;
				font-weight:400;
				margin-top:9px;
			}
		}
	}
}
</style>
