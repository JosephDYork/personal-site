/// <reference types="node" />

import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'src', 'content', 'blog');

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

function fromMarkdown(slug: string, raw: string): BlogPost {
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
		html: marked.parse(body) as string
	};
}

export async function getAllPosts(): Promise<BlogPostSummary[]> {
	const files = await readdir(BLOG_DIR);
	const posts: BlogPostSummary[] = [];

	for (const file of files) {
		if (!file.endsWith('.md')) continue;
		const slug = file.replace(/\.md$/, '');
		const raw = await readFile(path.join(BLOG_DIR, file), 'utf8');
		const post = fromMarkdown(slug, raw);
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
		return fromMarkdown(slug, raw);
	} catch {
		return null;
	}
}
