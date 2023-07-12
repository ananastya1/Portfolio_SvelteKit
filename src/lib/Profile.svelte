<script lang="ts">
	import arrow from '../lib/images/arrow-icon.png';
	import avatar from '../lib/images/avatar.png';
	import github_icon from '../lib/images/github-icon.png';
	import tg_icon from '../lib/images/telegram-icon.png';
	import email_icon from '../lib/images/email-icon.png';
</script>

<body>
	<div>
		<div class="profile-pic">
			<img src={avatar} alt="Avatar" />
		</div>

		<div id="photo">
			<h1>Anastasia Barabanova</h1>
			<h2>Innopolis University. Software Developer</h2>
			<ul>
				<li id="gh-link">
					<a href="https://github.com/ananastya1"><img src={github_icon} alt="Github Icon" /></a>
				</li>
				<li id="tg-link">
					<a href="https://t.me/@a_n_a_s_t_a_s_i_a10"><img src={tg_icon} alt="Telegram Icon" /></a>
				</li>
				<li id="email">
					<a href="mailto:nastya10_tv@mail.ru"><img src={email_icon} alt="Email Icon" /></a>
				</li>
			</ul>
		</div>

		<div id="arrow-top">
			<a href="#about-me"><img src={arrow} alt="Arrow Icon" /></a>
		</div>
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
	h2 {
		font-weight: lighter;
	}
	div {
		font-family: Montserrat, sans-serif;
		background-color: #4c631d;
		color: white;
		margin: 0;
	}
	#arrow-top {
		text-align: center;
		margin: 40px auto;
		padding: 0;
		background-color: #4c631d;
	}
	#photo {
		text-align: center;
		padding: 20px;
	}

	.profile-pic {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 350px;
		height: 350px;
		overflow: hidden;
		margin: 30px auto;
	}

	.profile-pic img {
		width: 100%;
		height: auto;
	}

	#gh-link img,
	#tg-link img,
	#email img {
		height: 50px;
		width: 50px;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	li {
		margin: 0 10px;
	}

	a {
		color: white;
		text-decoration: none;
	}

	a:hover {
		color: lightgray;
	}
</style>
