<script lang="ts">
	import myphoto from '../lib/images/myphoto.png';
	import arrow from '../lib/images/arrow-icon.png';
</script>

<body>
	<section id="about-me">
		<div class="content">
			<div class="left-side">
				<h1 id="about-me-h">—About me—</h1>
				<p id="about-p">
					Hi there! I am Anastasia Barabanova, a 20 year old software developer at the Innopolis
					University. During the learning process, I received basic knowledge for work in the field
					of IT, also participated in the development of several projects. I am interested in the
					development of web applications. I am looking for an internship in the field of web
					development, where I can apply my knowledge and gain new experience.
				</p>
			</div>
			<div class="right-side">
				<img src={myphoto} alt="Me" />
			</div>
		</div>
	</section>
	<div id="arrow-about">
		<a href="#skills"><img src={arrow} alt="Arrow Icon" /></a>
	</div>
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

	#arrow-about {
		text-align: center;
		margin: 40px auto;
		padding: 0;
		background-color: #4c631d;
	}
	#about-p {
		text-align: left;
		font-size: 20px;
		margin: 50px;
		padding: 10px 10%;
		line-height: 2;
	}

	#about-me {
		text-align: center;
	}

	#about-me-h {
		font-weight: lighter;
		letter-spacing: 3px;
	}

	.content {
		display: flex;
	}

	.left-side {
		width: 50%;
		padding: 10px;
	}

	.right-side {
		width: 40%;
		padding: 30px;
	}

	.right-side img {
		width: 450px;
		height: 550px;
	}
</style>
