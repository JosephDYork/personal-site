<script lang="ts">
	import type { BlogPost } from '$lib/server/blog';

	type PageData = {
		post: BlogPost;
	};

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.post.title} - Joseph D. York</title>
	<meta name="description" content={data.post.summary} />
</svelte:head>

<main class="post-page">
	<h1>{data.post.title}</h1>
	<time class="post-date" datetime={data.post.datetime}>{data.post.label}</time>
	<div class="post-body">{@html data.post.html}</div>
</main>

<style>
	.post-page {
		max-width: 760px;
		margin: 0 auto;
		padding: 7rem 0 0;
		display: grid;
		gap: 0.8rem;
	}

	h1 {
		margin: 0;
		font-size: clamp(1.7rem, 4vw, 2.2rem);
		line-height: 1.25;
		font-weight: 500
	}

	.post-date {
		color: var(--muted)
	}

	.post-body {
		line-height: 1.7;
		font-weight: 400
	}

	.post-body :global(p) {
		margin: 0 0 1rem;
	}

	@media (max-width: 760px) {
		.post-page {
			padding: 1.8rem 0 2.4rem;
		}
	}
</style>
