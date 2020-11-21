import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { MdStar } from "react-icons/md";
import { AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BsFillCircleFill } from "react-icons/bs";
import { RiUserLocationFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function List() {
	const { repos, invalidUser } = useContext(GithubContext);
	console.log("repos: ", repos);
	const language = repos.reduce((total, item) => {
		const { language, stargazers_count } = item;

		if (!language) return total;

		if (!total[language]) {
			total[language] = {
				label: language,
				value: 1,
				stars: stargazers_count,
			};
		} else {
			total[language] = {
				...total[language],
				value: total[language].value + 1,
				stars: total[language].stars + stargazers_count,
			};
		}
		return total;
	}, []);

	//-------------------------------------------------------------->

	let { forks } = repos.reduce(
		(total, item) => {
			const {
				name,
				forks,
				language,
				full_name,
				size,
				stargazers_count,
				html_url,
			} = item;
			total.forks[forks] = {
				label: name,
				fork: forks,
				language: language,
				fullname: full_name,
				size: size,
				stars: stargazers_count,
				url: html_url,
			};
			return total;
		},
		{
			forks: {},
		}
	);

	forks = Object.values(forks).slice(-10).reverse();

	console.log("forks: ", forks);

	//-------------------------------------------------------------->

	return (
		<div>
			{invalidUser.show ? (
				<Nothing></Nothing>
			) : (
				<Wrapper>
					<div className="title">
						<h1>
							<RiGitRepositoryLine className="repo" />
							Top repository by fork
						</h1>
					</div>
					<div className="content">
						{forks.slice(0, 4).map((item) => {
							return <Box {...item} />;
						})}
					</div>
					<div className="content">
						{forks.slice(5, 9).map((item) => {
							return <Box {...item} />;
						})}
					</div>
				</Wrapper>
			)}
		</div>
	);
}

const Box = ({ label, fork, language, fullname, size, stars, url }) => {
	var numForm = size.toLocaleString();
	console.log("url: ", url);
	return (
		<BoxWrapper>
			<div className="box_container">
				<a href={url}>
					{/* <h3>beginner-javascript</h3> */}
					{/* <h6>Slam Dunk Javascript</h6> */}
					{/* <p>HTML</p> */}

					<h3>
						<RiGitRepositoryLine className="repo" />
						{label}
					</h3>
					<h4>
						<RiUserLocationFill className="fullname" />
						{fullname}
					</h4>
					<div className="words">
						<p className="word__first">
							<BsFillCircleFill className="language" />
							{language}
						</p>
						<p className="word__second">
							<AiOutlineFork className="fork" /> {fork}
						</p>
						<p className="word__third">
							<MdStar className="star" /> {stars}
						</p>

						<p>{numForm}KB</p>
					</div>
				</a>
			</div>
		</BoxWrapper>
	);
};

const Nothing = styled.div`
	height: 10rem;
	width: 100%;
	/* border: solid red; */
	background-color: var(--offWhite);
`;

const Wrapper = styled.div`
	/* border: solid red; */
	height: 30rem;
	/* height: 100vh; */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: var(--offWhite);

	.title {
		/* border: solid blue; */
		width: 80%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 2rem;
		margin-bottom: 1rem;
	}

	.content {
		display: flex;
		margin-left: 2rem;
		margin-bottom: 10px;
	}

	h1 {
		/* text-decoration: underline; */
		font-family: "Harmattan", sans-serif;
	}

	.repo {
		color: var(--pink);
		margin-right: 3px;
	}
`;

const BoxWrapper = styled.div`
	/* border: solid blue; */
	height: 10rem;
	width: 23rem;
	display: flex;
	align-items: center;
	background-color: var(--white);
	margin-right: 12px;
	box-shadow: 18px 0px 31px -10px rgba(64, 56, 64, 1);
	/* cursor: pointer; */

	.box_container {
		padding-left: 2rem;
		/* border: solid red; */
		justify-content: center;
		width: 100%;
	}

	.words {
		/* border: solid red; */
		display: flex;
		.word__first {
			margin-right: 2rem;
		}

		.word__second {
			margin-right: 2rem;
		}

		.word__third {
			margin-right: 2rem;
		}
	}

	h3 {
		font-family: "Big Shoulders Stencil Text", cursive;
		font-size: 1.5rem;
	}

	h4 {
		font-family: "Harmattan", sans-serif;
	}
	p {
		font-size: 1rem;
		font-family: "Harmattan", sans-serif;
	}
	a {
		text-decoration: none;
		color: var(--black);
	}
	.language {
		color: var(--orange);
		margin-right: 7px;
	}

	.fullname {
		color: var(--orange);
		margin-right: 10px;
	}

	.repo {
		color: var(--pink);
		margin-right: 3px;
	}

	.fork {
		color: var(--blue);
		margin-right: 3px;
	}

	.star {
		color: var(--green);
		margin-right: 3px;
	}
`;

export default List;
