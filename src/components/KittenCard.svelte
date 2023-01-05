<script>
import cats from '../data.js'
</script>


  
{#each cats as cat}

<a href="/kittens/{cat.href}">
<div class="max-w-[275px] rounded hover:border-4 hover:border-primary-500 card mx-auto card-hover card-glass-surface">
<img class="w-[275px] h-[250px] rounded-t cover    " src={cat.src} alt="kitten pic" />
<div class="px-4 py-3">
 <h3 class=" text-black dark:text-white font-bold"> {cat.name}</h3>
 </div>
</div>
</a>

{/each}

