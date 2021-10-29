<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!--End Top Nav -->
				<Welcome :title="title" :auth_check="auth_check"/>
			</div>
		</div>
	</div>
</template>

<script>
	import {Welcome, TopNav} from '@/components'

	export default{
		name: 'home',
		components: {
			Welcome,
			TopNav
		},
		data(){
			return{
				title: `arca international 💻 📱 Dashboard Management`
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
		}
	}
</script>

