/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import myAvatar from "../assets/avatar.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const HeroSectionWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	background-color: #000;
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
	margin-top: 30px;
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
`;

const HeroImage = styled.img`
	max-width: 100%;
	height: auto;
`;

const HeroSection = () => {
	return (
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
			<HeroRight>
				<HeroImage src={myAvatar} alt='Hero Image' />
			</HeroRight>
		</HeroSectionWrapper>
	);
};

export default HeroSection;
