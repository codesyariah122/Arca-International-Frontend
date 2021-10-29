<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-lg-12 col-xs-12 col-sm-12">
				<h2 class="card-title" v-html="title"></h2>
			</div>
		</div>

		<!-- <pre>
			{{ detail_projects }}
		</pre> -->

		<div class="row justify-content-center">
			<div v-for="detail in detail_projects" class="col-md-4 col-xs-12 col-sm-12">
				<div class="card">
					<div class="card-body">
						<h5>{{ project_name }}</h5>
						<ul class="list-group">
							<li class="list-group-item">
								<strong>Employee Name : {{ detail.name }}</strong>
							</li>
							<li class="list-group-item">
								<strong>Honor : {{ Rupiah(detail.honor) }}</strong>
							</li>
							<li class="list-group-item">
								<strong>Project Payout / {{ detail_projects.length }} : {{ Rupiah(detail.payout) }}</strong>
							</li>
							<li class="list-group-item">
								<strong>Percentage : {{ detail.percentage }}%</strong>
							</li>
							<li class="list-group-item">
								<strong>Total Bonus / Payout : {{ Rupiah(detail.bonus) }}</strong>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		props: ['title', 'project_name', 'detail_projects'],

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