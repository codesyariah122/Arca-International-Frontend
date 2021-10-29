<template>
	<div>
		<div class="col-md-12 col-xs-12 col-sm-12">
			<h3 class="text-dark p-3 text-center" v-html="title"></h3>
		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12">
			<!-- Form Add Project-->
			<FormAddProject :teams="teams"/>
			<!-- End Add Project -->
		</div>
	</div>
</template>

<script>
	import {FormAddProject} from './Form'

	export default{
		props: ['title'],
		components: {
			FormAddProject
		},
		mounted(){
			this.GetTeamProject()
		},

		computed:{
			teams(){
				return this.$store.getters.getTeam
			},
			auth_check(){
				return this.$store.getters.getAuthCheck
			}
		},

		methods: {
			GetTeamProject(){
				this.$store.commit('GetTeamProject')
			},
		}
	}
</script>