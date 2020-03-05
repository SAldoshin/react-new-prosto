import React from 'react';
import "./style.css";

const Header = () => {
	return (
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
	)
}

export default Header;