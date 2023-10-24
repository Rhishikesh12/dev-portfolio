/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import myLogo from "../assets/logo.svg";

const NavbarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
	color: #fff;
	padding: 10px 20px;
`;

const NavbarLogo = styled.div`
	img {
		margin-left: 100px;
		width: 70px;
		height: 70px;
	}
`;

const NavbarMenu = styled.div`
	ul {
		list-style: none;
		padding: 0;
		display: flex;
		li {
			margin-right: 20px;
			padding-left: 20px;
			padding-right: 20px;
			a {
				text-decoration: none;
				color: #fff;
			}
		}
	}
`;

const NavbarContact = styled.div`
	button {
		color: #fff;
		padding: 10px 20px;
		border: 1px solid white;
		border-radius: 40px;
		display: flex;
		margin-right: 100px;
		align-items: center;
		cursor: pointer;
		box-shadow: 5px 3px white;
		transition: transform 0.1s;

		&:active {
			transform: translateY(2px);
		}
	}
`;

const Navbar = () => {
	return (
		<NavbarWrapper>
			<NavbarLogo>
				<img src={myLogo} alt='Logo' />
			</NavbarLogo>
			<NavbarMenu>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Experience</a>
					</li>
					<li>
						<a href='#'>Portfolio</a>
					</li>
				</ul>
			</NavbarMenu>
			<NavbarContact>
				<button className='contact-button'>Contact</button>
			</NavbarContact>
		</NavbarWrapper>
	);
};

export default Navbar;
