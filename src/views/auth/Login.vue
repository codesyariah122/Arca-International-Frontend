<template>
  <div>
  	<div class="container">
  		<div class="p-5 my-container active-cont">
	  		<div class="row justify-content-center">
	  			<div class="col-lg-12 col-xs-12 col-sm-12">
	  				<!-- Top Nav -->
					<TopNav/>
					<!--End Top Nav -->
	  			</div>

	  			<!-- Form Login -->
	  			<FormLogin/>
	  		</div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import {TopNav, FormLogin} from '@/components'

	export default {
		name:'login',
		components: {
			TopNav,
			FormLogin
		}
	}
</script>

<style>
	.active-cont h3{
		text-transform: capitalize;
	}
</style>