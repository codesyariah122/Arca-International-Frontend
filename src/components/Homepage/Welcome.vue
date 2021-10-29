<template>
	<div>
		<div class="row justify-content-center">
			<div class="col-lg-10 col-xs-12 col-sm-12">
				<div v-if="auth_check.token">
					<div class="alert alert-primary" role="alert">
						Halo, {{ auth_check.name }}
					</div>
				</div>
			</div>
		</div>

		<div class="col-md-6 col-xs-8 col-sm-8">
			<h3 class="text-dark p-3" v-html="title"></h3>
			<p class="px-3">
				Welcome in Arca International Dashboard Management
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['title', 'auth_check']
	}
</script>

<style>
	h3{
		text-transform: capitalize;
	}
</style>