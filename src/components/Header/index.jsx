import React from 'react';
import "./style.css";

import Menu from "./../Menu/";
import Logo from './../Logo/';

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<Logo />
				<div className="menu__wrapper">
					<Menu cls="menu_position_right" />					
				</div>
			</div>
			<img src="/images/bckg_header.jpg" alt="header" className="header__image" />
		</header>
	)
}

export default Header;