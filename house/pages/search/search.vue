<template>
	<view class="contain">
		<view class="top">
			<text class="cuIcon-back" @tap="goBack"></text>
			<view class="search-box">
				<image src="../../static/images/search1.png" mode="widthFix" @tap="confirm"></image>
				<input type="text" v-model="value" placeholder="请输入关键字进行搜索" placeholder-style="color:#fff;" confirm-type="search"
				 @confirm="confirm">
			</view>
		</view>
		<view class="lists" v-if="!show">
			<view class="item" v-for="(v,k) in history" :key="k">
				<view class="title" @tap="goSearch(v)">{{v}}</view>
				<view @tap="goDel(k)">X</view>
			</view>
		</view>
		<view class="list" v-if="show">
			<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit"
			 @emptyclick="emptyClick" @topclick="topClick">
				<view class="book-list">
					<view class="book-item" v-for="(v,k) in bookList" :key="k" :style="{marginRight:(k+1)%3==0?'0':'3.33%'}" @tap="goBook(v.nid,v.isrecord,v)">
						<image :src="v.image"></image>
						<view class="book-title">{{v.name}}</view>
					</view>
				</view>
			</mescroll-uni>
		</view>
	</view>
</template>

<script>
	import MescrollUni from "../../components/mescroll-uni/mescroll-uni.vue"
	export default {
		data() {
			return {
				value: '',
				show: false,
				history: [],
				bookList: [],
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
					textNoMore: '-- 已经到底了 --', // 已经到底了的提示文本
					toTop: {
						// 回到顶部按钮,需配置src才显示
						src: "http://www.mescroll.com/img/mescroll-totop.png", // 图片路径
						offset: 1000, // 列表滚动多少距离才显示回到顶部按钮,默认1000
						duration: 300 // 回到顶部的动画时长,默认300ms
					},
					empty: {
						use: true, // 是否显示空布局
						icon: "http://www.mescroll.com/img/mescroll-empty.png", // 图标路径
						tip: '没有符合条件的小说', // 提示
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
		onLoad(option) {
			if (wx.getStorageSync('lisi')) {
				this.history = wx.getStorageSync('lisi')
			}
		},
		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				})
			},
			confirm() {
				if(!this.value) return
				if (wx.getStorageSync('lisi')) {
					let arr = wx.getStorageSync('lisi')
					arr.unshift(this.value)
					let arr1 = Array.from(new Set(arr))
					if (arr1.length > 5) {
						arr1.pop()
					}
					wx.setStorageSync('lisi', arr1)
				} else {
					let arr2 = []
					arr2.unshift(this.value)
					wx.setStorageSync('lisi', arr2)
				}
				this.show = true
				if(this.mescroll) {
					this.init(this.mescroll)
				}
			},
			goDel(k) {
				this.history.splice(k,1)
				wx.setStorageSync('lisi', this.history)
			},
			goSearch(val) {
				this.show = true
				this.value = val
				this.bookList = []
				if(this.mescroll) {
					this.init(this.mescroll)
				}
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
				this.bookList = []
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
				// 获取小说列表
				let self = this
				let data1 = {
					uid: uni.getStorageSync('uid'),
					content: this.value,
					nowPage: mescroll.num,
					pageCount: mescroll.size
				}
				
				this.$u.post('getnovelslist', data1).then(res => {
					console.log(res)
					if (res.result == 0) {
						if (res.dataList) {
							for (let j = 0; j < res.dataList.length; j++) {
								self.bookList.push(res.dataList[j])
							}
						}
					} else {
						this.$refs.uToast.show({
							title: res.resultNote,
							type: 'none'
						})
					}
					// 接口返回的当前页数据列表 (数组)
					let curPageData = []
					if (res.dataList) {
						curPageData = res.dataList
					}
					// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
					let totalPage = 1
					if (res.totalPage) {
						totalPage = res.totalPage
					}
					mescroll.endByPage(curPageData.length, totalPage)
				})
			},
			goBook(id, state, item) {
				console.log(item)
				if (state == 0) {
					this.$u.route({
						url: 'pages/bookDetail/bookDetail',
						params: {
							url1: item.url1,
							url2: item.url2,
							times1: item.times1,
							integrals: item.integrals,
							nid: item.nid
						}
					})
				} else {
					uni.navigateTo({
						url: '/pages/book/book?url=' + item.url1
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.contain {
		width: 100%;
		min-height: 100vh;
		background: #f6f6f6;
		display: flex;
		flex-direction: column;

		.top {
			width: 100%;
			padding: 28rpx;
			box-sizing: border-box;
			background: #fe5f23;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;

			.cuIcon-back {
				font-size: 32rpx;
				color: #FFFFFF;
			}

			.search-box {
				width: 90%;
				height: 70rpx;
				line-height: 70rpx;
				border-radius: 30px;
				background: #fe875a;
				display: flex;
				align-items: center;
				padding: 0 24rpx;
				box-sizing: border-box;

				image {
					width: 50rpx;
					margin-bottom: 4rpx;
				}

				input {
					font-size: 28rpx;
					color: #ffffff;
					margin-left: 30rpx;
				}
			}
		}

		.lists {
			width: 100%;
			padding: 150rpx 28rpx 28rpx 28rpx;
			box-sizing: border-box;

			.item {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 28rpx;
				color: #333;
				margin-bottom: 28rpx;

				.title {
					width: 90%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
		}
		
		.list {
			width: 100%;
			padding: 140rpx 28rpx 28rpx 28rpx;
			box-sizing: border-box;
			
			.book-list {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
			
				.book-item {
					width: 30%;
					display: flex;
					flex-direction: column;
					margin-bottom: 30rpx;
			
					image {
						width: 100%;
						height: 280rpx;
						border-radius: 6px;
					}
			
					.book-title {
						width: 100%;
						font-size: 28rpx;
						color: #333;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						margin: 16rpx 0;
						text-align: center;
					}
			
					.book-time {
						font-size: 26rpx;
						color: #999;
						text-align: center;
					}
				}
			}
		}
	}
</style>
