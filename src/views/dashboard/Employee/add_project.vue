<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->

				<!-- Form Add Bonus -->
				<AddProject :title="title"/>
				<!-- end Form Add Bonus -->
			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, AddProject} from '@/components'

	export default{
		name: 'dashboard.project.add',
		components: {
			TopNav,
			AddProject
		},
		data(){
			return {
				title: 'Add Project Team'
			}
		},

	}
</script>