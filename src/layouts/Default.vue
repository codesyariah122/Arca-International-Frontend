<template>
	<div>
		<Navigation/>
		<slot/>
	</div>
</template>

<script>
  import {Navigation} from '@/components'

  export default {
    components: {
      Navigation
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  background-color: #fff;
}
</style>
