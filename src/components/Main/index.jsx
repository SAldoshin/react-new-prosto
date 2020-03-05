import React from 'react';
import './style.css';

const Main = () => {
	return (
		<main class="content">
			<div class="slider">
				<img src="/assets/images/slider.jpg" alt="slider" class="slider__image" />
			</div>
			<div class="user">
				<div class="user__wrap-image">
					<img src="/assets/images/avatar.jpg" alt="avatar" class="user__image" />
				</div>
				<div class="user__description">
					<h1 class="user__header">SeregA</h1>
					<div class="user__text">Date of Birth: 47 juanuary</div>
					<div class="user__text">City: Moscow</div>
					<div class="user__text">Education: MGU</div>
					<div class="user__text">Web Site: http://serega.com</div>
				</div>
			</div>
			<div class="form">
				<div class="form__header">My posts</div>
				<form action="/" class="new-post">
					<textarea name="text" class="new-post__text" placeholder="Ваше сообщение..." />
					<input type="button" value="Отправить" class="new-post__button" />
				</form>
			</div>
			<div class="posts">
				<div class="post">
					<div class="post__wrap-image">
						<img src="/assets/images/avatar.jpg" alt="ava" class="post__image" />
					</div>
					<div class="post__text">Hey, why nobody love you?</div>
				</div>
				<div class="post">
					<div class="post__wrap-image">
						<img src="/assets/images/avatar.jpg" alt="ava" class="post__image" />
					</div>
					<div class="post__text">It's our new program</div>
				</div>
			</div>
		</main>
	)
};

export default Main;