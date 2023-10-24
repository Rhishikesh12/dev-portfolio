import { css } from "styled-components";

export const mobile = (props) => {
	return css`
		@media only screen and (max-width: 380px) {
			${props}
		}

		@media only screen and (min-width: 381px) and (max-width: 480px) {
			${props}
		}

		@media only screen and (min-width: 481px) and (max-width: 768px) {
			${props}
		}

		/* Add more media queries for different screen sizes as needed */
	`;
};
