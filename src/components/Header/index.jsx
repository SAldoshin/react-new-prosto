import React from 'react';
import "./style.css";

import Menu from "./../Menu/";

const Header = () => {
	return (
		<header className="header">
			<div className="header__top">
				<div className="logotype">
					<a href="/" className="logotype__link">
						<img src="/images/yin-yang.png" alt="logo" className="logotype__image" />
					</a>
				</div>
				<div className="menu__wrapper">
					<Menu cls="menu_position_right" />					
				</div>
			</div>
			<img src="/images/bckg_header.jpg" alt="header" className="header__image" />
		</header>
	)
}

export default Header;