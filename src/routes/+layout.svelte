<script>
	import "../theme.postcss"
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
</script>

<nav class="flex justify-evenly text-xl py-4">
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/kittens">Kittens</a>
	<a href="/resources">Resources</a>
	<a href="/contact">Contact</a>
	
</nav>
<div class="layout">
<slot />
</div>


<style global>

	.layout {
		@apply container h-full mx-auto flex justify-center items-center;
	}
</style>