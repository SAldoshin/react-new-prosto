import React from 'react';
import "./style.css";

import Menu from './../Menu/';

const Aside = (props) => {
	return (
		<aside className="aside">
			<Menu cls="menu_vertical_layout" menu={props.menu} />
		</aside>
	)
}

export default Aside;