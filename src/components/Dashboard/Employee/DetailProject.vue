<template>
	<div>

		<!-- Project Card -->
		<CardProject :title="title" :detail_projects="detail_projects" :formatDate="formatDate" :project_name="project_name"/>

	</div>
</template>

<script>
	import {CardProject} from './Project'

	export default{
		props: ['title'],
		data(){
			return {
				project_name: ''
			}
		},
		components: {
			CardProject
		},
			mounted(){
			this.getDetailProject()
		},
		computed: {
			detail_projects(){
				return this.$store.getters.getDetailProject
			}
		},

		methods: {
			getDetailProject(){
				this.project_name = localStorage.getItem('project-name')
				this.$store.commit('DetailProject', this.project_name)
			},

			formatDate(date) {
				console.log(date);
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
		}
	}
</script>

<style>
	.detail-payout, ol{
		list-style: none;
	}
</style>