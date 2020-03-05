import React from 'react';
import "./style.css";

import Menu from './../Menu/';

const Aside = (props) => {
	return (
		<aside className="aside">
			<Menu cls="menu_vertical_layout" menu={props.menu} />
			<img src="./images/bckg_container.jpg" alt='main' className="aside__background" />
		</aside>
	)
}

export default Aside;