<template>
	<div>
		<ul class="detail-payout">
			<li>
				<strong>Honor : {{ Rupiah(detail_employee.honor) }}</strong>
			</li>
			<li v-if="detail_employee.bonus">
				<strong>
					Bonus : {{ detail_employee.percentage }}%
				</strong>
				<ol>
					<li>
						<strong>
							Payout : {{ Rupiah(detail_employee.bonus)}}
						</strong>
					</li>
				</ol>
			</li>
			<li class="mt-3">
				<strong>Total Income : {{ Rupiah(total_income) }}</strong>
			</li>
		</ul>
		<router-link to="/dashboard/employee" class="card-link">Back To Employee</router-link>
	</div>
</template>

<script>
	export default{
		props: ['detail_employee', 'formatDate'],

		data(){
			return {
				total_income: this.detail_employee.bonus + this.detail_employee.honor
			}
		},

		methods: {
			Rupiah(number){
				return new Intl.NumberFormat("id-ID", {
					style: 'currency',
					currency: 'IDR'
				}).format(number)
			}
		}
	}
</script>