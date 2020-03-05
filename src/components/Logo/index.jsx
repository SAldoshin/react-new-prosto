import React from 'react';
import './style.css';

const Logo = () => {
	return (
		<div className="logotype">
			<a href="/" className="logotype__link">
				<img src="/images/yin-yang.png" alt="logo" className="logotype__image" />
			</a>
		</div>
	)
}

export default Logo;