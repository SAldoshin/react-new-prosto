import React, {Fragment} from 'react';
import './style.css';

import Slider from './../Slider/';
import User from './../User/';
import Form from './../Form/';
import Posts from './../Posts/';

const Profile = (props) => {
	return (
		<Fragment>
			<Slider slider={props.slider} />
			<User />
			<Form />
			<Posts blogs={props.blogs} />
		</Fragment>
	)
};

export default Profile;