<script>
	import "../theme.postcss"
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import {AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton'
  import Sidebar from "../../src/components/Sidebar.svelte";
	
	
let sidebar_show = false;
 </script>

<Sidebar bind:show={sidebar_show} />

<AppShell>


	<AppBar> 
	<nav class=' grid grid-cols-2 md:grid-cols-4 items-center text-xl px-[8%] py-2 w-[100vw]'>
		
			<div class="">
				<a class="text-2xl font-black " href="/">My cute kittens</a>
			</div>
	
	
	<div class="hidden md:flex md:justify-evenly md:col-span-2">
		<a href="/about">About</a>
		<a href="/kittens">Kittens</a>
		<a href="/resources">Resources</a>
		</div>
	
	<div class="flex justify-end items-center md:hidden">
	<LightSwitch />
	<button on:click={() => sidebar_show = !sidebar_show}>
		<i class="fa-solid text-3xl ml-4  fa-bars"></i>
	</button>
	
	</div>
	<div class="hidden  md:flex items-center md:justify-end  ">
		<LightSwitch />
		<a href="/contact" class="btn ml-4 btn-filled-primary btn-base"
		>Contact</a>
	</div>
	</nav>
	
	</AppBar>
<div class="layout">
<slot />
</div>

</AppShell>
<style global>

	.layout {
		@apply container h-full mx-auto flex justify-center items-center;
	}

	.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
aside {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #aaa;
  background: #fff;
  overflow-y: auto;
	width: 350px;
	z-index: 100;
}
</style>