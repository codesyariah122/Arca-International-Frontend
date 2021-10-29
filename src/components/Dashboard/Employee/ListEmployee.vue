<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-md-8 col-xs-12 col-sm-12">
				<h1 class="text-dark p-3 text-center" v-html="title"></h1>
			</div>


			<div class="col-md-10 col-xs-12 col-sm-12 mb-3">
				<div class="row">
					<div class="col-md-3 col-xs-12 col-sm-12 mb-3">
						<router-link to="/dashboard/add/employee" class="btn btn-success rounded">
							<i class="fas fa-folder-plus"></i> Add Employee
						</router-link>
					</div>
					<div class="col-md-3 col-xs-12 col-sm-12">
						<router-link to="/dashboard/add/projects" class="btn btn-primary rounded">
							<i class="fas fa-calculator"></i> Add Project
						</router-link>
					</div>
				</div>
			</div>
			<div class="col-md-10 col-xs-12 col-sm-12">
				<ListTable :employees="employees" :auth_check="auth_check" @delete-employee="DeleteEmployee"/>
			</div>
		</div>
	</div>
</template>

<script>
	import {ListTable} from './Molecules'

	export default{
		props: ['title'],
		components: {
			ListTable
		},
		mounted(){
			this.GetEmployee()
		},

		computed:{
			employees(){
				return this.$store.getters.getEmployee
			},
			auth_check(){
				return this.$store.getters.getAuthCheck
			}
		},

		methods: {
			GetEmployee(){
				this.$store.commit('EmployeeLists')
			},

			CheckAuth(){
				this.$store.commit('CheckAuth')
			},

			DeleteEmployee(id, name){
				// console.log(this.employees.splice(this.employees.indexOf(id), 1))
				this.$swal({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
					if (result.isConfirmed) {
						this.axios.delete(`https://arcacorp-frontend-test.netlify.app/api/employee/${id}`)
						.then(() => {
							// splice data
							this.employees.splice(this.employees.indexOf(id), id)
							this.$swal(
								'Deleted!',
								`${name} with ID Employee: ${id} has been deleted.`,
								'success'
							)
						})
					}
				})
			}
		}
	}
</script>