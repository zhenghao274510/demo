<template>
	<view class="contain">
		<view class="wrapper">
			<view class="tabs">
				<view class="tab" @tap="change(k)" :class="itemIndex == k ? 'active' : ''" v-for="(v,k) in datas" :key="k">{{v}}</view>
			</view>
		</view>
		<mescroll-uni :down="downOption" @down="downCallback" :up="upOption" @up="upCallback" @init="mescrollInit"
		 @emptyclick="emptyClick" @topclick="topClick">
			<view class="lists">
				<view class="list" @tap="goDetail(v.id)" v-for="(v,k) in list" :key="k">
					<view class="content">{{v.content}}</view>
					<view class="state">
						<view style="color: #007AFF;" v-if="v.disposed == 1">已处理</view>
						<view style="color: #E83131;" v-if="v.disposed == 0">未处理</view>
						<view>{{v.createDate}}</view>
					</view>
				</view>
			</view>
		</mescroll-uni>
	</view>
</template>

<script>
	import MescrollUni from "../../components/mescroll-uni/mescroll-uni.vue"
	import {ajax} from '../../common/js/util.js'
	import toast from '../../common/js/toast.js'
	export default {
		data() {
			return {
				datas: ['全部', '已处理', '未处理'],
				itemIndex: 0,
				itemType: 0,
				list: [],
				totalPage: 2,
				state: false,
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
						size: 8, // 每页数据的数量
						time: null // 加载第一页数据服务器返回的时间; 防止用户翻页时,后台新增了数据从而导致下一页数据重复;
					},
					noMoreSize: 5, // 如果列表已无数据,可设置列表的总数量要大于等于5条才显示无更多数据;避免列表数据过少(比如只有一条数据),显示无更多数据会不好看
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
						tip: '还没有数据', // 提示
						// btnText: '去逛逛 >' // 按钮
					}
				}
			}
		},
		components: {
			MescrollUni
		},
		onShow() {
			if(this.mescroll){
				this.list = [] // 在这里手动置空列表,可显示加载中的请求进度
				this.mescroll.resetUpScroll() // 刷新列表数据
			}
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
			change(k) {
				if(this.state) {
					return false
				}
				this.itemIndex = k
				this.state = true
				if (this.itemType != k) {
					this.itemType = k
					this.list = [] // 在这里手动置空列表,可显示加载中的请求进度
					this.mescroll.resetUpScroll() // 刷新列表数据
				}
			},
			goDetail(id) {
				uni.navigateTo({
					url: '../jubaojiluDetail/jubaojiluDetail?id='+id
				})
			},// mescroll组件初始化的回调,可获取到mescroll对象
			mescrollInit(mescroll) {
				this.mescroll = mescroll
			},
			/*下拉刷新的回调 */
			downCallback(mescroll) {
				// 这里加载你想下拉刷新的数据, 比如刷新轮播数据
				// loadSwiper();
				// 下拉刷新的回调,默认重置上拉加载列表为第一页 (自动执行 mescroll.num=1, 再触发upCallback方法 )
				this.list = []
				mescroll.resetUpScroll()
			},
			/*上拉加载的回调: mescroll携带page的参数, 其中num:当前页 从1开始, size:每页数据条数,默认10 */
			upCallback(mescroll) {
				let pageNum = mescroll.num // 页码, 默认从1开始
				let pageSize = mescroll.size // 页长, 默认每页10条
				let self = this
				if (this.itemType === 0) {
					self.init('2',mescroll)
				} else if (this.itemType === 1) {
					self.init('1',mescroll)
				} else if (this.itemType === 2) {
					self.init('0',mescroll)
				} 
			},
			// 点击回到顶部按钮的回调
			topClick() {
				console.log('点击了回到顶部按钮');
			},
			unescape: function(html) {
				return html
					.replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
					.replace(/&lt;/g, "<")
					.replace(/&gt;/g, ">")
					.replace(/&quot;/g, "\"")
					.replace(/&ldquo;/g, "“")
					.replace(/&rdquo;/g, "”")
					.replace(/&#39;/g, "\'");
			},
			init(states,mescroll) {
				let self = this
				let datas = {
					uid: uni.getStorageSync('uid'),
					disposed: states,
					pageNum: mescroll.num,
					pageSize: mescroll.size
				}
				toast.showLoading('加载中...')
				let data = {
					url: '/appealReport/list',
					data: datas,
					header: {
						"Content-Type": "application/x-www-form-urlencoded"
					},
					success: function(res) {
						console.log(res)
						if (res.data.success == true) {
							toast.hideLoading()
							if(res.data.body.pageInfo.list){
								let list = res.data.body.pageInfo.list
								list.forEach((item) =>{
									item.content = self.unescape(item.content)
									self.list.push(item)
								})
							}
							self.state = false
						}
						if(res.data.body.pageInfo.list == undefined){
							res.data.body.pageInfo.list = []
						}
						// 接口返回的当前页数据列表 (数组)
						let curPageData = res.data.body.pageInfo.list
						// 接口返回的总页数 (比如列表有26个数据,每页10条,共3页; 则totalPage值为3)
						let totalPage = res.data.body.pageInfo.pages
						mescroll.endByPage(curPageData.length, totalPage)
					}
				}
				ajax(data)
			}
		}
	}
</script>

<style>
	page {
		width: 100%;
		height: 100%;
	}

	.contain {
		width: 100%;
		height: 100%;
		background: #F6F6F6;
	}

	.wrapper {
		width: 100%;
		height: 70upx;
		display: flex;
		flex-direction: column;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 999;
		background: #fff;
		border-bottom: 1px solid #eee;
		border-top: 1px solid #eee;
	}

	.tabs {
		width: 100%;
		height: 70upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #FFFFFF;
		box-sizing: border-box;
	}

	.tab {
		height: 70upx;
		font-size: 14px;
		color: #333;
		padding: 16upx 0;
		box-sizing: border-box;
	}

	.active {
		color: #3175E4;
		border-bottom: 2px solid #3175E4;
	}

	.lists {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-top: 72upx;
	}

	.list {
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 30upx;
	}

	.content {
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		font-size: 12px;
		color: #333;
		text-align: justify;
	}
	
	.state {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		color: #999;
		padding-top: 20upx;
	}
	
	.public {
		position: fixed;
		left: 50%;
		bottom: 40upx;
		width: 140upx;
		height: 140upx;
		margin-left: -70upx;
	}
</style>
