import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import Doughnut from "./charts/Doughnut2d";
import Pie from "./charts/Pie3D";
import Column from "./charts/Column2D";

function ChartData() {
	const { repos } = useContext(GithubContext);

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
		<Wrapper>
			<div className="chart_container">
				<div className="chart_box">
					<Doughnut width="100%" height="100%" data={mostUsed} />
				</div>

				<div className="chart_box">
					<Pie data={mostPopular} />
				</div>

				<div className="chart_box">
					<Column data={stars} />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 30rem;
	width: 100%;
	/* border: solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--grey);

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
		background-color: var(--lightestBlue);
		height: 100%;
		width: 27rem;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default ChartData;
