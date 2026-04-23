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
			<a href="https://x.com/JosephDouglasY1" target="_blank" rel="noopener noreferrer me" title="Twitter"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
			<a href="https://github.com/JosephDYork" target="_blank" rel="noopener noreferrer me" title="Github"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
			<a href="https://instagram.com/" target="_blank" rel="noopener noreferrer me" title="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg></a>
			<a href="https://youtube.com/" target="_blank" rel="noopener noreferrer me" title="Youtube"><svg viewBox="0 0 24 24" fill="none" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></a>
		</div>
	</section>

	<section class="about">
		<h2>About</h2>
		<ul>
			<li>Building machine translation and classification systems at Chmura.</li>
			<li>Graduate student researcher at the University of Cincinnati.</li>
			<li>Helping governments and corporations with cost-effective market intelligence.</li>
			<li>Interested in programming language theory, operating systems, and machine learning.</li>
			<li>Writing about fencing, running, computing, and mathematics.</li>
		</ul>

		<p>
			Hey there! I'm Joe York, a developer based in Cincinnati, Ohio, where I have been building
			software and machine learning systems for about five years. I currently work with Chmura's Data
			and Machine Learning team to build translation and classification systems that process millions
			of lines of text each day. In the evenings, I work with my research group at the University of
			Cincinnati, studying the intersection of software architecture and machine learning systems. In
			my spare time, I enjoy fencing, running, and traveling with friends.
		</p>

	</section>
</main>

<style>
	.page {
		max-width: 700px;
		margin: 0 auto;
		padding: 3.2rem 0 4rem;
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

	h1,
	h2 {
		margin: 0;
		line-height: 1.2;
	}

	h1 {
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
		gap: 0.85rem;
	}

	.about h2 {
		font-size: 32px;
		letter-spacing: 0;
		color: var(--muted);
		padding-bottom: 0.5rem;
	}

	.about ul {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.35rem;
	}

	.about li,
	.about p {
		color: var(--muted);
		margin: 0;
	}

	.about p {
		margin-top: 0.55rem;
	}

	@media (max-width: 760px) {
		.page {
			padding: 2rem 0 2.5rem;
		}

		.subtitle {
			max-width: 32ch;
		}
	}
</style>
