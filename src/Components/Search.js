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
		<GithubWrapper>
			<div className="title">
				{/* <FaGithubAlt className="logo" /> */}
				<img src={githubieGif} alt="loader" />
			</div>
			<div className="search">
				<h1>Github User Search</h1>
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
		</GithubWrapper>
	);
}

const GithubWrapper = styled.div`
	height: 100vh;
	width: 100%;
	background-color: var(--black);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	color: var(--lightBlue);

	.title {
		/* border: solid red; */
		height: 18rem;
	}
	.search {
		/* border: solid red; */
		display: flex;
		flex-direction: column;
		/* justify-content: center; */
		align-items: center;
		height: 20rem;
		width: 20rem;
		font-family: "Harmattan", sans-serif;
		font-size: 1.2rem;

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
			width: 20rem;
			color: var(--white);
			/* border: solid blue; */
		}

		input::-webkit-input-placeholder {
			font-size: 1.5rem;
		}

		button {
			margin-top: 1rem;
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

	@media (max-width: 500px) {
		.title {
			height: 11rem;

			img {
				/* border: solid red; */
				height: 14rem;
			}
		}

		.search {
			input {
				/* border: solid red; */
				width: 15rem;
			}

			input::-webkit-input-placeholder {
				font-size: 1.3rem;
			}

			button {
				height: 3.5rem;
				width: 7rem;
			}
		}
	}
`;

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

			@media (max-width: 1420px) {
				/* border: solid purple; */
				margin-top: 9rem;
			}
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
		/* border: solid red; */
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
			/* border: solid red; */

			@media (max-width: 1000px) {
				width: 18rem;
				height: 2rem;
				::-webkit-input-placeholder {
					visibility: hidden;
				}
			}
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
			@media (max-width: 1420px) {
				/* border: solid red; */
				margin-top: 5.2rem;
			}
		}

		span {
			color: var(--purple);
		}
	}

	@media (max-width: 500px) {
		.title {
			border: solid red;
			/* display: flex; */
			/* height: 40rem; */
			/* justify-content: center;
			align-items: center;
			flex-direction: column; */
			/* height: 15rem; */

			img {
				height: 13rem;
				width: 13rem;
				border: solid blue;
			}
		}
	}
`;
export default Search;
