import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsList from './containers/posts_list';

export default(
	<Route path="/" component={ App }>
		<IndexRoute component={ PostsList } />
	</Route>
);

