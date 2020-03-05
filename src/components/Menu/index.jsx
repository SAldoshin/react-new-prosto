import React from 'react';
import './style.css';

const Menu = (props) => {
	return (
		<ul className={`menu ${props.cls}`}>
			<li className="menu__item"><a href="#" className="menu__link">Profile</a></li>
			<li className="menu__item"><a href="#" className="menu__link">Messages</a></li>
			<li className="menu__item"><a href="#" className="menu__link">News</a></li>
			<li className="menu__item"><a href="#" className="menu__link">Music</a></li>
			<li className="menu__item"><a href="#" className="menu__link">Settings</a></li>
		</ul>
	)
}

export default Menu;