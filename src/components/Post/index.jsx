import React from 'react';
import './style.css';

const Post = (props) => {
	return (
		<div className="post">
			<div className="post__wrap-image">
				<img src={props.blogs.image} alt={props.blogs.alt} className="post__image" />
			</div>
			<div className="post__text">{props.blogs.text}</div>
			<div className="like">
				<a href="#" className="like__link">
					<img src="/images/like.png" alt="like" className="like__image" />
				</a>
				<span className="like__count">{props.blogs.count}</span>
			</div>
		</div>
	)
}

export default Post;