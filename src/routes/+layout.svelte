<script>
	import "../theme.postcss"
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
</script>
<div class="layout">
<slot />
</div>


<style global>

	.layout {
		@apply container h-full mx-auto flex justify-center items-center;
	}
</style>