<template>
	<view class="content">
		<d-business-card :cardInfo="cardInfo" theme="default"/>
		<view class="cell-box">
			<u-cell-group title="个人资料" :title-style="{'font-size': '32rpx', 'font-weight': '600', color: '#666666'}">
				<u-cell-item title="期望职位" :arrow="false" :value="cardInfo.dreamPosition" />
				<u-cell-item title="期望薪资" :arrow="false" :value="cardInfo.salary" />
				<u-cell-item title="技术博客" :arrow="false" @click="goToWebsite(cardInfo.webSite, '前端资源网')"><text :user-select="true">{{ cardInfo.webSite }}</text></u-cell-item>
				<u-cell-item title="专业证书" :arrow="false" value="平面设计师" />
				<u-cell-item title="获得荣誉" :arrow="false" value="腾讯云+社区 人气作者" />
				<u-cell-item title="技能清单" :arrow="false" :value-style="{'padding-left': '20rpx'}">
					<u-tag class="cell-item-tag" text="HTML5" mode="light" type="warning" :closeable="false" />
					<u-tag class="cell-item-tag" text="CSS3" mode="light" type="primary" :closeable="false" />
					<u-tag class="cell-item-tag" text="Vue" mode="light" type="success" :closeable="false" />
					<u-tag class="cell-item-tag" text="Sass" mode="light" type="error" :closeable="false" />
					<u-tag class="cell-item-tag" text="Git" mode="light" type="info" :closeable="false" />
					<u-tag class="cell-item-tag" text="webpack" mode="light" type="warning" :closeable="false" />
					<u-tag class="cell-item-tag" text="uni-app" mode="light" type="success" :closeable="false" />
					<u-tag class="cell-item-tag" text="Echarts" mode="light" type="error" :closeable="false" />
					<u-tag class="cell-item-tag" text="Ant-Design" mode="light" type="primary" :closeable="false" />
					<u-tag class="cell-item-tag" text="uView" mode="light" type="success" :closeable="false" />
				</u-cell-item>
				<u-cell-item title="一句话介绍" :arrow="false" :border-bottom="false" :value-style="{'padding-left': '20rpx', 'text-align': 'left', 'font-size': '24rpx', 'line-height': '36rpx'}" value="就是很帅。" />
			</u-cell-group>
		</view>
	</view>
</template>

<script>
import { myCard } from '@/api/data'
	wx.showShareMenu({
		withShareTicket: true,
		menus: ['shareAppMessage', 'shareTimeline']
	})
	export default {
		data() {
			return {
				cardInfo: {}
			}
		},
		onShareAppMessage: function () {
			return {
				title: `分享：${this.cardInfo.nickName}的名片，点击查看！`,
			}
		},
		onLoad() {
			try {
				this.cardInfo = myCard()
			} catch (err) {
				this.$logs('获取信息失败')
			}
		},
		methods: {
			goToWebsite (url, title) {
				this.$changePage({
					url: 'pages/webView/index',
					params: {
						url: url,
						title: title
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
@import 'index.scss'
</style>
