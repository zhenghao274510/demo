<template>
	<view class="contain">
		<view class="fixed">
			<cu-custom :isBack="true" :Color="Color" :isIcon="true" bgColor="bg-shadeTop text-white">
				<block slot="backText"></block>
				<block slot="content">产品管理</block>
			</cu-custom>
		</view>
		<view class="wrapper">
			<view class="box">
				<view class="search">
					<image src="../../static/images/search.png" alt=""></image>
					<input type="text" v-model="val" placeholder="产品查询" confirm-type="search" @confirm="goCar">
				</view>
				<view class="btn-search" @tap="goCar">查询</view>
			</view>
			<view class="time">
				<view style="margin-right: 24upx;">起止日期</view>
				<view class="dates" @tap="choiceDate1">
					<view>{{date1}}</view>
					<image src="../../static/images/select.png" alt=""></image>
				</view>
				<view style="margin: 0 14upx;">—</view>
				<view @tap="choiceDate2" class="dates">
					<view>{{date2}}</view>
					<image src="../../static/images/select.png" alt=""></image>
				</view>
			</view>
			<view class="totals">
				<view style="width: 85%;">{{total}}</view>
				<view style="color: #00AAEF;" @tap="goTotal">统计</view>
			</view>
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit"
			@topclick="topClick">
				<ul class="team">
					<li v-for="(v,k) in list" :key="k">
						<view class="car">
							<image :src="v.inorout == 1 ? '../../static/images/ruku.png' : '../../static/images/chuku.png'" alt=""></image>
							<view class="car-product">
								<view style="margin-bottom: 24upx;">{{v.goodsname}}</view>
								<view>{{v.addtime}}</view>
							</view>
						</view>
						<view class="total" v-if="v.inorout == 1">+{{v.goodsjsweight}}{{v.goodsweightunit}}</view>
						<view class="total" v-if="v.inorout == 2" style="color: red;">-{{v.goodsjsweight}}{{v.goodsweightunit}}</view>
					</li>
				</ul>
			</mescroll-uni>
		</view>
		<w-picker mode="date" startYear="2015" endYear="2030" step="1" :current="false" @confirm="onConfirm1" ref="picker1"
		 themeColor="#00AAEF"></w-picker>
		<w-picker mode="date" startYear="2015" endYear="2030" step="1" :current="false" @confirm="onConfirm2" ref="picker2"
		 themeColor="#00AAEF"></w-picker>
	</view>
</template>

