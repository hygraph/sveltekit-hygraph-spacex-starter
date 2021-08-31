<script context="module">
  export const prerender = true
  export const ssr = false

  export async function load({ fetch }) {
    const res = await fetch('/launches.json')
    if (res.ok) {
      const { launches } = await res.json()
      return {
        props: { launches },
      }
    }
    const { message } = await res.json()
    return {
      error: new Error(message),
    }
  }
</script>

<script>
  export let launches
  console.log('=====================')
  console.log(`hello`)
  console.log('=====================')
</script>

<svelte:head>
  <title>SpaceX Explorers</title>
</svelte:head>

<h1 class="text-4xl">Welcome to Netlify Explorers</h1>
<p class="text-xl mb-8">
  Visit <a
    class="link hover:no-underline"
    href="https://kit.svelte.dev">kit.svelte.dev</a
  > to read the documentation
</p>

{#each launches as { slug, name, date }}
  <ul>
    <li
      class="border-primary border rounded-xl my-5 p-5 transition hover:bg-primary"
    >
      <a sveltekit:prefetch href="/mission/{slug}">
        <h2 class="text-3xl">{name}</h2>
        <time>{new Date(date)}</time>
      </a>
    </li>
  </ul>
{/each}
