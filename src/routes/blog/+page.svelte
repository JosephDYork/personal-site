<script lang="ts">
	import type { BlogPostSummary } from '$lib/server/blog';

	type PageData = {
		posts: BlogPostSummary[];
	};

	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Blog - Joseph D. York</title>
	<meta name="description" content="Posts and notes from Joseph D. York." />
</svelte:head>

<main class="posts" aria-label="Content">
	<h3 class="section-title" aria-label="Posts">Posts</h3>

	{#each data.posts as post}
		<article class="post-item">
			<h4 class="post-item-title">
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</h4>

			<time class="post-item-meta" datetime={post.datetime}>
				{post.label}
			</time>
		</article>
	{/each}
</main>

<style>
	.posts {
		max-width: 680px;
		margin: 125px auto 0 auto;
		font-size: 16px;
	}

	.section-title {
		margin: 0 0 1rem;
		font-size: 19px;
		font-weight: 500;
		letter-spacing: 0;
		line-height: 1.2;
	}

	.post-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		line-height: 30px;
		padding: 5px 0 5px 0;
		border-top: 0.8px solid var(--line);
	}

	.post-item-title {
		margin: 0;
		color: var(--link-idle);
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.3;
	}

	.post-item-title a {
		text-decoration: none;
		color: var(--link-idle);
		flex: 1;
		transition: color 0.14s ease-in-out;
	}

	.post-item-title a:hover,
	.post-item-title a:focus-visible {
		color: var(--hover-highlight);
	}

	.post-item-meta {
		display: block;
		font-size: 0.85rem;
		color: var(--muted);
		white-space: nowrap;
	}

	.post-item:last-child {
		margin-bottom: 0;
		padding-bottom: 0;
		border-bottom: 0;
	}

	@media (max-width: 760px) {
		.posts {
			padding: 1.8rem 0 2.4rem;
		}
	}
</style>
