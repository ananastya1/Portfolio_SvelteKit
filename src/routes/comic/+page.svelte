<script context="module" lang="ts">
	import Comic from '../../lib/Comic.svelte';
	import type { Fetch } from '@sveltejs/kit';
	import { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ fetch }: LoadInput & { fetch: Fetch }): Promise<LoadOutput> {
		try {
			const email = 'a.barabanova@innopolis.university';
			const params = new URLSearchParams({ email: email });
			const response: Response = await fetch(
				`https://fwd.innopolis.university/api/hw2?${params.toString()}`
			);
			const comicId: string = await response.json();

			const comicParams = new URLSearchParams({ id: comicId });
			const comicResponse: Response = await fetch(
				`https://fwd.innopolis.university/api/comic?${comicParams.toString()}`
			);

			const comicData = await comicResponse.json();
			return {
				props: { comicData } // these props will be passed to your component
			};
		} catch (error: unknown) {
			console.error('Error:', error);
			return {
				status: 500, // Internal Server Error
				error: 'Failed to fetch comic'
			};
		}
	}
</script>

<svelte:head>
	<title>Comic</title>
	<meta name="description" content="About this app" />
</svelte:head>

<Comic />
