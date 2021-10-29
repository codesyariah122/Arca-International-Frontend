<template>
	<div>
		<div
			class="side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
			id="sidebar"
			>
			<ul class="nav flex-column text-white w-100">
				<a href="/" class="nav-link h3 text-white my-2">
					<Logo/> <span class="brand"> {{ brand }} </span>
				</a>

				<div v-if="auth_check.token">
					<li class="nav-link">
						<router-link v-if="auth_check.roles.includes('USER')" style="text-decoration: none; color:#fff;" :to="`/dashboard/${auth_check.roles.includes('USER') ? 'User' : ''}`">
							<i class="fas fa-fw fa-user-tie"></i> {{ auth_check.name }}
						</router-link>
						<router-link v-if="auth_check.roles.includes('ADMIN')" style="text-decoration: none; color:#fff;" :to="`/dashboard/${auth_check.roles.includes('ADMIN') ? 'admin' : ''}`">
							<i class="fas fa-fw fa-user-tie"></i> {{ auth_check.name }}
						</router-link>
					</li>
					<li class="nav-link">
						<a style="text-decoration: none; color:#fff;" href="#" @click="Logout"><i class="fas fa-fw fa-sign-in-alt"></i> <span class="mx-2">Logout</span></a>
					</li>
				</div>
				<div v-else>
					<li class="nav-link">
						<router-link style="text-decoration: none; color:#fff;" to="/login"><i class="fas fa-fw fa-sign-in-alt"></i> <span class="mx-2">Login</span></router-link>
					</li>
					<li class="nav-link">
						<router-link style="text-decoration: none; color:#fff;" to="/register"><i class="fas fa-fw fa-user-plus"></i> <span class="mx-2">Register</span></router-link>
					</li>
				</div>
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
		components: {
			Logo
		},
		data(){
			return{
				brand: 'arca international'
			}
		},

		mounted(){
			this.AuthCheck()
		},

		computed:{
			auth_check(){
                return this.$store.getters.getAuthCheck
            }
		},

		methods:{
			AuthCheck(){
                this.$store.commit('CheckAuth', 'auth_check')
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