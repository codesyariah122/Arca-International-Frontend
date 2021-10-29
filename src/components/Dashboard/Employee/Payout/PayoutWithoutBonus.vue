<template>
	<div>
		<h6 class="card-subtitle mb-2 text-muted">
			Updated At : {{ formatDate(detail_employee.updated_at) }}
		</h6>
		<ul>
			<li>
				<strong>Honor : {{ Rupiah(detail_employee.honor) }}</strong>
			</li>
			<li>
				<strong>Bonus : <span class="badge bg-info text-dark">no bonus</span></strong>
			</li>
		</ul>
		<router-link to="/dashboard/employee" class="card-link">Back To Employee</router-link>
	</div>
</template>


<script>
	export default {
		props: ['detail_employee', 'formatDate'],
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