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

<svelte:head>
  <title>Comic</title>
  <meta name="homework2" content="Comic description" />
</svelte:head>

<div id="comic-page">
  <a href="{base}/" id="home-link">Back to Home</a>
  {#if comicData}
    <h1>{comicData.safe_title}</h1>
    <img src={comicData.img} alt={comicData.alt}>
    <p>{new Date(comicData.year, comicData.month - 1, comicData.day).toLocaleDateString()}</p>
    <p>{formatDistanceToNow(new Date(comicData.year, comicData.month - 1, comicData.day))} ago</p>
  {/if}
</div>

<style>
  #comic-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #4c631d;
  }

  #home-link {
    display: inline-block;
    color: white;
    background-color: #4c631d;
    text-decoration: none;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    left: 10px;
  }

  #home-link:hover {
    background-color: #365a14;
  }
</style>
