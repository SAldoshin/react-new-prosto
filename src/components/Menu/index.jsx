import React from 'react';
import './style.css';

const Menu = (props) => {
	
	let elem = props.menu.map( (num) => {
		return (
			<li className="menu__item">
				<a href={num.href} className="menu__link">{num.link}</a>
			</li>
		)
	} );

	return (
		<ul className={`menu ${props.cls}`}>
			{elem}
		</ul>
	)
}

export default Menu;