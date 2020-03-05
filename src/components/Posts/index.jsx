import React from './react';
import './style.css';

const Example = (props) => {
	return (
		<div className="posts">
			<div className="post">
				<div className="post__wrap-image">
					<img src="/images/avatar.jpg" alt="ava" className="post__image" />
				</div>
				<div className="post__text">Hey, why nobody love you?</div>
			</div>
			<div className="post">
				<div className="post__wrap-image">
					<img src="/images/avatar.jpg" alt="ava" className="post__image" />
				</div>
				<div className="post__text">It's our new program</div>
			</div>
		</div>
	)
}

export default Example;