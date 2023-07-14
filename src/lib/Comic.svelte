<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';

	interface ComicResponse {
		img: string;
		alt: string;
		safe_title: string;
		year: number;
		month: number;
		day: number;
	}
	export let comicData: ComicResponse | null = null;
</script>

<body>
	<div id="comic-page">
		{#if comicData}
			<h1>{comicData.safe_title}</h1>
			<img src={comicData.img} alt={comicData.alt} />
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
