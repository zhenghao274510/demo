<template>
	<view class="contain">
		<view class="fixed">
			<cu-custom :isBacks="true" :isIcons="true" :Color="Color" :isIcon="true" bgColor="bg-shadeTop text-white" @Back="Back">
				<block slot="backText"></block>
				<block slot="content">找回密码</block>
			</cu-custom>
		</view>
		<view class="forms">
			<input type="text" v-model="call" placeholder="请输入手机号">
			<view class="code">
				<input type="text" v-model="code" placeholder="请输入验证码" style="border-bottom: none;">
				<button class="codes" type="button" :disabled="btnState" @click="getValidate">{{rTime}} <span v-if="btnState">s</span></button>
			</view>
			<input type="password" v-model="pass" placeholder="请输入新密码">
			<input type="password" v-model="surePass" placeholder="请再次输入">
			<view class="login" @tap="goFinish">确认</view>
		</view>
	</view>
</template>

<script>
	import Toast from '../../common/toast.js'
	import {ajax} from '../../request/request.js'
	import md5 from 'js-md5'
	export default {
		data() {
			return {
				Color: '#333',
				call: '',
				code: '',
				pass: '',
				surePass: '',
				btnState: false,
				rTime: '获取验证码',
				wxCode: '',
				nickName: '',
				imgUrl: ''
			}
		},
		methods: {
			Back() {
				uni.reLaunch({
				    url: '/pages/login/login'
				})
			},
			getValidate() {
				let self = this
				if (this.call == '') {
					Toast.showToast('手机号不能为空')
					return
				} else if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.call))) {
					Toast.showToast('手机号格式不正确')
					return
				}
				self.rTime = 60
				let rTime = self.rTime
				self.btnState = true
				let interval = setInterval(() => {
					if (--self.rTime <= 0) {
						self.rTime = '获取验证码'
						clearInterval(interval)
						self.btnState = false
					}
				}, 1000)
				
				let datas = {
					phone: this.call
				}
				Toast.showLoading('', function() {
					let data = {
						url: '/sendSms',
						data: datas,
						success: function(res) {
							console.log(res)
							if (res.data.result == 0) {
								Toast.hideLoading()
								Toast.showToast('验证码发送成功')
							} else {
								Toast.hideLoading()
								Toast.showToast(res.data.resultNote)
							}
						}
					}
					ajax(data)
				})
			},
			goFinish() {
				let self = this
				if (this.call == '') {
					Toast.showToast('手机号不能为空')
					return
				} else if (!(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(this.call))) {
					Toast.showToast('手机号格式不正确')
					return
				}
				if (this.code == '') {
					Toast.showToast('验证码不能为空')
					return
				}
				if (this.pass == '') {
					Toast.showToast('密码不能为空')
					return
				}
				if (this.pass != this.surePass) {
					Toast.showToast('两次密码输入不一致')
					return
				}
				let datas = {
					phone: this.call,
					code: this.code,
					password: md5(this.pass)
				}
				Toast.showLoading('', function() {
					let data = {
						url: '/findPassword',
						data: datas,
						success: function(res) {
							if (res.data.result == 0) {
								Toast.hideLoading()
								Toast.showToast('密码修改成功')
								setTimeout(() => {
									uni.navigateBack({
									    delta: 1
									})
								},800)
							} else {
								Toast.hideLoading()
								Toast.showToast(res.data.resultNote)
							}
						}
					}
					ajax(data)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contain {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: hidden;

		.fixed {
			width: 100%;
		}

		.forms {
			width: 100%;
			padding: 0 28upx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			margin-top: 40upx;

			input {
				width: 100%;
				height: 100upx;
				font-size: 28upx;
				color: #333;
				border-bottom: 1px solid #eee;
			}

			.code {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				height: 100upx;
				border-bottom: 1px solid #eee;

				input {
					width: 60%;
					color: #333;
					font-size: 28upx;
				}

				.codes {
					font-size: 28upx;
					height: 60upx;
					line-height: 60upx;
					padding: 0 32upx;
					background: #FF4848;
					color: #FFFFFF;
					margin: 0;
				}
			}

			.login {
				width: 80%;
				height: 80upx;
				line-height: 80upx;
				text-align: center;
				border-radius: 30px;
				font-size: 28upx;
				color: #FFFFFF;
				background: #FF4848;
				margin: 80upx auto 0;
			}
		}
	}
</style>