<script>
	import {ajax} from '../../request/request.js'
	import Toast from '../../common/toast.js'
	import MescrollUni from "../../components/mescroll-uni/mescroll-uni.vue"
	import wPicker from "../../components/w-picker/w-picker.vue"
	export default {
		data() {
			return {
				Color: '#333',
				show1: false,
				val: '',
				date1: '',
				date2: '2019-12-31',
				list: [],
				total: '',
				totalPage: 0,
				mescroll: null, //mescroll实例对象
				downOption: {
					use: true, // 是否启用下拉刷新; 默认true
					auto: true, // 是否在初始化完毕之后自动执行下拉刷新的回调; 默认true
					autoShowLoading: true, // 如果设置auto=true(在初始化完毕之后自动执行下拉刷新的回调),那么是否显示下拉刷新的进度; 默认false
					isLock: false, // 是否锁定下拉刷新,默认false;
					isBoth: true, // 下拉刷新时,如果滑动到列表底部是否可以同时触发上拉加载;默认true,两者可同时触发;
					offset: 80, // 在列表顶部,下拉大于80upx,松手即可触发下拉刷新的回调
					inOffsetRate: 1, // 在列表顶部,下拉的距离小于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
					outOffsetRate: 0.2, // 在列表顶部,下拉的距离大于offset时,改变下拉区域高度比例;值小于1且越接近0,高度变化越小,表现为越往下越难拉
					bottomOffset: 20, // 当手指touchmove位置在距离body底部20upx范围内的时候结束上拉刷新,避免Webview嵌套导致touchend事件不执行
					minAngle: 45, // 向下滑动最少偏移的角度,取值区间  [0,90];默认45度,即向下滑动的角度大于45度则触发下拉;而小于45度,将不触发下拉,避免与左右滑动的轮播等组件冲突;
					textInOffset: '下拉刷新', // 下拉的距离在offset范围内的提示文本
					textOutOffset: '释放更新', // 下拉的距离大于offset范围的提示文本
					textLoading: '加载中 ...' // 加载中的提示文本
				},
				upOption: {
					use: true, // 是否启用上拉加载; 默认true
					auto: true, // 是否在初始化完毕之后自动执行上拉加载的回调; 默认true
					isLock: false, // 是否锁定上拉加载,默认false;
					isBoth: true, // 上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认true,两者可同时触发;
					page: {
						num: 0, // 当前页码,默认0,回调之前会加1,即callback(page)会从1开始
						size: 4, // 每页数据的数量
						time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
					},
					noMoreSize: 6, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
					textLoading: '加载中 ...', // 加载中的提示文本
					textNoMore: '-- 没有更多数据 --', // 没有更多数据的提示文本
					toTop: {
						// 回到顶部按钮,需配置src才显示
						src: "http://www.mescroll.com/img/mescroll-totop.png", // 图片路径
						offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000
						duration: 300 // 回到顶部的动画时长,默认300ms
					},
					empty: {
						use: true, // 是否显示空布局
						icon: "http://www.mescroll.com/img/mescroll-empty.png", // 图标路径
						tip: '没有进出记录数据', // 提示
						// btnText: '去逛逛 >' // 按钮
					}
				},
				type: 0
			}
		},
		onLoad() {
			let myDate = new Date()
			let month = (myDate.getMonth() + 1) > 9 ? (myDate.getMonth() + 1) : '0' + (myDate.getMonth() + 1)
			let date = myDate.getDate() > 9 ? myDate.getDate() : '0' + myDate.getDate()
			this.date2 = myDate.getFullYear() + '-' + month + '-' + date
			let oneweekdate = new Date(myDate - 7 * 24 * 3600 * 1000)
			let y = oneweekdate.getFullYear()
			let m = (oneweekdate.getMonth() + 1) > 9 ? (oneweekdate.getMonth() + 1) : '0' + (oneweekdate.getMonth() + 1)
			let d = oneweekdate.getDate() > 9 ? oneweekdate.getDate() : '0' + oneweekdate.getDate()
			this.date1 = y + '-' + m + '-' + d;
		},
		components: {
			MescrollUni,
			wPicker
		},
		onUnload() {
			this.mescroll = null;
		},
		//注册滚动到底部的事件,用于上拉加载
		onReachBottom() {
			this.mescroll && this.mescroll.onReachBottom()
		},
		//注册列表滚动事件,用于下拉刷新
		onPageScroll(e) {
			this.mescroll && this.mescroll.onPageScroll(e)
		},
		methods: {
			// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
				// loadSwiper();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
				this.list = []
				this.mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				let pageNum = mescroll.num // 页码, 默认从1开始
				let pageSize = mescroll.size // 页长, 默认每页10条
				let self = this
				self.init(mescroll)
			},
			// 点击回到顶部按钮的回调
			topClick() {
				console.log('点击了回到顶部按钮');
			},
			init(mescroll) {
				let self = this
				//进出记录
				let datas1 = {}
				if (this.type == 0) {
					datas1 = {
						token: uni.getStorageSync('token'),
						begintime: this.date1,
						endtime: this.date2,
						pageno: 1,
						pagesize: 6,
						os: uni.getSystemInfoSync().platform,
						osversion: uni.getSystemInfoSync().system,
						appversion: uni.getStorageSync('appversion')
					}
				} else {
					datas1 = {
						token: uni.getStorageSync('token'),
						begintime: this.date1,
						endtime: this.date2,
						goodsname: this.val,
						pageno: 1,
						pagesize: 6,
						os: uni.getSystemInfoSync().platform,
						osversion: uni.getSystemInfoSync().system,
						appversion: uni.getStorageSync('appversion')
					}
				}
				let data = {
					url: '/api/product/AllRecords',
					data: datas1,
					success: function(res) {
						console.log(JSON.stringify(res))
						if (res.data.Code == 0) {
							res.data.Customerdata.forEach((item) => {
								self.list.push(item)
							})
							self.total = res.data.Extra.Summary
						} else if (res.data.Code == -2 || res.data.Code == -1) {
							Toast.showToast(res.data.Description)
							uni.removeStorageSync('token')
							setTimeout(() => {
								uni.redirectTo({
									url: '/pages/login/login'
								})
							}, 500)
						} else {
							Toast.showToast(res.data.Description)
						}
						// 接口返回的当前页数据列表 (数组)
						let curPageData = res.data.Customerdata
						// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
						let totalPage = res.data.Extra.Recordcount
						mescroll.endByPage(curPageData.length, totalPage)
					}
				}
				ajax(data)
			},
			goCar() {
				this.type = 1
				this.list = []
				this.mescroll.resetUpScroll()
			},
			choiceDate1() {
				this.$refs.picker1.show()
			},
			choiceDate2() {
				this.$refs.picker2.show()
			},
			onConfirm1(e) {
				this.date1 = e.result
				let d2 = new Date(e.result)
				d2.setDate(d2.getDate() + 7)
				let m = (d2.getMonth() + 1) > 9 ? (d2.getMonth() + 1) : '0' + (d2.getMonth() + 1)
				let d = d2.getDate() > 9 ? d2.getDate() : '0' + d2.getDate()
				this.date2 = d2.getFullYear() + '-' + m + '-' + d
			},
			onConfirm2(e) {
				let date1 = this.date1.replace(/-/g, '/')
				let date2 = e.result
				date2 = date2.replace(/-/g, '/')
				date1 = Date.parse(date1)
				date2 = Date.parse(date2)
				if (date1 >= date2) {
					Toast.showToast('结束日期不能小于开始日期')
					return
				}
				this.date2 = e.result
				this.list = []
				this.mescroll.resetUpScroll()
			},
			goTotal() {
				uni.navigateTo({
					url: '/pages/carsCount/carsCount'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contain {
		width: 100%;
		display: flex;
		flex-direction: column;

		.mark {
			position: fixed;
			z-index: 900;
			top: 0;
			right: 0;
			left: 0;
			bottom: 0;
			background: rgba(0, 0, 0, 0.6);
		}

		.fixed {
			width: 100%;

			.date {
				width: 50upx;
				height: 50upx;
			}
		}

		.wrapper {
			width: 100%;
			padding: 28upx;
			box-sizing: border-box;
			background: #FAFAFA;

			.box {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.search {
					width: 70%;
					height: 70upx;
					background: #FFFFFF;
					border-radius: 4px;
					display: flex;
					justify-content: center;
					align-items: center;
					font-size: 14px;
					color: #333;
					padding-left: 160upx;
					box-sizing: border-box;

					image {
						width: 36upx;
						height: 36upx;
					}

					input {
						width: 70%;
						margin-left: 24upx;
					}
				}

				.btn-search {
					width: 25%;
					height: 70upx;
					line-height: 70upx;
					text-align: center;
					font-size: 14px;
					color: #FFFFFF;
					background: #00AAEF;
					border-radius: 4px;
				}
			}

			.time {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				padding: 0 20upx;
				box-sizing: border-box;

				view {
					font-size: 14px;
					color: #333;
				}
				
				.dates {
					display: flex;
					align-items: center;
					border: 1px solid #eee;
					border-radius: 4px;
					padding: 12upx;
					
					image {
						width: 30upx;
						height: 30upx;
						margin-left: 12upx;
					}
				}
			}

			.totals {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #FFFFFF;
				border-radius: 4px;
				margin-bottom: 30upx;
				font-size: 14px;
				color: #333;
				padding: 20upx;
				box-sizing: border-box;
				line-height: 18px;
			}

			.team {
				width: 100%;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;

				li {
					width: 100%;
					box-sizing: border-box;
					border-radius: 4px;
					box-shadow: 1px 1px 5px rgba(0, 0, 0, .1);
					background: #FFFFFF;
					margin: 30upx 0;
					padding: 20upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					
					.car {
						display: flex;
						align-items: center;
						
						image {
							width: 90upx;
							height: 90upx;
							margin-right: 30upx;
						}
						
						.car-product {
							display: flex;
							flex-direction: column;
							font-size: 14px;
							color: #333;
						}
					}
					
					.total {
						font-size: 16px;
						color: #00AAEF;
					}
				}

				li:first-child {
					margin-top: 0;
				}
			}
		}
	}
</style>
