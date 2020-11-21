import React from "react";
import styled from "styled-components";
import githubieGif from "../image/github.gif";
import { Link, useHistory } from "react-router-dom";

function NoUser() {
	const history = useHistory();
	const targetLink = () => {
		history.push({
			pathname: "/",
		});
		history.go(0);
	};
	return (
		<Wrapper>
			<img src={githubieGif} alt="loader" className="loading_img" />
			<h2>Search bar cannot be empty</h2>
			<h4>
				<a onClick={targetLink}>Search more users</a>
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
		cursor: pointer;
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
	}
`;
export default NoUser;
