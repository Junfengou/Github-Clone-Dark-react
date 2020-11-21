import React, { useContext } from "react";
import Profile from "./Profile";
import Charts from "./ChartData";
import List from "./List";
import Footer from "./Footer";
import { GithubContext } from "../context/context";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import styled from "styled-components";

function Main() {
	const { invalidUser } = useContext(GithubContext);
	return (
		<div>
			<Profile />
			<Charts />
			<List />
			<Footer />
		</div>
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

export default Main;
