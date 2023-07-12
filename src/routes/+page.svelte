<script lang="ts">
  import Profile from '../lib/Profile.svelte';
  import About from '../lib/About.svelte';
  import Skills from '../lib/Skills.svelte';
  import Projects from '../lib/Projects.svelte';
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="About this app" />
</svelte:head>

<Profile />
<About />
<Skills />
<Projects />
<slot />
