/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import { Projects } from "./data";
import { InsertLinkTwoTone as LinkIcon } from "@mui/icons-material";
import { mobile } from "../responsive";

const Heading = styled.div`
	text-align: center;
	color: white;
	font-size: 35px;
	font-weight: bold;
`;

const PortfolioSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 50px;
	${mobile({
		flexDirection: "column",
		margin: "5px",
		overflow: "hidden",
	})}
`;

const PortfolioRow = styled.div`
	display: flex;

	${mobile({
		flexDirection: "column",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
	})}
`;

const PortfolioItem = styled.div`
	width: 400px;
	text-align: center;
	margin: 20px;
	position: relative;
	cursor: pointer;
	color: white;

	img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 15px;
	}

	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.7);
		display: flex;
		align-items: center;
		justify-content: center;
		opacity: 0;
		transition: opacity 0.3s;
	}

	.link-overlay {
		position: absolute;
		width: 50px;
		height: 50px;
		background: #fff;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;

		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.link-icon {
		font-size: 25px;
		color: black;
		z-index: 1;
		background: #fff;
	}

	&:hover .overlay {
		opacity: 1;
	}

	${mobile({
		img: {
			width: "350px",
			height: "350px",
			objectFit: "cover",
			borderRadius: "15px",
		},
	})}
`;

const Portfolio = () => {
	const chunkedProjects = chunkArray(Projects, 3);

	return (
		<>
			<Heading data-aos='fade-up'>Portfolio</Heading>
			<PortfolioSection data-aos='fade-up'>
				{chunkedProjects.map((row, rowIndex) => (
					<PortfolioRow key={rowIndex}>
						{row.map((project) => (
							<PortfolioItem key={project.id}>
								<img src={project.img} alt={project.title} />
								<div className='overlay'>
									<a
										href={project.link}
										target='_blank'
										rel='noopener noreferrer'>
										<div className='link-overlay'>
											<LinkIcon className='link-icon' />
										</div>
									</a>
								</div>
							</PortfolioItem>
						))}
					</PortfolioRow>
				))}
			</PortfolioSection>
		</>
	);
};

// Helper function to chunk an array into smaller arrays
function chunkArray(array, chunkSize) {
	const chunkedArray = [];
	for (let i = 0; i < array.length; i += chunkSize) {
		chunkedArray.push(array.slice(i, i + chunkSize));
	}
	return chunkedArray;
}

export default Portfolio;
