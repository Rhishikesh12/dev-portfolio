/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import Experiences from "../widgets/Experiences.jsx";
import Education from "../widgets/Education.jsx";

const PageHeader = styled.h1`
	text-align: center;
	margin-top: 100px;
	margin-bottom: 50px;
	color: white;
`;

const TabsContainer = styled.div`
	width: 1200px;
	height: 100vh;
	margin: 0 auto;
`;

const TabHeader = styled.div`
	display: flex;
	background-color: #f0f0f0;
`;

const Tab = styled.div`
	flex: 1;
	padding: 10px;
	text-align: center;
	cursor: pointer;
	color: #fff;
	position: relative;

	/* Add an underline effect */
	&:hover {
		&::before {
			content: "";
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 2px;
			background-color: #fff;
		}
	}
`;

const TabContent = styled.div`
	padding: 10px;
`;

const Experience = () => {
	const [activeTab, setActiveTab] = useState("tab1");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<PageHeader>Experiences & Education</PageHeader>
			<TabsContainer>
				<TabHeader>
					<Tab
						active={activeTab === "Experience"}
						onClick={() => handleTabClick("Experience")}>
						Experience
					</Tab>
					<Tab
						active={activeTab === "Education"}
						onClick={() => handleTabClick("Education")}>
						Education
					</Tab>
				</TabHeader>
				<TabContent>
					{activeTab === "Experience" && <Experiences />}
					{activeTab === "Education" && <Education />}
				</TabContent>
			</TabsContainer>
		</div>
	);
};

export default Experience;
