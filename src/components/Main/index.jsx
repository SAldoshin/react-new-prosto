import React from 'react';
import './style.css';

const Main = () => {
	return (
		<main className="content">
			<div className="slider">
				<img src="/images/slider.jpg" alt="slider" className="slider__image" />
			</div>
			<div className="user">
				<div className="user__wrap-image">
					<img src="/images/avatar.jpg" alt="avatar" className="user__image" />
				</div>
				<div className="user__description">
					<h1 className="user__header">SeregA</h1>
					<div className="user__text">Date of Birth: 47 juanuary</div>
					<div className="user__text">City: Moscow</div>
					<div className="user__text">Education: MGU</div>
					<div className="user__text">Web Site: http://serega.com</div>
				</div>
			</div>
			<div className="form">
				<div className="form__header">My posts</div>
				<form action="/" className="new-post">
					<textarea name="text" className="new-post__text" placeholder="Ваше сообщение..." />
					<input type="button" value="Отправить" className="new-post__button" />
				</form>
			</div>
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
		</main>
	)
};

export default Main;