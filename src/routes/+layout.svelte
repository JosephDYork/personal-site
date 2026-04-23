<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import '../app.css';

	let theme = $state<'light' | 'dark'>('light');
	let { children } = $props();

	const storageKey = 'theme';

	onMount(() => {
		const docTheme = document.documentElement.dataset.theme;
		theme = docTheme === 'dark' ? 'dark' : 'light';
	});

	function toggleTheme() {
		theme = theme === 'dark' ? 'light' : 'dark';
		document.documentElement.dataset.theme = theme;
		localStorage.setItem(storageKey, theme);
	}

	const navItems = [
		{ href: '/resume', label: 'Resume' },
		{ href: '/blog', label: 'Blog' }
	];
</script>

<svelte:head>
	<script>
		(() => {
			const storageKey = 'theme';
			const saved = localStorage.getItem(storageKey);
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			const theme = saved === 'dark' || saved === 'light' ? saved : prefersDark ? 'dark' : 'light';
			document.documentElement.dataset.theme = theme;
		})();
	</script>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="page-shell">
	<header class="site-header">
		<a
			class="site-title"
			class:active={page.url.pathname === '/'}
			href="/"
			aria-label="Home"
			title="Home"
		>
			<svg class="site-home-icon" viewBox="0 0 24 24" aria-hidden="true">
				<path class="roof" d="M3.5 10.2 12 3.5l8.5 6.7"></path>
				<path class="shell" d="M5.5 9.8V20.5h13V9.8"></path>
			<path class="door" d="M10 20.5v-5h4v5"></path>
		</svg>
	</a>
	<div class="header-spacer" aria-hidden="true"></div>
	<div class="header-controls">
			<nav aria-label="Main navigation" class="site-nav">
				{#each navItems as item}
					<a class:active={page.url.pathname === item.href} href={item.href}>{item.label}</a>
				{/each}
			</nav>
			<span class="header-divider" aria-hidden="true"></span>
			<button
				class="theme-toggle"
				type="button"
				onclick={toggleTheme}
				aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mode-sunny"
					width="21"
					height="21"
					viewBox="0 0 14 14"
					stroke-width="1"
					aria-hidden="true"
				>
					<title>LIGHT</title>
					<g>
						<circle
							cx="7"
							cy="7"
							r="2.5"
							fill={theme === 'dark' ? 'currentColor' : 'none'}
							stroke-linecap="round"
							stroke-linejoin="round"
						></circle>
						<line x1="7" y1="0.2" x2="7" y2="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="2.1" y1="2.1" x2="3.82" y2="3.82" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="0.2" y1="7" x2="2.5" y2="7" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="2.1" y1="11.9" x2="3.82" y2="10.18" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="7" y1="13.8" x2="7" y2="11.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="11.9" y1="11.9" x2="10.18" y2="10.18" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="13.8" y1="7" x2="11.5" y2="7" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
						<line x1="11.9" y1="2.1" x2="10.18" y2="3.82" fill="none" stroke-linecap="round" stroke-linejoin="round"></line>
					</g>
				</svg>
			</button>
		</div>
	</header>

	<div class="page-content">{@render children()}</div>

	<footer class="site-footer">
		© 2026 <a href="/blog">Joe's Blog</a> · Powered by
		<a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a>
	</footer>
</div>

<style>
	.page-shell {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.page-content {
		flex: 1;
	}

	.site-header {
		max-width: 830px;
		width: 100%;
		margin: 0 auto;
		padding: 1rem 0 0.75rem;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;
		border-bottom: 1px solid var(--line);
	}

	.site-title {
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		color: var(--link-idle);
	}

	.site-home-icon {
		width: 1.55rem;
		height: 1.55rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.4;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.site-title:hover,
	.site-title:focus-visible {
		color: var(--hover-highlight);
	}

	.site-title.active {
		color: var(--hover-highlight);
	}

	.header-controls {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.header-spacer {
		flex: 1;
	}

	.site-nav {
		display: flex;
		gap: 1.1rem;
		margin-right: 0.45rem;
	}

	.header-divider {
		width: 1px;
		height: 1.1rem;
		background: var(--line);
	}

	.site-nav a {
		text-decoration: none;
		color: var(--link-idle);
	}

	.site-nav a:hover,
	.site-nav a:focus-visible {
		color: var(--hover-highlight);
	}

	.site-nav a.active {
		color: var(--hover-highlight);
	}

	.site-footer {
		max-width: 980px;
		margin: 0 auto;
		padding: 2rem 0 1.25rem;
		text-align: center;
		font-size: 0.82rem;
		color: var(--muted);
	}

	.site-footer a {
		color: inherit;
		text-decoration: none;
		padding: 0 0.1rem;
		border-radius: 3px;
	}

	.site-footer a:hover,
	.site-footer a:focus-visible {
		color: var(--hover-highlight);
		text-decoration: underline;
	}

	@media (max-width: 980) {
		.site-header {
			padding: 0.85rem 0 0.65rem;
			flex-direction: row;
			align-items: space-between;
		}

		.header-controls {
			width: 100%;
			justify-content: space-between;
		}

		.site-nav {
			gap: 0.8rem;
		}

		.header-divider {
			height: 1rem;
		}

		.site-footer {
			padding: 1.6rem 0 1rem;
		}
	}
</style>
