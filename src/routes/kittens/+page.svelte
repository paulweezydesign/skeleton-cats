<script>
  import KittenCard from "/src/components/KittenCard.svelte";



</script>
<section class="grid grid-cols-1 place-items-center h-screen layout">
<div class=" px-4">
<h1 class="text-7xl font-black">Let the cuteness beign...</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto  mt-6 gap-x-4 gap-y-6  ">  
      
      <KittenCard />

    </div>

    

</div>
</section>


<style>
    	.layout {
		@apply container h-full mx-auto flex justify-center items-center;
	}

</style>