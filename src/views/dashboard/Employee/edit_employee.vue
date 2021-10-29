<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->

				<!-- Form Add Employee -->
				<EditEmployee :title="title"/>
				<!-- end Form Add Employee -->
			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, EditEmployee} from '@/components'

	export default{
		name: 'dashboard.employee.edit',
		data(){
			return {
				title: `Edit Employee With ID : ${this.$route.params.id}`
			}
		},
		components:{
			TopNav,
			EditEmployee
		}
	}
</script>