// /* eslint-disable no-unused-vars */
// import React from "react";
// import styled from "styled-components";
// import data from "./data.json";
// import { mobile } from "../responsive";

// const ImageContainer = styled.div`
// 	display: flex;
// 	justify-content: center;
// 	align-items: center;
// 	flex-wrap: wrap;
// 	margin: 30px 0px 30px 0px;
// 	padding-left: 150px;
// 	padding-right: 150px;

// 	${mobile({ flexDirection: "row", overflow: "hidden" })}
// `;

// const Image = styled.img`
// 	max-width: 80px;
// 	margin: 10px;
// 	padding: 20px;
// `;

// const Heading = styled.h1`
// 	text-align: center;
// 	color: white;
// 	margin-top: 120px;
// `;

// const Skills = () => {
// 	const imageKeys = Object.keys(data);

// 	return (
// 		<div
// 			id='skills'
// 			data-aos='fade-up'
// 			data-aos-anchor-placement='center-bottom'>
// 			<Heading>Technologies I Know</Heading>
// 			<ImageContainer>
// 				{imageKeys.map((key, index) => {
// 					const item = data[key];
// 					return (
// 						<div key={index}>
// 							<Image src={item.imageUrl} alt={item.name} />
// 						</div>
// 					);
// 				})}
// 			</ImageContainer>
// 		</div>
// 	);
// };

// export default Skills;

/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import data from "./data.json";
import { mobile } from "../responsive";

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 30px 0px 30px 0px;
	padding-left: 150px;
	padding-right: 150px;
`;

const Image = styled.img`
	max-width: 80px;
	margin: 10px;
	padding: 20px;
	${mobile({
		display: "flex",
		flexDirection: "row",
		overflowX: "scroll",
	})}
`;

const Heading = styled.h1`
	text-align: center;
	color: white;
	margin-top: 120px;
`;

const Skills = () => {
	const imageKeys = Object.keys(data);

	return (
		<div
			id='skills'
			data-aos='fade-up'
			data-aos-anchor-placement='center-bottom'>
			<Heading>Technologies I Know</Heading>
			<ImageContainer>
				{imageKeys.map((key, index) => {
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
