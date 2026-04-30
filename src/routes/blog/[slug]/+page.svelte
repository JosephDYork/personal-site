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
		max-width: var(--content-max);
		margin: 0 auto;
		padding: var(--page-top) 0 var(--page-bottom);
		display: flex;
		flex-direction: column;
	}

	h1 {
		margin: 0;
		font-size: var(--title-1-size);
		line-height: var(--title-1-line);
		font-weight: var(--title-1-weight);
		margin-bottom: 1rem;
	}

	.post-date {
		font-size: var(--meta-size);
		color: var(--muted);
	}

	.post-body {
		line-height: 1.7;
		font-size: var(--body-size);
		font-weight: 400;
	}

	.post-body :global(pre.shiki) {
		margin: 1rem 0;
		padding: 0.95rem 1rem;
		border: 1px solid var(--line);
		border-radius: 8px;
		overflow-x: auto;
	}

	.post-body :global(pre.shiki),
	.post-body :global(pre.shiki span) {
		color: var(--shiki-light);
		background-color: var(--shiki-light-bg);
	}

	:global(:root[data-theme='dark'] .post-body pre.shiki),
	:global(:root[data-theme='dark'] .post-body pre.shiki span) {
		color: var(--shiki-dark);
		background-color: var(--shiki-dark-bg);
	}

	.post-body :global(pre.shiki code) {
		display: block;
		line-height: 0;
		font-size: 0.8rem;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
	}

	.post-body :global(pre.shiki .line) {
		display: block;
		min-height: 1.45em;
	}

	.post-body :global(:not(pre) > code) {
		background: none;
		color: var(--post-code);
		font-size: 0.9rem;
		font-family: ui-monospace, 'SFMono-Regular', Menlo, Monaco, Consolas, 'Liberation Mono', monospace;
	}

	.post-body :global(:not(pre) > code)::before,
	.post-body :global(:not(pre) > code)::after {
		content: '`';
	}

	.post-body :global(blockquote) {
		border-left: 3px solid var(--muted);
		color: var(--muted);
		margin: 0;
		padding: 3px 0 3px 15px;
		height: fit-content;
	}

	.post-body :global(p) {
		margin: 1rem 0;
	}

	.post-body :global(blockquote p) {
		margin: 0;
	}

	@media (max-width: 760px) {
		.post-page {
			padding: var(--page-top-mobile) 0 var(--page-bottom-mobile);
		}
	}
</style>
