<template>
	<div>
		<div class="col-md-12 col-xs-12 col-sm-12">
			<h3 class="text-dark p-3 text-center" v-html="title"></h3>
		</div>

		<div class="col-lg-12 col-xs-12 col-sm-12">
			<!-- Form Edit Employee -->
			<FormEditEmployee />
			<!-- end form edit -->
		</div>
	</div>
</template>

<script>
	import {FormEditEmployee} from './Form'

	export default{
		props: ['title'],
		components: {
			FormEditEmployee
		}
	}
</script>