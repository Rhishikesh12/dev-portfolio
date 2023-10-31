/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import ArrowDownwardIcon from "@mui/icons-material/KeyboardDoubleArrowDownTwoTone";
import { mobile } from "../responsive";

const CenteredTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100px;
	background-color: #000;
	color: #fff;
	${mobile({
		display: "none",
		// marginTop: "15%",
	})}
`;

const CenteredText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const ArrowIcon = styled(ArrowDownwardIcon)`
	animation: bounce 2s infinite;
	font-size: 36px;
	margin-top: 10px;

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
`;

const CenteredTextSection = () => {
	return (
		<CenteredTextWrapper>
			<CenteredText>
				<h4>Scroll Down</h4>
				<ArrowIcon />
			</CenteredText>
		</CenteredTextWrapper>
	);
};

export default CenteredTextSection;
