import React from 'react';
import "./style.css";

const Aside = () => {
	return (
		<aside class="aside">
			<ul class="menu menu_vertical_layout">
				<li class="menu__item"><a href="#" class="menu__link">Profile</a></li>
				<li class="menu__item"><a href="#" class="menu__link">Messages</a></li>
				<li class="menu__item"><a href="#" class="menu__link">News</a></li>
				<li class="menu__item"><a href="#" class="menu__link">Music</a></li>
				<li class="menu__item"><a href="#" class="menu__link">Settings</a></li>
			</ul>
		</aside>
	)
}

export default Aside;