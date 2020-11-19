import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Link, useHistory } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";
import Main from "./Main";

function Search() {
	const [user, setUser] = useState("");
	const history = useHistory();
	const { searchGithubUser } = useContext(GithubContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user) {
			searchGithubUser(user);
		}
		history.push({
			pathname: "/home",
		});
	};

	return (
		<Wrapper>
			<div className="title">
				<FaGithubAlt className="logo" />
				<h1>Github user search</h1>
			</div>
			<div className="search">
				<form onSubmit={handleSubmit}>
					<div className="form-control">
						<input
							type="text"
							placeholder="Enter a Github username"
							value={user}
							onChange={(e) => {
								setUser(e.target.value);
							}}
						/>
						<button type="submit">Search</button>
					</div>
				</form>
			</div>
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
	/* border: solid gold; */
	color: var(--lightBlue);

	.logo {
		/* border: solid red; */
		font-size: 12rem;
		color: var(--lightBlue);
		margin-left: 2rem;
	}

	.title {
		/* border: solid gold; */
		margin-bottom: 2rem;
		font-family: "Harmattan", sans-serif;
		font-size: 1.2rem;
	}

	.search {
		/* border: solid blue; */

		width: 40%;

		form {
			background-color: transparent;
			border-radius: 5px;
			text-align: center;
		}

		input {
			background-color: #26303c;
			outline: 0;
			border: 0;
			border-radius: 0.25rem;
			margin: 0 auto;
			padding: 1rem;
			font-size: 2rem;
			font-weight: 400;
			text-align: center;
			color: var(--white);
		}

		button {
			margin-top: 1rem;
			margin-left: 1rem;
			border-radius: 5px;
			height: 3.5rem;
			width: 8rem;
			border-color: transparent;
			font-family: "Harmattan", sans-serif;
			font-size: 1.5rem;
			padding: 0.5rem 0.5rem;
			text-transform: capitalize;
			background: var(--grey);
			&:hover {
				background: var(--white);
				color: var(--black);
				transition: ease-in-out 0.5s;
			}
		}
	}
`;
export default Search;
