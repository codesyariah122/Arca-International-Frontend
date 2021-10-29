<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->

				<!-- Table list employee -->
				<ListEmployee :title="title"/>
				<!-- end Table list -->

			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, ListEmployee} from '@/components'

	export default{
		name: 'dashboard.employee',
		data(){
			return {
				title: "List Employee"
			}
		},
		components: {
			TopNav,
			ListEmployee
		},


	}
</script>

