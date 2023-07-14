<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<a href="{base}/">Home</a>
		<a href="{base}/comic">Comic</a>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<p>&copy; 2023 Anastasia Barabanova. All rights reserved.</p>
</footer>

<style>
	header {
		height: 53px;
		line-height: 53px;
		font-family: Opensans, sans-serif;
		background-color: white;
		color: black;
		text-align: center;
		padding: 0;
		margin: 0;
	}

	header a {
		color: black;
	}

	header a:hover {
		color: gray;
	}
	footer {
		height: 53px;
		line-height: 53px;
		font-family: Opensans, sans-serif;
		background-color: white;
		color: black;
		text-align: center;
		padding: 0;
		margin: 0;
	}
</style>
