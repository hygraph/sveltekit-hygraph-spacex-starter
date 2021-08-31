<script>
  import { fly } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div
    in:fly={{ x: -8, duration: 500, delay: 500 }}
    out:fly={{ x: 8, duration: 500 }}
  >
    <slot />
  </div>
{/key}
