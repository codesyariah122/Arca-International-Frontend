<template>
	<div>
		<div class="container">
			<div class="p-5 my-container active-cont">
				<!-- Top Nav -->
				<TopNav/>
				<!-- end Top Nav -->

				<!-- Detail Employee -->
				<DetailEmployee :title="title" :detail_employee="detail_employee" :formatDate="formatDate"/>
				<!-- end Detail Employee -->
			</div>
		</div>
	</div>
</template>

<script>
	import {TopNav, DetailEmployee} from '@/components'

	export default {
		name: 'dashboard.employee.detail',
		components: {
			TopNav,
			DetailEmployee
		},

		data(){
			return{
				title: 'Detail Employee'
			}
		},

		mounted(){
			this.DetailEmployee()
		},
		computed: {
			detail_employee(){
				return this.$store.getters.getDetailEmployee
			}
		},

		methods: {
			DetailEmployee(){
				const id = this.$route.params.id
				this.$store.commit('DetailEmployee', id)
			},
			formatDate(date) {
				// console.log(date);
				const options = { year: 'numeric', month: 'long', day: 'numeric' }
				return new Date(date).toLocaleDateString('en', options)
			},
		}
	}
</script>