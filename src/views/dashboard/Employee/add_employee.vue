<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->

				<!-- Form Add Employee -->
				<AddEmployee :title="title"/>
				<!-- end Form Add Employee -->
			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, AddEmployee} from '@/components'

	export default{
		name: 'dashboard.add.employee',
		data(){
			return {
				title: 'Add New Employee'
			}
		},
		components:{
			TopNav,
			AddEmployee
		}
	}
</script>