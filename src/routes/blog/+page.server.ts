import { getAllPosts } from '$lib/server/blog';

export async function load() {
	return {
		posts: await getAllPosts()
	};
}
