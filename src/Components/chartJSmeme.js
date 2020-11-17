import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
function Red() {
	const [chartData, setChartData] = useState({});
	const [pieCharData, setPieChartData] = useState({});
	const [barCharData, setBarChartData] = useState({});

	const { repos } = useContext(GithubContext);
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

	// console.log("language: ", language);
	// console.log("repos: ", repos);

	// ---------------------------------------------------------------->

	const mostUsed = Object.values(language)
		.sort((lowest, highest) => {
			return highest.value - lowest.value; // Always return the highest value language first
		})
		.slice(0, 5);
	// console.log("array form: ", mostUsed);

	// const listItems = mostUsed.map((item) => ({ item }));
	// console.log("this: ", listItems);

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
	console.log("most popular: ", mostPopular);

	// ---------------------------------------------------------------->
	const LineChart = () => {
		setChartData({
			labels: [mostUsed[0].label, mostUsed[1].label, mostUsed[2].label],
			datasets: [
				{
					label: "Number of languages in repos",
					data: [mostUsed[0].value, mostUsed[1].value, mostUsed[2].value],
					backgroundColor: ["rgba(75, 192, 192, 0.6)"],
					borderWidth: 4,
				},
			],
		});
	};

	// ---------------------------------------------------------------->

	const PieChart = () => {
		setPieChartData({
			labels: [
				mostPopular[0].label,
				mostPopular[1].label,
				mostPopular[2].label,
			],
			datasets: [
				{
					label: "Number of stars in repos",
					data: [
						mostPopular[0].value,
						mostPopular[1].value,
						mostPopular[2].value,
					],
					backgroundColor: [
						"rgba(75, 192, 192, 0.6)",
						"rgba(75, 234, 192, 0.6)",
						"rgba(75, 192, 12, 0.6)",
					],
					borderWidth: 4,
				},
			],
		});
	};

	// ---------------------------------------------------------------->

	const BarChart = () => [
		setBarChartData({
			labels: [mostUsed[0].label, mostUsed[1].label, mostUsed[2].label],
			datasets: [
				{
					label: "Number of languages in repos",
					data: [mostUsed[0].value, mostUsed[1].value, mostUsed[2].value],
					backgroundColor: [
						"rgba(75, 192, 192, 0.6)",
						"rgba(75, 234, 192, 0.6)",
						"rgba(75, 192, 12, 0.6)",
					],
					borderWidth: 4,
				},
			],
		}),
	];

	useEffect(() => {
		LineChart();
		PieChart();
		BarChart();
	}, []);
	return (
		<Wrapper>
			<h1>MEME CHARTS</h1>
			<Line
				data={chartData}
				options={{
					responsive: true,
					title: { text: "Repos", display: true },
					scales: {
						yAxes: [
							{
								ticks: {
									autoSkip: true,
									maxTicksLimit: 10,
									beginAtZero: true,
								},
								gridLines: {
									display: true,
								},
							},
						],
						xAxes: [
							{
								gridLines: {
									display: false,
								},
							},
						],
					},
				}}
			/>
			<Bar data={barCharData} />
			<Pie
				data={pieCharData}
				options={{
					title: { text: "Stars", display: true },
				}}
			/>
			<Doughnut
				data={pieCharData}
				options={{
					title: { text: "Stars", display: true },
				}}
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 100%;
	width: 50%;
	/* border: solid red; */
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Block = styled.div`
	height: 2rem;
	width: 2rem;
	border: solid purple;
`;

export default Red;
