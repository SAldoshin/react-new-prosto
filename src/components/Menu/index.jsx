import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.css';

const Menu = (props) => {
	
	let elem = props.menu.map( num => {
		return (
			<li className="menu__item">
				<NavLink to={num.href} className="menu__link" activeClassName="menu__active">{num.link}</NavLink>
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