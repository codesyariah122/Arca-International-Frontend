<template>
	<div>
		<div v-if="employee.loading" class="d-flex justify-content-center">
			<img src="https://classroomclipart.com/images/gallery/Animations/Transportation/plane_flying_around_earth_5C.gif" class="img-fluid" width="250">
		</div>

		<!-- <pre>
			{{ employee }}
		</pre> -->
		<form @submit.prevent="UpdateEmployee">
			<div class="row justify-content-center">
				<div class="col-md-8 col-xs-12 col-sm-12 mb-3">
					<div class="form-group">
						<label for="name">Employee Name</label>
						<input type="text" v-model="employee.name" class="form-control mt-2" id="name"
						placeholder="Full Name">
					</div>
					<div v-if="validation.name" class="mt-2 alert alert-danger rounded-pill">
						{{ validation.name[0] }}
					</div>
				</div>
				<div class="col-md-8 col-xs-12 col-sm-12 mb-3">
					<div class="form-group">
						<label for="honor">Honor</label>
						<input type="number" v-model="employee.honor" class="form-control mt-2"
						placeholder="00000000" id="honor">
					</div>
					<div v-if="validation.honor" class="mt-2 alert alert-danger rounded-pill">
						{{ validation.honor[0] }}
					</div>
				</div>

				<div class="col-md-8 col-xs-12 col-sm-12 mt-2">
					<div class="d-grid gap-1">
						<button type="submit" class="btn btn-primary btn-block rounded-pill">
							<div v-if="employee.loading">
								<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								Waiting ...
							</div>
							<div v-else>
								<i class="fas fa-fw fa-save"></i> <span>Update Employee</span>
							</div>
						</button>
					</div>
				</div>

				<div class="col-md-8 col-xs-12 col-sm-12 mt-5">
					<div class="d-grid gap-3">
						<router-link class="btn btn-success rounded-pill" to="/dashboard/employee"><i class="fas fa-fw fa-arrow-left"></i> Back</router-link>
					</div>
				</div>

			</div>
		</form>
	</div>
</template>

<script>
	import { useRoute } from 'vue-router'
	export default {
		data(){
			return{
				employee:{},
				router: useRoute(),
				validation: {}
			}
		},

		mounted(){
			this.DetailEmployee(this.router.params.id)
		},

		methods: {
			DetailEmployee(id){
				this.axios.get(`https://arca-international-backend.herokuapp.com/api/employee/${id}`)
				.then(res => {
					// console.log(res.data.data.length)
					if(res.data.data.length > 0){
						this.employee = res.data.data[0]
					}else{
						this.employee = res.data.data
					}
				})
				.catch(err => {
					console.log(err.response)
				})
			},

			UpdateEmployee(){
				const id = this.$route.params.id
				this.employee.loading = true

				this.axios.put(`https://arca-international-backend.herokuapp.com/api/employee/${id}`, {
					id: id,
					name: this.employee.name,
					honor: this.employee.honor
				})
				.then(res => {
					if(res.data.success){
						this.employee.loading = false
						this.$swal({
							position: 'top-end',
							icon: 'success',
							title: `${res.data.data.name} successfully updated`,
							showConfirmButton: false,
							timer: 1500
						})
						setTimeout(() => {
							this.$router.push({
								name: 'dashboard.employee'
							})
						}, 1500)
					}
				})
				.catch(err => {
					setTimeout(() => {
						this.employee.loading = false
						this.validation.name = err.response.data.name
						this.validation.honor = err.response.data.honor
					}, 2500)
				})
			}
		}
	}
</script>
