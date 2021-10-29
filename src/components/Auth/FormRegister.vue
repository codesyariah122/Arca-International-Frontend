<template>
	<div>
		<div class="col-lg-12 col-xs-12 col-sm-12">
			<div class="card border-0 rounded shadow">
				<div class="card-body">
					<h3 class="text-dark p-3 text-center">REGISTER</h3>

					<div v-if="user.loading" class="d-flex justify-content-center">
						<img src="https://classroomclipart.com/images/gallery/Animations/Transportation/plane_flying_around_earth_5C.gif" class="img-fluid" width="250">
					</div>

					<hr>
					<form @submit.prevent="register">
						<div class="row justify-content-center">
							<div class="col-md-8 mb-3">
								<div class="form-group">
									<label for="name">Full Name</label>
									<input type="text" v-model="user.name" class="form-control mt-2" id="name"
									placeholder="Full Name">
								</div>
								<div v-if="validation.name" class="mt-2 alert alert-danger rounded-pill">
									{{ validation.name[0] }}
								</div>
							</div>
							<div class="col-md-8 mb-3">
								<div class="form-group">
									<label for="email">Email address</label>
									<input type="email" v-model="user.email" class="form-control mt-2"
									placeholder="Email Address" id="email">
								</div>
								<div v-if="validation.email" class="mt-2 alert alert-danger rounded-pill">
									{{ validation.email[0] }}
								</div>
							</div>
						</div>

						<div class="row justify-content-center">
							<div class="col-md-8 mb-3">
								<div class="form-group">
									<label for="password">Password</label>
									<input type="password" v-model="user.password" class="form-control mt-2"
									placeholder="Password" id="password">
								</div>
								<div v-if="validation.password" class="mt-2 alert alert-danger rounded-pill">
									{{ validation.password[0] }}
								</div>
							</div>
							<div class="col-md-8">
								<div class="form-group">
									<label for="password2">Konfirmasi Password</label>
									<input type="password" v-model="user.password_confirmation" class="form-control mt-2"
									placeholder="Konfirmasi Password" id="password2">
								</div>
							</div>
						</div>
						<div class="d-grid gap-2 mt-5">
							<button type="submit" class="btn btn-primary btn-block rounded-pill">
								<div v-if="user.loading">
									<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
									Waiting ...
								</div>
								<div v-else>
									<span>REGISTER</span>
								</div>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { reactive, ref } from 'vue'
	import { useRouter } from 'vue-router'
	import axios from 'axios'

	export default {
		setup() {
            //inisialisasi vue router on Composition API
            const router = useRouter()
            //state user
            const user = reactive({
            	name: '',
            	email: '',
            	password: '',
            	password_confirmation: '',
            	loading: null
            })

            //state validation
            const validation = ref([])

            //method register
            function register() {
            	user.loading = true
                // //define variable
                let name = user.name
                let email = user.email
                let password = user.password
                let password_confirmation = user.password_confirmation

                //send server with axios
                axios.post('https://arca-international-backend.herokuapp.com/api/register', {
                	name,
                	email,
                	password,
                	password_confirmation
                })
                .then(res => {
                	console.log(res)
                	const data = res.data.data.id
                	user.loading = false
                	localStorage.setItem('register_success', JSON.stringify(data))
                	return router.push({
                		name: 'login'
                	})
                    //redirect ke halaman login

                }).catch(error => {
                    //set validation dari error response
                    validation.value = error.response.data
                })

            }

            return {
                user, // <-- state user
                validation, // <-- state validation
                register // <-- method register
            }

        }

    }
</script>