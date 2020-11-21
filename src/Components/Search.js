import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { useHistory } from "react-router-dom";
import { FaGithubAlt } from "react-icons/fa";
import githubieGif from "../image/Spinny.gif";
import Main from "./Main";

function Search() {
	const [user, setUser] = useState("");
	const history = useHistory();
	const { searchGithubUser, request, error } = useContext(GithubContext);

	const handleSubmit = (e) => {
		if (user) {
			e.preventDefault();
			searchGithubUser(user);
			setUser("");
			history.push({
				pathname: "/home",
			});
		}

		if (!user) {
			e.preventDefault();
			// setUser("");
			history.push({
				pathname: "/nouser",
			});
		}
	};

	return (
		<Wrapper>
			<div className="title">
				{/* <FaGithubAlt className="logo" /> */}
				<img src={githubieGif} alt="loader" />
				<h1>Github User Search</h1>
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
						{/* {request > 0 && <button type="button">Search</button>} */}
						{request > 0 ? (
							<button type="submit">Search</button>
						) : (
							<p>
								{error.msg}
								<button type="button">Search</button>{" "}
							</p>
						)}
					</div>
				</form>
				<h3>
					Request: <span>{request}</span> / 60
				</h3>
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

	.title {
		/* border: solid gold; */
		font-family: "Harmattan", sans-serif;
		font-size: 1.2rem;
		height: 19rem;

		h1 {
			/* border: solid red; */
			margin-top: 4rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.logo {
		/* border: solid red; */
		font-size: 12rem;
		color: var(--lightBlue);
		margin-left: 1.7rem;
		margin-top: 1rem;
	}
	p {
		color: var(--orange);
		border: solid red;
	}

	.search {
		/* border: solid blue; */
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 40%;
		margin-bottom: 2rem;

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

		h3 {
			/* border: solid blue; */
			margin-top: 4.2rem;
		}

		span {
			color: var(--purple);
		}
	}
`;
export default Search;
