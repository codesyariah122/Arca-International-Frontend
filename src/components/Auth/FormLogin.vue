<template>

    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-lg-12">

                <!-- <pre>
                    {{ register_data }}
                </pre> -->

                <div v-if="loginFailed" class="alert alert-danger">
                    {{ messageFailed }}
                </div>

                <div v-if="check_register">
                    <div v-if="register_data.status === 'INACTIVE'" class="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Hai {{ register_data.name }}!</strong> Silahkan aktivasi akun anda, melalui email inbox anda : {{ register_data.email }}.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>

                <div class="card border-0 rounded shadow">
                    <div class="card-body">
                        <h4 class="text-center">LOGIN DASHBOARD</h4>
                        <hr>
                        <form @submit.prevent="LoginProcess">
                            <div class="form-group mb-3">
                                <label for="email">Email address</label>
                                <input type="email" v-model="user.email" class="form-control mt-2"
                                placeholder="Email Address" id="email">
                            </div>
                            <div v-if="validation.email" class="mt-2 alert alert-danger rounded-pill">
                                {{ validation.email[0] }}
                            </div>

                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" class="form-control mt-2"
                                placeholder="Password" id="password">
                            </div>
                            <div v-if="validation.password" class="mt-2 alert alert-danger rounded-pill">
                                {{ validation.password[0] }}
                            </div>

                            <div class="d-grid gap-2 mt-5">
                                <button type="submit" class="btn btn-primary btn-block rounded-pill mt-2 mb-3">
                                    <div v-if="loading">
                                        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </div>
                                    <div v-else>
                                        <i class="fas fa-fw fa-sign-in-alt"></i> <span>LOGIN</span>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
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

        data(){
            return{
                loading: null,
                user: {
                    email:'',
                    password: ''
                },
                validation: [],
                loginFailed: '',
                messageFailed: '',
                register_data: {}
            }
        },

        computed: {
            check_register(){
                return this.$store.getters.getCheckRegister
            },
            auth_check(){
                return this.$store.getters.getAuthCheck
            }
        },

        mounted(){
            this.RegisterCheck(),
            this.AuthCheck()
        },

        methods:{
            RegisterCheck(){
                this.$store.commit('CheckRegister', 'register_success')
                if(this.check_register){
                    axios.get(`https://arca-international-backend.herokuapp.com/api/check_register/${this.check_register}`)
                    .then(res => {
                        this.register_data = res.data.data
                        if(this.register_data.status === "INACTIVE"){
                            this.$toast.success(`Halo ${this.register_data.name}, registrasi anda berhasil. Silahkan check email inbox anda : ${this.register_data.email}`,{
                                position: 'top',
                                duration:1500
                            })
                        }
                    })
                }
            },

            AuthCheck(){
                this.$store.commit('CheckAuth', 'auth_check')
                if(this.auth_check.token){
                    // console.log(this.auth_check.roles)
                    this.$toast.success(`Anda telah login sebagai ${this.auth_check.roles.includes("USER") ? "User" : "Admin"}`,{
                        position: 'top',
                        duration:1500
                    })
                    setTimeout(()=>{
                        return this.$router.push({
                            name: (this.auth_check.roles.includes("USER")) ? 'dashboard.user' : 'dashboard.admin'
                        })
                    }, 1000)
                }
            },


            LoginProcess(){
                this.loading = true
                let data = {
                    email: this.user.email,
                    password: this.user.password
                }
                console.log(data)

                axios.post('https://arca-international-backend.herokuapp.com/api/login', {
                    email: data.email,
                    password: data.password
                })
                .then(res => {
                    this.validation = []
                    if(res.data.success){
                        // console.log(res.data)
                        this.loading  = false

                        // check role user
                        if(res.data.data.roles){
                            const auth_check = {
                                name: res.data.data.name,
                                roles: res.data.data.roles,
                                token: res.data.token
                            }

                            //store to storage
                            localStorage.setItem('auth_check', JSON.stringify(auth_check))

                            // redirect to dashboard
                            this.$router.push({
                                name: 'dashboard.user'
                            })
                        }
                    }
                    this.loading = false
                    this.loginFailed = true
                    this.messageFailed = res.data.message
                })
                .catch(err => {
                    console.log(err)
                    this.messageFailed = ''
                    this.loading = false
                    this.validation = err.response.data
                })
            }

        },



    }
</script>