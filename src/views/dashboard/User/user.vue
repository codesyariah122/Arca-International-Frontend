<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->
				<WelcomeUser :title="title" :auth_check="auth_check"/>
			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, WelcomeUser} from '@/components'

	export default {
		name: 'dahboard.user',
		components: {
			TopNav,
			WelcomeUser
		},

		data(){
			return{
				title: 'Welcome to user dashboard'
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

            AuthCheck(){
            	this.$store.commit('CheckAuth', 'auth_check')
            	if(this.auth_check){
	            	if(this.auth_check.token){
	            		// console.log(this.auth_check.roles)
	            		this.$toast.warning(`Anda sedang menggunakan role ${this.auth_check.roles.includes("USER") ? "User" : "Admin"}`,{
	            			position: 'top',
	            			duration:1500
	            		})
	            		setTimeout(()=>{
	            			return this.$router.push({
	            				name: (this.auth_check.roles.includes("USER")) ? 'dashboard.user' : 'dashboard.admin'
	            			})
	            		}, 1000)
	            	}
            	}else{
            		this.$toast.error('Anda belum login', {
            			position: 'top',
            			duration: 1000
            		})
            		return this.$router.push({
            			name: 'login'
            		})
            	}


            },
		}
	}
</script>