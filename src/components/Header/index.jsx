import React from 'react';
import "./style.css";

const Header = () => {
	return (
		<header class="header">
			<div class="header__top">
				<div class="logotype">
					<a href="/" class="logotype__link">
						<img src="/assets/images/yin-yang.png" alt="logo" class="logotype__image">
					</a>
				</div>
				<div class="menu__wrapper">
					<ul class="menu menu_position_right">
						<li class="menu__item"><a href="#" class="menu__link">Profile</a></li>
						<li class="menu__item"><a href="#" class="menu__link">Messages</a></li>
						<li class="menu__item"><a href="#" class="menu__link">News</a></li>
						<li class="menu__item"><a href="#" class="menu__link">Music</a></li>
						<li class="menu__item"><a href="#" class="menu__link">Settings</a></li>
					</ul>
				</div>
			</div>
			<img src="/assets/images/bckg_header.jpg" alt="header" class="header__image">
		</header>
	)
}

export default Header;