/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ArrowForwardIcon from "@mui/icons-material/ArrowRightAltTwoTone";

const Wrapper = styled.div`
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	overflow: hidden;
`;

const UserSection = styled.section`
	display: flex;
	align-items: center;
`;

const UserInfo = styled.section`
	text-align: left;
	margin-top: 60px;
	position: relative;
	right: 10%;

	h2 {
		font-size: 50px;
		color: #fff;
	}

	p {
		font-size: 18px;
		font-weight: 300;
		color: #969696;
		margin-top: 15px;
		margin-bottom: 15px;
	}
`;

const Avatar = styled.img`
	position: relative;
	margin-top: 80px;
	left: 25%;
	width: 400px;
	height: 400px;
	box-shadow: 10px 10px;
`;

const DataContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const UserData = styled.div`
	margin: 10px 25px 10px 0;
`;

const HeroButton = styled.button`
	color: #fff;
	padding: 10px 20px;
	border: 1px solid white;
	border-radius: 40px;
	display: flex;
	align-items: center;
	cursor: pointer;
	box-shadow: 5px 3px white;
	transition: transform 0.1s;

	&:active {
		transform: translateY(2px);
	}
`;

const ArrowIcon = styled(ArrowForwardIcon)`
	margin-left: 10px;
`;

const StyledName = styled.span`
	font-size: 45px;
	-webkit-text-stroke: 1px #f8f8f8;
	text-shadow: 0px 1px 4px #23430c;
	color: #000;
`;

const About = () => {
	const [userData, setUserData] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Fetch user data from the GitHub API
		fetch("https://api.github.com/users/Rhishikesh12")
			.then((response) => response.json())
			.then((data) => {
				setUserData(data);
				setIsLoading(false);
			});
	}, []);

	return (
		<Wrapper>
			<UserSection data-aos='fade-up'>
				<Avatar src={userData.avatar_url} alt='GitHub User Avatar' />
			</UserSection>
			<UserInfo data-aos='fade-up' data-aos-easing='ease-in-sine'>
				<h2>About Me:</h2>
				<p>
					Hello! I'm Rhishikesh Chaughule and I'm a student of Computer <br />
					Engineering at <b>Saraswati College of Engineering </b>. I have
					diverse <br />
					interests in <b>OpenSource Contribution</b>,{" "}
					<b>Android development</b>, And <br />
					<b>Web Development</b>. I have worked on many projects in <br /> Web
					Development and Android Development.
				</p>
				<DataContainer>
					<UserData>
						<h4>Github Repos</h4>
						<StyledName>{userData.public_repos}</StyledName>
					</UserData>
					<UserData>
						<h4>Github Followers</h4>
						<StyledName>{userData.followers}</StyledName>
					</UserData>
					<UserData>
						<h4>Github Following</h4>
						<StyledName>{userData.following}</StyledName>
					</UserData>
				</DataContainer>
				<HeroButton>
					Download Resume <ArrowIcon />
				</HeroButton>
			</UserInfo>
		</Wrapper>
	);
};

export default About;
