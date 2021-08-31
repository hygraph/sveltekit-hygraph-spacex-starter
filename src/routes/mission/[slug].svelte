<script context="module">
  export const prerender = true

  export async function load({ fetch, page: { params } }) {
    const { slug } = params
    const res = await fetch(`/mission/${slug}.json`)
    if (res.ok) {
      const { mission } = await res.json()
      return {
        props: { mission },
      }
    }
    const { message } = await res.json()
    return {
      error: new Error(message),
    }
  }
</script>

<script>
  export let mission
  let {
    date,
    name,
    launchSuccess,
    rocket,
    launchSite,
    link,
  } = mission
</script>

<svelte:head>
  <title>{name} | SpaceX Explorers</title>
</svelte:head>

<article>
  <h1 class="text-4xl">{name}</h1>
  <time class="text-sm mb-4 block">{new Date(date)}</time>
  {#if launchSuccess}
    <p class="text-xl mb-2">Launched Successfully</p>
  {:else}
    <p class="text-xl mb-2">Launched Failed</p>
  {/if}
  <p class="text-xl">
    <strong>Launch Site: </strong>
    {launchSite.longName}
  </p>
  <p class="text-xl mb-2">
    <strong>Launch Site Short Name: </strong>{launchSite.name}
  </p>
  <section>
    <h2 class="mb-4 text-3xl">Links:</h2>
    <ul class="text-xl mb-8 link">
      {#if link.articleLink}
        <li><a href={link.articleLink}>Article</a></li>
      {/if}
      {#if link.pressKit}
        <li><a href={link.pressKit}>Press Kit</a></li>
      {/if}
      {#if link.videoLink}
        <li><a href={link.videoLink}>Video Link</a></li>
      {/if}
      {#if link.wikipedia}
        <li><a href={link.wikipedia}>Wikipedia</a></li>
      {/if}
    </ul>

    {#if link.flickrImages.length > 0}
      <h3 class="text-2xl">Flickr Images:</h3>
      {#each link.flickrImages as image}
        <br />
        <img class="last:mb-8" src={image.url} alt={image.alt} />
      {/each}
    {/if}
  </section>
  <h3 class="mb-4 text-2xl">
    Rocket Name: {rocket.name}, Type: {rocket.type}
  </h3>
  <img src={rocket.image.url} alt={rocket.name} />
</article>
