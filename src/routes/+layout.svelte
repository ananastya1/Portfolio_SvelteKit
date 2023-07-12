<script lang="ts">
  import { base } from '$app/paths';
</script>

<header>
  <nav>
    <a href="{base}/">Home</a>
    <!-- <a href="{base}#skills">Skills</a>
    <a href="{base}#projects">Projects</a> -->
    <a href="{base}/comic">Comic</a>
  </nav>
</header>

<main>
  <slot />
</main>

<footer>
  <p>&copy; 2023 Anastasia Barabanova. All rights reserved.</p>
</footer>
