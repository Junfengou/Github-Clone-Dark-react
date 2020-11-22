import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import Doughnut from "./charts/Doughnut2d";
import Pie from "./charts/Pie3D";
import Column from "./charts/Column2D";

function ChartData() {
	const { repos, invalidUser } = useContext(GithubContext);

	const dummyData = [
		{
			label: "Html",
			value: "29",
		},
		{
			label: "Css",
			value: "26",
		},
		{
			label: "Js",
			value: "18",
		},
	];
	// console.log("repos: ", repos);

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

	// console.log("languages: ", language);

	// ---------------------------------------------------------------->

	const mostUsed = Object.values(language)
		.sort((lowest, highest) => {
			return highest.value - lowest.value; // Always return the highest value language first
		})
		.slice(0, 5);

	// ---------------------------------------------------------------->
	const mostPopular = Object.values(language)
		.sort((lowest, highest) => {
			return highest.stars - lowest.stars;
		})
		.map((item) => {
			//swapp the stars to value
			return { ...item, value: item.stars };
		})
		.slice(0, 5);

	// console.log("mostUsed: ", mostUsed);

	// ---------------------------------------------------------------->

	let { stars } = repos.reduce(
		(total, item) => {
			const { stargazers_count, name } = item;
			total.stars[stargazers_count] = { label: name, value: stargazers_count };
			return total;
		},
		{
			stars: {},
		}
	);

	stars = Object.values(stars).slice(-5).reverse();

	// ---------------------------------------------------------------->
	return (
		<div>
			{invalidUser.show ? (
				<Nothing></Nothing>
			) : (
				<Grid>
					<div className="chart_container">
						<div className="chart_box">
							{/* <Doughnut width="100%" height="100%" data={mostUsed} /> */}
							<Doughnut data={mostUsed} />
						</div>

						<div className="chart_box">
							<Pie data={mostPopular} />
						</div>

						<div className="chart_box">
							<Column data={stars} />
						</div>
					</div>
				</Grid>
			)}
		</div>
	);
}

const Nothing = styled.div`
	height: 7rem;
	width: 100%;
	/* border: solid red; */
	background-color: var(--offWhite);
`;

const Flex = styled.div`
	height: 30rem;
	width: 100%;
	/* border: solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--offWhite);

	.chart_container {
		/* border: solid blue; */
		height: 30rem;
		width: 90rem;
		/* width: 40rem; */
		display: flex;
		justify-content: space-evenly;
		margin-top: -11rem !important;
	}

	.chart_box {
		/* border: solid green; */
		background-color: var(--grey);
		height: 100%;
		width: 27rem;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* @media (max-width: 1500px) {
		height: 150vh;
		width: 100%;
	} */
`;

const Grid = styled.div`
	height: 30rem;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--offWhite);
	/* border: solid red; */

	.chart_container {
		/* border: solid purple; */
		height: 100%;
		width: 90rem;
		display: flex;
		grid-template-columns: repeat(3, 1fr);
		/* margin-left: 7rem; */
		justify-content: space-evenly;
		align-items: center;

		@media (max-width: 1700px) {
			/* border: solid purple; */
			height: 100%;
			width: 70rem;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			justify-content: center;
			align-items: center;
		}

		@media (max-width: 1000px) {
			/* height: 20rem; */
			/* border: solid purple; */
			display: flex;
			justify-content: initial;
			align-items: center;
			flex-direction: column;
			/* margin-top: -7rem; */
		}
	}

	.chart_box {
		border: solid 12px var(--grey);
		border-radius: 15px;
		width: 25rem;
		display: grid;
		justify-content: center;
		align-items: center;
		margin-top: -12rem;
		/* border: solid red; */

		@media (max-width: 1700px) {
			display: grid;
			justify-content: center;
			align-items: center;
			/* border: solid red; */
			margin-left: 3rem;
		}

		@media (max-width: 1000px) {
			margin-top: 2rem;
		}
	}

	@media (max-width: 1700px) {
		height: 60rem;
		width: 100%;
		align-items: initial;
	}

	@media (max-width: 1000px) {
		height: 100rem;
		width: 100%;
	}
`;

export default ChartData;
