import React from 'react';
import './style.css';

import Slider from './../Slider/';
import User from './../User/';
import Form from './../Form/';
import Posts from './../Posts/';

const Main = (props) => {
	return (
		<main className="content">
			<Slider slider={props.slider} />
			<User />
			<Form />
			<Posts blogs={props.blogs} />
		</main>
	)
};

export default Main;