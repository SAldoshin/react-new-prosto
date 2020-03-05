import React from 'react';
import './style.css';

import Post from './../Post/';

const Posts = (props) => {
	
	let elem = props.blogs.map((el) => {
		return <Post blogs={el} />
	});

	return (
		<div className="posts">
			{elem}			
		</div>
	)
}

export default Posts;