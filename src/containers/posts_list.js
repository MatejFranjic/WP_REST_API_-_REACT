import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {fetchPosts} from '../actions/index';

class PostsList extends Component{

	componentWillMount(){
		console.log('Mounting component');		
		this.props.fetchPosts();		
	}

	renderPosts(){
		console.log('Inside renderPosts', this.props.posts);

		if(!this.props.posts.posts){
			return(
				<div>Loading...</div>
			);
		}

		return(		
				<div>		
					{ this.props.posts.posts.map( (post) => {						
							return(
								<div key={ post.id } className="col-lg-4 col-sm-12">
									<h3 className="h3"> {post.title.rendered} </h3>
								</div>
							);
						}) 
					}
				</div>								
			)		
	}

	render(){



		return(
			<div className="row">
				<div className="">
					{ this.renderPosts() }
				</div>
			</div>
		);
	}
}

function mapStateToProps( state ){
	console.log('This is state inside mapStateToProps', state);
	return { posts: state.posts };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators( {fetchPosts}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);