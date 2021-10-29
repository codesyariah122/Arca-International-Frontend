<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->

				<!-- Detail Project -->
				<DetailProject :title="title"/>
				<!-- end Detail Project -->
			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, DetailProject} from '@/components'

	export default {
		name: 'dashboard.project.detail',
		components: {
			TopNav,
			DetailProject
		},

		data(){
			return{
				title: 'Detail Project'
			}
		},


	}
</script>