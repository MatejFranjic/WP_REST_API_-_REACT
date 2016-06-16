import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts(){
	console.log('Fetching posts...');
	const URL = 'http://www.mfranj.mojweb.com.hr/wp-json/wp/v2/posts?filter[posts_per_page]=100';
	const request = axios.get(URL);
	return {
		type: FETCH_POSTS,
		payload: request
	}
}
