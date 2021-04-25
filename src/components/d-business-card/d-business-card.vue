<template>
	<view
    class="card-content"
  >
  {{ cardInfo.bgImg }}
	</view>
</template>

<script>
import { myCard } from '@/api/data'
	export default {
    props: {
      cardInfo: {
        type: Object,
        default: () => ({

        })
      },
    },
		data() {
			return {
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
@import 'd-business-card.scss'
</style>
