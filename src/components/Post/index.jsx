import React from 'react';
import './style.css';

const Post = (props) => {
	return (
		<div className="post">
			<div className="post__wrap-image">
				<img src={props.blogs.image} alt={props.blogs.alt} className="post__image" />
			</div>
			<div className="post__text">{props.blogs.text}</div>
		</div>
	)
}

export default Post;