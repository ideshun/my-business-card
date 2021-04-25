<template>
	<view class="content">
		<d-business-card :cardInfo="cardInfo" :style="bgImg"/>
		<u-cell-group>
			<u-cell-item icon="setting-fill" title="个人设置"></u-cell-item>
			<u-cell-item icon="integral-fill" title="会员等级" value="新版本"></u-cell-item>
		</u-cell-group>
	</view>
</template>

<script>
import { myCard } from '@/api/data'
	export default {
		data() {
			return {
				cardInfo: {},
				bgImg: 'background-image: url(@/static/images/card-bg.png)'
			}
		},
		onLoad() {
			try {
				this.cardInfo = myCard()
			}catch(err) {
				this.cardInfo =  {
					name: '张三',
					age: '18',
					sex: '男',
					tel: '13800138000',
					webSite: 'https://www.w3h5.com',
					workingYears: '1',
					school: '北京大学',
					mail: 'job@w3h5.com',
					dreamPosition: '高级前端工程师',
					bgImg: '@/static/images/card-bg.png'
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
@import 'index.scss'
</style>
