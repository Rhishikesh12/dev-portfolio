/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import myAvatar from "../assets/avatar.png";
import leetcode from "../assets/leetcode.png";
import node from "../assets/node.png";
import github from "../assets/github.png";
import flutter from "../assets/flutter.png";
import stackoverflow from "../assets/stackoverflow.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAltTwoTone";

import CenterText from "../widgets/CenterTextSection.jsx";

const HeroSectionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	background-color: #000;
	overflow: hidden;
`;

const HeroLeft = styled.div`
	flex: 1;
	padding: 20px;
	margin-top: 3%;
	margin-left: 5%;
	color: #fff;
`;

const HeroText = styled.div`
	h1 {
		font-size: 80px;
		color: #fff;
	}

	p {
		font-size: 18px;
		font-weight: 300;
		color: #969696;
	}
`;

const HeroButton = styled.button`
	color: #fff;
	padding: 10px 20px;
	border: 1px solid white;
	border-radius: 40px;
	display: flex;
	align-items: center;
	margin-top: 40px;
	cursor: pointer;
	box-shadow: 5px 3px white;
	transition: transform 0.1s;

	&:active {
		transform: translateY(2px);
	}
`;

const StyledName = styled.span`
	font-size: 90px;
	-webkit-text-stroke: 1px #f8f8f8;
	text-shadow: 0px 1px 4px #23430c;
	color: #000;
`;

const ArrowIcon = styled(ArrowForwardIcon)`
	margin-left: 10px;
`;

const HeroRight = styled.div`
	flex: 1;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Circle = styled.div`
	position: absolute;
	width: 300px;
	height: 300px;
	border: 70px solid #393939;
	border-radius: 50%;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
`;

const HeroImage = styled.img`
	max-width: 270px;
	max-height: 270px;
	margin-top: 30px;
	z-index: 2;
	border-radius: 50%;
`;

const Leetcode = styled.img`
	position: absolute;
	top: -80px;
	left: 18%;
	z-index: 5;
	border-radius: 50%;
	width: 70px;
	height: 70px;

	animation: spin 10s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Node = styled.img`
	position: absolute;
	top: 300px;
	left: 5%;
	z-index: 5;
	border-radius: 50%;
	width: 70px;
	height: 70px;

	animation: spin 10s linear infinite; /* Add this line for the animation */

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Github = styled.img`
	position: absolute;
	top: 120px;
	left: -30%;
	z-index: 5;
	border-radius: 50%;
	width: 70px;
	height: 70px;

	animation: spin 10s linear infinite; /* Add this line for the animation */

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Stackoverflow = styled.img`
	position: absolute;
	top: 270px;
	left: 90%;
	z-index: 5;
	border-radius: 50%;
	width: 70px;
	height: 70px;

	animation: spin 10s linear infinite; /* Add this line for the animation */

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Flutter = styled.img`
	position: absolute;
	top: 0px;
	left: 100%;
	z-index: 5;
	border-radius: 50%;
	width: 70px;
	height: 70px;

	animation: spin 10s linear infinite; /* Add this line for the animation */

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const HeroSection = () => {
	return (
		<>
			<HeroSectionWrapper>
				<HeroLeft
					data-aos='fade-right'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'>
					<HeroText>
						<h1>
							Hi!👋 I'm <br /> <StyledName>Rhishikesh C.</StyledName>
						</h1>
						<p>Flutter Developer | Web Developer | Backend Developer</p>
					</HeroText>
					<HeroButton>
						Contact Me <ArrowIcon />
					</HeroButton>
				</HeroLeft>
				<HeroRight
					data-aos='fade-left'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'>
					<HeroImage src={myAvatar} alt='Hero Image' />
					<Circle>
						<Leetcode src={leetcode} alt='leetcode' />
						<Node src={node} alt='node' />
						<Github src={github} alt='github' />
						<Flutter src={flutter} alt='flutter' />
						<Stackoverflow src={stackoverflow} alt='stackoverflow' />
					</Circle>
				</HeroRight>
			</HeroSectionWrapper>
			<CenterText />
		</>
	);
};

export default HeroSection;
