<script lang="ts">
  import { onMount } from 'svelte';
  import { formatDistanceToNow } from 'date-fns';
  import { base } from '$app/paths';

  interface ComicResponse {
    img: string;
    alt: string;
    safe_title: string;
    year: number;
    month: number;
    day: number;
  }

  let comicData: ComicResponse | null = null;

  onMount(async () => {
    try {
      const email: string = 'a.barabanova@innopolis.university';
      const params = new URLSearchParams({ email: email });
      const response: Response = await fetch(
        `https://fwd.innopolis.university/api/hw2?${params.toString()}`
      );
      const comicId: string = await response.json();

      const comicParams = new URLSearchParams({ id: comicId });
      const comicResponse: Response = await fetch(
        `https://fwd.innopolis.university/api/comic?${comicParams.toString()}`
      );

      comicData = await comicResponse.json();
    } catch (error: unknown) {
      console.error('Error:', error);
    }
  });
</script>

<!-- <svelte:head>
  <title>Comic</title>
  <meta name="homework2" content="Comic description" />
</svelte:head> -->

<body>
  <div id="comic-page">
  {#if comicData}
    <h1>{comicData.safe_title}</h1>
    <img src={comicData.img} alt={comicData.alt}>
    <p>{new Date(comicData.year, comicData.month - 1, comicData.day).toLocaleDateString()}</p>
    <p>{formatDistanceToNow(new Date(comicData.year, comicData.month - 1, comicData.day))} ago</p>
  {/if}
</div>
</body>


<style>
  	body {
		margin: 0;
	}
  #comic-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #4c631d;
  }
</style>
