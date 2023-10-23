/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import myAvatar from "../assets/avatar.png";

const HeroSection = () => {
	return (
		<div className='hero-section'>
			<div className='hero-left'>
				<div className='hero-text'>
					<h1>Welcome to Our Website</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
						euismod nunc vel urna consequat, eu tincidunt neque fermentum.
					</p>
				</div>
				<button className='hero-button'>Learn More</button>
			</div>
			<div className='hero-right'>
				<img src={myAvatar} alt='Hero Image' />
			</div>
		</div>
	);
};

export default HeroSection;
