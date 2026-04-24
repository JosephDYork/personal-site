<svelte:head>
	<title>Joseph D. York</title>
	<meta
		name="description"
		content="Personal site for Joseph D. York: software engineering, machine learning, and writing."
	/>
</svelte:head>

<main class="page">
	<section class="intro">
		<img class="avatar" src="/93014294.jpeg" alt="Joseph D. York" draggable="false" />
		<h1>Joseph York</h1>
		<p class="subtitle">Software Engineer, Machine Learning</p>

		<div class="social-icons" aria-label="Social links">
			<a href="https://www.linkedin.com/in/joseph-d-york/" target="_blank" rel="noopener noreferrer me" title="Linkedin"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
			<a href="https://github.com/JosephDYork" target="_blank" rel="noopener noreferrer me" title="Github"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
			<a href="https://x.com/JosephDouglasY1" target="_blank" rel="noopener noreferrer me" title="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
		</div>
	</section>

	<section class="about">
		<p>
			I'm a software engineer based in Cincinnati, Ohio, building software and machine
			learning systems at Chmura Economics. I currently work on our Data and Machine Learning team,
			where we build translation and classification systems that process billions of lines of text.
		</p>

		<p>
			In the evenings, I collaborate with my research group at the University of Cincinnati,
			exploring software architecture and machine learning.
		</p>

		<p>
			Outside of work, I enjoy
			fencing, running, and traveling with friends.
		</p>


	</section>
</main>

<style>
	.page {
		max-width: 680px;
		margin: 0 auto;
		padding: 6rem 0 4rem;
		display: grid;
		gap: 1.35rem;
	}

	.intro {
		display: grid;
		justify-items: center;
		text-align: center;
		gap: 0.55rem;
		padding-bottom: 1.35rem;
	}

	.avatar {
		width: 150px;
		height: 150px;
		display: block;
		border-radius: 999px;
		object-fit: cover;
		border: 1px solid var(--line);
	}

	h1 {
		margin: 0;
		line-height: 1.1;
		font-size: 32px;
	}

	.subtitle {
		margin: 0;
		font-size: 16px;
		color: var(--muted);
	}

	.social-icons {
		margin: 0.15rem 0 0;
		display: flex;
		gap: 0.7rem;
		flex-wrap: wrap;
		justify-content: center;
	}

	.social-icons a {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3.1rem;
		height: 3.1rem;
		text-decoration: none;
		color: var(--link-idle);
	}

	.social-icons svg {
		width: 2.1rem;
		height: 2.1rem;
	}

	.social-icons a:hover {
		color: var(--hover-highlight);
	}

	.about {
		display: grid;
		gap: 0.7rem;
	}

	.about p {
		margin: 0;
		padding: 0;
	}
</style>
