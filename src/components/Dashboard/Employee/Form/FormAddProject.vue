<template>
	<div>
		<div v-if="project.loading" class="d-flex justify-content-center">
			<img src="https://classroomclipart.com/images/gallery/Animations/Transportation/plane_flying_around_earth_5C.gif" class="img-fluid" width="250">
		</div>
		<form @submit.prevent="StoreProject">
			<div class="row justify-content-center">
				<div class="col-md-8 col-xs-12 col-sm-12 mb-3">
					<div class="form-group">
						<label for="name">Project Name</label>
						<input type="text" v-model="project.name" class="form-control mt-2" id="name"
						placeholder="Full Name">
					</div>
					<div v-if="validation.name" class="mt-2 alert alert-danger rounded-pill">
						{{ validation.name[0] }}
					</div>
				</div>
				<div class="col-md-8 col-xs-12 col-sm-12 mb-3">
					<div class="form-group">
						<label for="payout">Payout</label>
						<input type="number" v-model="project.payout" class="form-control mt-2"
						placeholder="00000000" id="payout">
					</div>
					<div v-if="validation.payout" class="mt-2 alert alert-danger rounded-pill">
						{{ validation.payout[0] }}
					</div>
				</div>

				<div class="col-md-8 col-xs-12 col-sm-12 mb-3 mt-5">
					<h6 class="blockquote-footer">Add Member</h6>
					<div class="form-group">
						<label for="team">Member - 1</label>
						<select class="form-select" aria-label="Default select example" id="member1">
							<option selected>Open this select menu</option>
							<option v-for="team in teams" :value="team.id"> {{ team.name }} </option>
						</select>
					</div>

					<div class="form-group">
						<label for="team">Member - 2</label>
						<select class="form-select" aria-label="Default select example" id="member2">
							<option selected>Open this select menu</option>
							<option v-for="team in teams" :value="team.id"> {{ team.name }} </option>
						</select>
					</div>

					<div class="form-group">
						<label for="team">Member - 3</label>
						<select class="form-select" aria-label="Default select example" id="member3">
							<option selected>Open this select menu</option>
							<option v-for="team in teams" :value="team.id"> {{ team.name }} </option>
						</select>
					</div>
				</div>

				<div class="col-md-8 col-xs-12 col-sm-12 mt-2">
					<div class="d-grid gap-1">
						<button type="submit" class="btn btn-primary btn-block rounded-pill">
							<div v-if="project.loading">
								<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
								Waiting ...
							</div>
							<div v-else>
								<i class="fas fa-fw fa-save"></i> <span>Save Project</span>
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
	export default {
		props: ['teams'],
		data(){
			return{
				project:{},
				validation: {}
			}
		},

		methods: {
			StoreProject(){
				this.project.loading = true
				let member1 = document.getElementById('member1').value
				let member2 = document.getElementById('member2').value
				let member3 = document.getElementById('member3').value

				let data = {
					project_name: this.project.name,
					payout: this.project.payout,
					employee_id: `${member1},${member2},${member3}`
				}

				this.axios.post('https://arca-international-backend.herokuapp.com/api/employee/projects', data)
				.then(res => {
					if(res.data.success){
						this.$swal({
							position: 'top-end',
							icon: 'success',
							title: `Project successfully added`,
							showConfirmButton: false,
							timer: 1500
						})
						setTimeout(() => {
							JSON.stringify(localStorage.setItem('project-name', data.project_name))
							this.project.loading = false
							this.$router.push({
								name: 'dashboard.project.detail'
							})
						}, 1500)
					}
				})
			}
		}
	}
</script>
