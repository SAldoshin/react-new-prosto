import React from 'react';
import './style.css';

const Slider = (props) => {

	let elem = props.slider.map((slide) => {
		return <img src={slide.image} alt={slide.alt} className="slider__image" />
	});

	return (
		<div className="slider">
			{elem}
		</div>
	)
}

export default Slider;