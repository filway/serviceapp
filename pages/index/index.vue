<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<u-action-sheet :actions="list" :title="title" :show="show"></u-action-sheet>
					<u-button @click="show = true">打开ActionSheet</u-button>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
							list: [
								{
									name:'选项一',
									subname:"选项一描述",
									color:'#ffaa7f',
									fontSize:'20'
								},
								{
									name: '选项二禁用',
									disabled:true
								},
								{
									name: '开启load加载', //开启后文字不显示
									loading:true
								}
							],
							show: false
			}
		},
		onLoad() {

		},
		methods: {
			goWxapp() {
				this.http.get('/users/filway', '', 'https://api.github.com').then((res) => {
					console.log(res.avatar_url)
				}).catch((err) => {
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
