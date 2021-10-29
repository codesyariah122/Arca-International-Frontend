<template>
	<div>
		<div
			class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
			id="sidebar"
			>
			<ul class="nav flex-column text-white w-100">
				<a href="/dashboard/user" class="nav-link h3 text-white my-2">
					<Logo/> <span class="brand"> {{ brand }} </span>
				</a>
				<li class="nav-link">
					<router-link style="text-decoration: none; color:#fff;" to="/dashboard/employee"><i class="fas fa-id-card-alt fa-fw"></i> <span class="mx-2">Employee</span></router-link>
				</li>
				<li class="nav-link">
					<a style="text-decoration: none; color:#fff;" href="#" @click="Logout"><i class="fas fa-fw fa-sign-in-alt"></i> <span class="mx-2">Logout</span></a>
				</li>
				<li class="nav-link">
					<i class="fas fa-fw fa-comment-alt"></i>
					<span class="mx-2">Contact</span>
				</li>
			</ul>

			<span href="#" class="nav-link h4 w-100 mb-5">
				<a href=""><i class="bx bxl-instagram-alt text-white"></i></a>
				<a href=""><i class="bx bxl-twitter px-2 text-white"></i></a>
				<a href=""><i class="bx bxl-facebook text-white"></i></a>
			</span>
		</div>

	</div>
</template>


<script>
	import {Logo} from '@/components/Molecules'

	export default{
		props: ['auth_check'],
		components: {
			Logo
		},
		data(){
			return{
				brand: 'arca international',
				user: ''
			}
		},

		computed:{
			check_register(){
                return this.$store.getters.getCheckRegister
            }
		},

		mounted(){
			this.RegisterCheck()
		},

		methods: {
			RegisterCheck(){
                this.$store.commit('CheckRegister', 'register_success')
            },

			Logout(){
				this.$swal({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, logout'
				}).then((result) => {
					if (result.isConfirmed) {
						this.$swal(
							'Logout!',
							'Are You sure you want to exit the program',
							'success'
						)
						const id = this.check_register
						if(!this.auth_check.token){
							this.$router.push({
								name: 'login'
							})
						}
						this.axios.defaults.headers.common.Authorization = `Bearer ${this.auth_check.token}`
						this.axios.post('https://arca-international-backend.herokuapp.com/api/logout')
						.then(res => {
							if(res.data.success){
								this.$swal(`Bye ${this.auth_check.name}`, '', 'success')
								localStorage.removeItem('auth_check')
								return this.$router.push({
									name: 'login'
								})

							}
						})
						.catch(err => {
							console.log(err.response.data)
						})
					}
				})
			}
		}
	}
</script>