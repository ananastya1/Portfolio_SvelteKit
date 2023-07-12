<script lang="ts">
	import film_project from '../lib/images/film-project.png';
	import tree_project from '../lib/images/tree-project.png';
</script>

<body>
	<section id="projects">
		<h1 id="projects-h">—Projects—</h1>
		<div class="project-container">
			<article>
				<img class="project-img-film" src={film_project} alt="Film project" />
				<h2 class="name-project">
					<a href="https://github.com/ananastya1/Streaming-service"
						>Application to show and filter list of films</a
					>
				</h2>
				<p class="description-project">
					This is a training project with which I learned how to work with Docker, Git, GitHub
					Actions, PostgreSQL. I wrote frontend part of the project, deployed the application.
				</p>
			</article>

			<article>
				<img class="project-img-tree" src={tree_project} alt="Student icon" />
				<h2 class="name-project">
					<a href="https://github.com/InnoSWP/syntax-tree-visualization">Syntax tree visualizator</a
					>
				</h2>
				<p class="description-project">
					Syntax Tree Visualizer provides interactive environment for exploration of abstract syntax
					tree and syntax array. It is written with TypeScript, Node.js, Yarn. My part of the
					project is frontend.
				</p>
			</article>
		</div>
	</section>
</body>

<style global>
	body {
		margin: 0;
		padding: 0;
		background-color: #4c631d;
	}
	h1 {
		text-align: center;
		font-size: 50px;
		margin: 0;
		letter-spacing: 5px;
	}
	section {
		font-family: Montserrat, sans-serif;
		background-color: #4c631d;
		color: white;
		margin: 0;
	}
	.name-project {
		font-weight: 300;
		text-align: center;
		font-size: 28px;
	}

	.description-project {
		font-size: 20px;
		margin: 10px;
		padding: 0;
	}

	#projects .project-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		padding: 0 100px;
	}

	#projects article {
		flex: 1 1 45%;
		margin: 10px;
	}

	#projects .project-img-film {
		display: block;
		margin: auto;
		width: 500px;
		height: 300px;
	}

	#projects .project-img-tree {
		display: block;
		margin: auto;
		width: 300px;
		height: 300px;
	}

	a {
		color: white;
		text-decoration: none;
	}

	a:hover {
		color: lightgray;
	}
</style>
