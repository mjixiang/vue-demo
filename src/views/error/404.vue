<template>
	<div style="text-align:center;">
		<h1>404</h1>
	</div>
</template>
<script>
export default {
	route:{
		data(){
			this.$dispatch('documentTitle','404页面');
		}
	}
}
</script>