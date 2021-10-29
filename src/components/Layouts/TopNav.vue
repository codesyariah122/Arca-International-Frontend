<template>
	<div>
		<nav class="navbar top-navbar navbar-transparent px-5">
			<a class="btn border-0" id="menu-btn" @click="NavigationSetup"><i class="fas fa-bars"></i></a>
		</nav>
	</div>
</template>

<script>
	export default{
		methods: {
			NavigationSetup(){
				let sidebar = document.querySelector("#sidebar"), container = document.querySelector(".my-container");
				sidebar.classList.toggle('active-nav')
				container.classList.toggle('active-cont')
			}
		}
	}
</script>