<template>
	<view class="contain">
		<view class="fixed">
			<cu-custom :isBack="true" :Color="Color" :backColor="backColor" :isIcon="true" bgColor="bg-shadeTop text-white">
				<block slot="content">我的发布</block>
			</cu-custom>
		</view>
		<view class="wrapper">
			<view class="nav">
				<view :class="navIndex == k ? 'active nav-item' : 'nav-item'" v-for="(v,k) in nav" :key="k" @tap="changeNav(k)">{{v.name}}</view>
			</view>
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit"
			@emptyclick="emptyClick" @topclick="topClick">
				<view class="list">
					<view class="list-item" v-for="(v,k) in list" :key="k">
						<view class="detail">
							<image :src="v.headImage"></image>
							<view class="detail-right">
								<view class="name">{{v.title}}</view>
								<view class="mark">
									<view style="margin-right: 40rpx;" v-if="v.gongXuType == 1">提供需求</view>
									<view style="margin-right: 40rpx;" v-if="v.gongXuType == 2">寻找需求</view>
								</view>
							</view>
						</view>
						<view class="service">
							<view class="service-item" v-for="(v,k) in list.lables" :key="k">{{v}}</view>
						</view>
						<view class="btn-box">
							<view v-if="v.state == 0">未审核</view>
							<view v-if="v.state == 1">审核通过</view>
							<view v-if="v.state == 2">审核失败</view>
							<view class="btns">
								<view class="btn" style="border: 1px solid #0081FF;color: #0081FF;margin-right: 40rpx;" @tap="goEditor(v.id)">修改</view>
								<view class="btn" @tap="goDelete(k,v.id)">删除</view>
							</view>
						</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
	</view>
</template>

<script>
	import Toast from '../../common/toast.js'
	import {ajax} from '../../request/request.js'
	import MescrollUni from "../../components/mescroll-uni/mescroll-uni.vue"
	export default {
		data() {
			return {
				Color: '#333',
				backColor: '#fff',
				navIndex: 0,
				nav: [{
					type: 0,
					name: '全部'
				},{
					type: 1,
					name: '发布需求'
				},{
					type: 2,
					name: '寻找需求'
				}],
				list: [],
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
						size: 10, // 每页数据的数量
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
						tip: '没有相关数据', // 提示
						// btnText: '去逛逛 >' // 按钮
					}
				}
			}
		},
		components: {
			MescrollUni
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
		onShow() {
			if(this.mescroll) {
				this.list = []
				this.mescroll.resetUpScroll()
			}
		},
		methods: {
			changeNav(k) {
				if(this.navIndex == k) {
					return
				}
				this.navIndex = k
				this.list = []
				this.mescroll.resetUpScroll()
			},
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
				console.log('点击了回到顶部按钮')
			},
			init(mescroll) {
				let self = this
				//获取顶部导航列表
				let data1 = {
					uid: uni.getStorageSync('uid'),
					type: this.navIndex,
					pageSize: mescroll.size,
					pageNo: mescroll.num
				}
				Toast.showLoading('', function() {
					let data = {
						url: '/api/myGX',
						data: data1,
						success: function(res) {
							console.log(res)
							if (res.data.result == 0) {
								Toast.hideLoading()
								if (res.data.dataList) {
									self.list = res.data.dataList
								}
							} else {
								Toast.hideLoading()
								Toast.showToast(res.data.resultNote)
							}
							// 接口返回的当前页数据列表 (数组)
							let curPageData = []
							if (res.data.dataList) {
								curPageData = res.data.dataList
							}
							// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
							let totalPage = 1
							if (res.data.totalPage) {
								totalPage = res.data.totalPage
							}
							mescroll.endByPage(curPageData.length, totalPage)
						}
					}
					ajax(data)
				})
			},
			goEditor(id) {
				uni.navigateTo({
				    url: '/pages/public/public?id=' + id + '&type=0'
				})
			},
			goDelete(k,id) {
				let self = this
				uni.showModal({
				    title: '提示',
				    content: '确定删除此条需求吗',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定')
							self.del(k,id)
				        } else if (res.cancel) {
				            console.log('用户点击取消')
				        }
				    }
				})
			},
			del(k,id) {
				let self = this
				//获取顶部导航列表
				let data1 = {
					uid: uni.getStorageSync('uid'),
					gxId: id
				}
				Toast.showLoading('', function() {
					let data = {
						url: '/api/delMyGX',
						data: data1,
						success: function(res) {
							console.log(res)
							if (res.data.result == 0) {
								Toast.hideLoading()
								self.list.splice(k,1)
								Toast.showToast('删除成功')
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
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: #f6f6f6;
		
		.fixed {
			width: 100%;
		}
		
		.wrapper {
			width: 100%;
			display: flex;
			flex-direction: column;
			position: relative;
			border-top: 10px solid #f6f6f6;
			background: #fff;
			
			.nav {
				width: 100%;
				display: flex;
				padding: 36rpx 28rpx;
				box-sizing: border-box;
				justify-content: space-between;
				border-bottom: 1px solid #eee;
				
				.nav-item {
					padding: 8rpx 24rpx;
					box-shadow: 0 0 5px rgba(0,0,0,.2);
					border-radius: 30px;
					font-size: 30rpx;
					color: #666;
					
					&.active {
						background: #0081FF;
						color: #fff;
					}
				}
			}
			
			.list {
				width: 100%;
				display: flex;
				flex-direction: column;
				
				.list-item {
					width: 100%;
					padding: 40rpx 28rpx;
					box-sizing: border-box;
					background: #fff;
					display: flex;
					flex-direction: column;
					border-bottom: 10px solid #f6f6f6;
					
					.detail {
						width: 100%;
						display: flex;
						padding-bottom: 40rpx;
						
						image {
							width: 110rpx;
							height: 110rpx;
							border-radius: 4px;
						}
						
						.detail-right {
							width: 75%;
							height: 110rpx;
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							padding-left: 24rpx;
							box-sizing: border-box;
							
							.name {
								width: 100%;
								font-size: 28rpx;
								color: #333;
							}
							
							.mark {
								display: flex;
								font-size: 26rpx;
								color: #0081FF;
							}
						}
					}
					
					.service {
						width: 100%;
						display: flex;
						flex-wrap: wrap;
						border-bottom: 1px solid #eee;
						
						.service-item {
							padding: 6rpx 20rpx;
							border-radius: 30px;
							border: 1px solid #0081FF;
							font-size: 28rpx;
							color: #0081FF;
							margin: 0 28rpx 28rpx 0;
						}
					}
					
					.btn-box {
						width: 100%;
						padding: 40rpx 0 0;
						display: flex;
						justify-content: space-between;
						align-items: center;
						
						.btns {
							display: flex;
							font-size: 26rpx;
							color: #333;
							
							.btn {
								padding: 2rpx 24rpx;
								border-radius: 4px;
								border: 1px solid #666;
								font-size: 30rpx;
								color: #666;
							}
						}
					}
				}
				
				.list-item:last-child {
					border-bottom: none;
				}
			}
		}
	}
</style>
