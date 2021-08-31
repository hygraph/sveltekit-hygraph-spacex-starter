<script context="module">
  export const load = async ({ page }) => ({
    props: {
      key: page.path,
    },
  })
</script>

<script>
  import Header from '$lib/header.svelte'
  import PageTransition from '$lib/page-transition.svelte'
  import '../app.css'
  export let key
</script>

<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
  <Header />
  <main class="mx-auto max-w-3xl">
    <PageTransition refresh={key}>
      <slot />
    </PageTransition>
  </main>
</div>
