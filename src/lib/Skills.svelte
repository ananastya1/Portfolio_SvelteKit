<script lang="ts">
	import arrow from '../lib/images/arrow-icon.png';
	import python_icon from '../lib/images/python-icon.png';
	import js_icon from '../lib/images/js-icon.png';
	import bd_icon from '../lib/images/bd-icon.png';
	import git_icon from '../lib/images/git-icon.png';
	import stars3_5 from '../lib/images/stars3-5.png';
	import stars4_5 from '../lib/images/stars4-5.png';
</script>

<section id="skills">
	<h1 id="skills-h">—Skills—</h1>
	<ul id="skills-list">
		<li>
			<img class="app-icon" src={python_icon} alt="Python Icon" />
			<span>Python</span>
			<img class="rating-icon" src={stars4_5} alt="Rating Icon" />
		</li>
		<li>
			<img class="app-icon" src={js_icon} alt="JS Icon" />
			<span>JavaScript</span>
			<img class="rating-icon" src={stars3_5} alt="Rating Icon" />
		</li>
		<li>
			<img class="app-icon" src={bd_icon} alt="SQL Icon" />
			<span>SQL</span>
			<img class="rating-icon" src={stars3_5} alt="Rating Icon" />
		</li>
		<li>
			<img class="app-icon" src={git_icon} alt="Git Icon" />
			<span>Git</span>
			<img class="rating-icon" src={stars4_5} alt="Rating Icon" />
		</li>
	</ul>
</section>

<div id="arrow-skills">
	<a href="#projects"><img src={arrow} alt="Arrow Icon" /></a>
</div>

<style global>
	section {
		font-family: Montserrat, sans-serif;
		background-color: #4c631d;
		color: white;
		margin: 0;
	}

	#arrow-skills {
		text-align: center;
		margin: 40px auto;
		padding: 0;
    background-color: #4c631d;
	}
	#skills li {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#skills .app-icon {
		width: 100px;
		height: 100px;
	}

	#skills .rating-icon {
		width: 152px;
		height: 24px;
	}

	#skills span {
		font-size: 30px;
		margin: 10px 0;
	}

	#skills-list li {
		margin: 5%;
	}
</style>
