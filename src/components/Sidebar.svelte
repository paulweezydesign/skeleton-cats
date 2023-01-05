<script>

    import { fly } from 'svelte/transition';
    
    import { fade } from 'svelte/transition';
    function overlay_click(e) {
        if ('close' in e.target.dataset)
            show = false;
    }
    export let show = false;
    let sidebar_show = false;
    </script>





 {#if show}
    <div  class="modal-overlay" on:click={() => { show = false;}} />
     <aside class="text-black dark:text-white bg-[#aaa] dark:bg-black" transition:fly={{x: 250, opacity: 1}}>
         <button class="text-4xl" on:click={() => { show = false;}}>
       &times;
        </button>
     <h1>Menu</h1>
       </aside>
 
 
 {/if}

 <style>
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
  border-left: 1px solid 
  #000;
  
  overflow-y: auto;
	width: 350px;
	z-index: 100;
}
</style>