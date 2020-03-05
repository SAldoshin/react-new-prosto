import React from 'react';
import './style.css';

import Slider from './../Slider/';
import User from './../User/';
import Form from './../Form/';
import Posts from './../Posts/';

const Main = () => {
	return (
		<main className="content">
			<Slider />
			<User />
			<Form />
			<Posts />
		</main>
	)
};

export default Main;