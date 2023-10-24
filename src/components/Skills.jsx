/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import data from "./data.json";

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 30px 0px 30px 0px;
`;

const Image = styled.img`
	max-width: 80px;
	margin: 10px;
	padding: 20px;
`;

const Heading = styled.h1`
	text-align: center;
	color: white;
	margin-top: 120px;
`;

const Skills = () => {
	const imageKeys = Object.keys(data);

	const startItems = imageKeys.slice(0, 8); // First 8 items
	const centerItems = imageKeys.slice(8); // Remaining items

	return (
		<div>
			<Heading>Technologies I Know</Heading>
			<ImageContainer>
				{/* Render the first 8 items at the start */}
				{startItems.map((key, index) => {
					const item = data[key];
					return (
						<div key={index}>
							<Image src={item.imageUrl} alt={item.name} />
						</div>
					);
				})}
			</ImageContainer>

			<ImageContainer>
				{/* Render the remaining items at the center */}
				{centerItems.map((key, index) => {
					const item = data[key];
					return (
						<div key={index}>
							<Image src={item.imageUrl} alt={item.name} />
						</div>
					);
				})}
			</ImageContainer>
		</div>
	);
};

export default Skills;
