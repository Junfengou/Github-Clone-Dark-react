import React, { useContext } from "react";
import Profile from "./Profile";
import Charts from "./ChartData";
import List from "./List";
import Footer from "./Footer";
import { GithubContext } from "../context/context";
import githubieGif from "../image/github.gif";
import styled from "styled-components";

function Main() {
	const { isLoading } = useContext(GithubContext);
	if (isLoading) {
		return (
			<Loading>
				<img src={githubieGif} alt="loader" className="loading_img" />
				<h1>Loading...</h1>
			</Loading>
		);
	}
	return (
		<div>
			<Profile />
			<Charts />
			<List />
			<Footer />
		</div>
	);
}

const Loading = styled.div`
	height: 100vh;
	width: 100%;
	background-color: var(--black);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.loading_img {
		/* border: solid red; */
		height: 20rem;
	}

	h1 {
		color: var(--purple);
	}
`;

export default Main;
