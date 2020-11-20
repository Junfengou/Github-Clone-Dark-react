import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function NoUser() {
	return (
		<Wrapper>
			<h2>This user does not exist</h2>
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
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--lightBlue);
		&:hover {
			text-decoration: underline;
		}
	}
`;
export default NoUser;
