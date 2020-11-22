import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import githubieGif from "../image/Rotate.gif";
function Error() {
	return (
		<Wrapper>
			<img src={githubieGif} alt="loader" className="loading_img" />
			<h1>404 ERROR</h1>
			<h3>The page you're looking for is not found</h3>
			<h4>
				<Link to="/">Go back to home page</Link>
			</h4>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-color: var(--black);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: var(--white);

	h4 {
		font-size: 1.3rem;
		font-family: "Harmattan", sans-serif;
		text-decoration: none;
		color: var(--white);
		@media (max-width: 1000px) {
			/* border: solid purple; */
			font-size: 0.4rem;
		}
	}

	h3 {
		font-size: 1.3rem;
		@media (max-width: 1000px) {
			/* border: solid purple; */
			font-size: 0.9rem;
		}
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--lightBlue);
		&:hover {
			text-decoration: underline;
		}
	}
	.loading_img {
		/* border: solid red; */
		height: 20rem;
		@media (max-width: 1420px) {
			/* border: solid purple; */
			height: 15rem;
		}

		@media (max-width: 1000px) {
			/* border: solid purple; */
			height: 10rem;
		}
	}
`;
export default Error;
