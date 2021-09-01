<script context="module">
  export function load({ error, status }) {
    return {
      props: { error, status },
    }
  }
</script>

<script>
  export let error, status
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h1 class="text-4xl mb-8">Uh oh!</h1>

<p class="text-xl mb-8">
  It looks like you've hit a page that doesn't exist!
</p>

<h2 class="text-3xl mb-8">{status}: {error.message}</h2>
