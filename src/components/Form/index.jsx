import React from 'react';
import './style.css';

const Form = (props) => {
	return (
		<div className="form">
			<div className="form__header">My posts</div>
			<form action="/" className="new-post">
				<textarea name="text" className="new-post__text" placeholder="Ваше сообщение..." />
				<input type="button" value="Отправить" className="new-post__button" />
			</form>
		</div>
	)
}

export default Form;