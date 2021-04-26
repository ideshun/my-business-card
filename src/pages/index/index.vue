<template>
	<view class="content">
		<d-business-card :cardInfo="cardInfo" theme="default"/>
		<u-cell-group title="设置喜好">
			<u-cell-item title="个人设置" :arrow="false"></u-cell-item>
			<u-cell-item title="技术博客" :arrow="false" @click="goToWebsite(cardInfo.webSite, '前端资源网')"><text :user-select="true">{{ cardInfo.webSite }}</text></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
import { myCard } from '@/api/data'
	export default {
		data() {
			return {
				cardInfo: {},
			}
		},
		onLoad() {
			try {
				this.cardInfo = myCard()
			} catch (err) {
				this.cardInfo = {
					name: '张三',
					age: '18',
					sex: '男',
					tel: '13800138000',
					weChat: 'adeshun',
					webSite: 'https://www.w3h5.com',
					workingYears: '1',
					school: '北京大学',
					mail: 'job@w3h5.com',
					position: '前端开发工程师',
					dreamPosition: '高级前端开发工程师',
					companyName: '浪潮信息',
					qrcode: require('@/static/images/img-wx-qrcode.png'),
					bgImg: require('@/static/images/card-bg.png'),
					address: '汉峪金谷A6-4'
				}
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
