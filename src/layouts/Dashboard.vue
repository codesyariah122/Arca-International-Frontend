<template>
	<div>
    <NavigationUser v-if="role_nav.user" :auth_check="auth_check"/>
    <NavigationAdmin v-if="role_nav.admin" :auth_check="auth_check"/>
		<slot/>
	</div>
</template>

<script>
  import {NavigationUser, NavigationAdmin} from '@/components/Layouts/Partials/Dashboard'

  export default {
    data(){
      return{
        role_nav: {
          user: '',
          admin: ''
        }
      }
    },
    components: {
      NavigationUser,
      NavigationAdmin
    },
    mounted(){
      this.AuthCheck(),
      this.CheckRoles()
    },

    computed:{
      auth_check(){
        return this.$store.getters.getAuthCheck
      }
    },

    methods:{
      AuthCheck(){
        this.$store.commit('CheckAuth', 'auth_check')
      },
      CheckRoles(){
        const check = this.auth_check ? this.auth_check.roles.includes("USER") : ''
        if(check){
          this.role_nav.user = true
          this.role_nav.admin = false
        }else{
          this.role_nav.user = false
          this.role_nav.admin = true
        }
      }
    }
  }
</script>
