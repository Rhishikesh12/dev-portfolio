/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
	text-align: center;
	padding: 20px;
`;

const FooterText = styled.div`
	font-size: 14px;
	color: #fff;
	margin: 5px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterText>
				Copyright@2023 - <b>All copyrights are resevered</b>
			</FooterText>
			<FooterText>
				Designed & Developed By <b>Rhishikesh C.</b>
			</FooterText>
		</FooterContainer>
	);
};

export default Footer;
