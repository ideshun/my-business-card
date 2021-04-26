<template>
	<view class="content">
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	import { myCard } from '@/api/data'
	export default {
		data() {
			return {
				url: '',
			}
		},
		onLoad(e) {
			this.url = e.url
			if (e.title) {
				uni.setNavigationBarTitle({
					title: e.title
				});
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import 'index.scss'
</style>
