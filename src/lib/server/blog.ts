/// <reference types="node" />

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';
import { bundledLanguages, bundledThemes, createHighlighter } from 'shiki';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');
const SHIKI_THEME = 'vitesse-dark';
let highlighterPromise: ReturnType<typeof createHighlighter> | null = null;

export type BlogPostSummary = {
	slug: string;
	title: string;
	summary: string;
	datetime: string;
	label: string;
};

export type BlogPost = BlogPostSummary & {
	html: string;
};

function formatDate(iso: string): string {
	return new Date(iso).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	});
}

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
	const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

	if (!match) {
		throw new Error('Markdown file is missing frontmatter');
	}

	const [, block, body] = match;
	const meta: Record<string, string> = {};

	for (const line of block.split('\n')) {
		const idx = line.indexOf(':');
		if (idx === -1) continue;
		const key = line.slice(0, idx).trim();
		const value = line.slice(idx + 1).trim();
		meta[key] = value;
	}

	return { meta, body };
}

function getHighlighter() {
	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			themes: [SHIKI_THEME],
			langs: ['plaintext', 'text', 'bash', 'js', 'ts', 'tsx', 'jsx', 'json', 'python', 'sql', 'yaml', 'md']
		});
	}

	return highlighterPromise;
}

function resolveShikiLang(rawLang: string | undefined): string {
	if (!rawLang) return 'plaintext';

	const lang = rawLang.split(/\s+/)[0].toLowerCase();

	if (lang in bundledLanguages) {
		return lang;
	}

	return 'plaintext';
}

async function renderMarkdown(body: string): Promise<string> {
	const highlighter = await getHighlighter();
	const renderer = new marked.Renderer();

	renderer.code = ({ text, lang }) => {
		const shikiLang = resolveShikiLang(lang);
		const html = highlighter.codeToHtml(text, {
			lang: shikiLang,
			theme: SHIKI_THEME,
		});

		return html.replace('<pre class="shiki', '<pre tabindex="0" class="shiki');
	};

	return (await marked.parse(body, { async: true, renderer })) as string;
}

async function fromMarkdown(slug: string, raw: string): Promise<BlogPost> {
	const { meta, body } = parseFrontmatter(raw);
	const datetime = meta.date;

	if (!meta.title || !meta.summary || !datetime) {
		throw new Error(`Post '${slug}' is missing title, summary, or date`);
	}

	return {
		slug,
		title: meta.title,
		summary: meta.summary,
		datetime,
		label: formatDate(datetime),
		html: await renderMarkdown(body)
	};
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
	const files = await readdir(BLOG_DIR);
	const posts: BlogPostSummary[] = [];

	for (const file of files) {
		if (!file.endsWith('.md')) continue;
		const slug = file.replace(/\.md$/, '');
		const raw = await readFile(path.join(BLOG_DIR, file), 'utf8');
		const post = await fromMarkdown(slug, raw);
		posts.push({
			slug: post.slug,
			title: post.title,
			summary: post.summary,
			datetime: post.datetime,
			label: post.label
		});
	}

	return posts.sort((a, b) => (a.datetime < b.datetime ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	const file = path.join(BLOG_DIR, `${slug}.md`);

	try {
		const raw = await readFile(file, 'utf8');
		return await fromMarkdown(slug, raw);
	} catch {
		return null;
	}
}
