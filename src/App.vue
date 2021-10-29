<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
  const defaultlayout = null
  const dashboardlayout = null
  import {Default, Dashboard} from '@/layouts'


  export default{
    name: 'App',
    components: {
      Default,
      Dashboard
    },
    computed: {
      layout(){
        return (this.$route.meta.layout || defaultlayout || dashboardlayout)
      }
    }
  }
</script>


