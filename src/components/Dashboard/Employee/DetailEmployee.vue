<template>
	<div>

		<div class="col-md-8 col-xs-12 col-sm-12">
			<div class="card" style="width: 18rem;">
				<div class="card-body">
					<h5 class="card-title" v-html="title"></h5>
					<div v-if="detail_employee[0]">
						<PayoutBonus :detail_employee="detail_employee[0]" :formatDate="formatDate"/>
					</div>
					<div v-else>
						<PayoutWithoutBonus :detail_employee="detail_employee" :formatDate="formatDate"/>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	import {PayoutBonus, PayoutWithoutBonus} from './Payout'

	export default{
		props: ['title', 'detail_employee', 'formatDate'],
		components: {
			PayoutBonus,
			PayoutWithoutBonus
		}
	}
</script>

<style>
	.detail-payout, ol{
		list-style: none;
	}
</style>