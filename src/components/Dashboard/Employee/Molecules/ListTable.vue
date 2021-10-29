<template>
	<div>
		<!-- <pre>
			{{ employees.length }}
		</pre> -->
		<div class="table-responsive">
			<table class="table table-dark table-bordered table-sm">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Honor</th>
						<th class="text-center">Otions</th>
					</tr>
				</thead>

				<tbody>
					<tr v-if="employees.length > 0" v-for="(employee, index) in employees">
						<td>
							{{ index+1 }}
						</td>
						<td>
							{{ employee.name }}
						</td>
						<td>
							{{ Rupiah(employee.honor) }}
						</td>
						<td>
							<div class="row justify-content-center">
								<div class="col-md-2 col-xs-12 col-sm-12 mb-2">
									<!-- detail option -->
									<router-link :to="`/dashboard/detail/employee/${employee.id}`" class="btn btn-primary rounded">
										<i class="fas fa-fw fa-binoculars"></i>
									</router-link>
								</div>
								<div class="col-md-2 col-xs-12 col-sm-12 mb-2" v-if="auth_check.roles.includes('ADMIN')">
									<!-- edit option -->
									<router-link :to="`/dashboard/edit/employee/${employee.id}`" class="btn btn-info rounded">
										<i class="fas fa-fw fa-edit"></i>
									</router-link>
								</div>

								<div class="col-md-2 col-xs-12 col-sm-12" v-if="auth_check.roles.includes('ADMIN')">
									<!-- delete option sending to parent component with event emit -->
									<a href="#" class="btn btn-danger rounded" @click="$emit('delete-employee', employee.id, employee.name)">
										<i class="fas fa-trash"></i>
									</a>
								</div>
							</div>
						</td>
					</tr>

					<tr v-else>
						<td class="text-center text-danger" colspan="15">
							No data
						</td>
					</tr>

				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['employees', 'auth_check'],
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