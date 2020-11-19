import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
	Line,
	Bar,
	Pie,
	HorizontalBar,
	Doughnut,
	Bubble,
	Radar,
} from "react-chartjs-2";
import { GithubContext } from "../context/context";
import BigNut from "./charts/Doughnut2d";
import BigPie from "./charts/Pie3D";
import BigBar from "./charts/Bar3D";

function ChartData() {
	const { repos } = useContext(GithubContext);
	const [chartData, setChartData] = useState({});
	const [doughnutCharData, setDoughnutChartData] = useState({});
	const [radarCharData, setRadarChartData] = useState({});

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

	console.log("languages: ", language);

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

	// ---------------------------------------------------------------->
	const DoughnutChart = () => {
		setDoughnutChartData({
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

	const RadarChart = () => {
		setRadarChartData({
			labels: [mostUsed[0].label, mostUsed[1].label, mostUsed[2].label],
			datasets: [
				{
					label: [mostUsed[0].label, mostUsed[1].label, mostUsed[2].label],
					data: [mostUsed[0].value, mostUsed[1].value, mostUsed[2].value],
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

	useEffect(() => {
		DoughnutChart();
		RadarChart();
		LineChart();
	}, []);

	return (
		<Wrapper>
			<div className="chart_container">
				<div className="chart_box">
					{/* <Doughnut
						data={doughnutCharData}
						options={{
							title: {
								text: "Stars per language",
								display: true,
								fontSize: 25,
								fontFamily: "'Mukta', sans-serif",
								fontColor: "#1a1e22",
								fontStyle: "normal",
							},
							maintainAspectRatio: false,
							aspectRatio: 7,
							responsive: true,
						}}
					/> */}
					<BigNut width="100%" height="100%" data={dummyData} />
				</div>

				<div className="chart_box">
					{/* <Radar
						data={radarCharData}
						options={{
							title: { text: "Most Used", display: true },
							maintainAspectRatio: false,
						}}
					/> */}
					<BigPie data={dummyData} />
				</div>

				<div className="chart_box">
					{/* <Line
						data={chartData}
						options={{
							title: { text: "Most Used", display: true },
							responsive: true,
							maintainAspectRatio: false,
						}}
					/> */}
					<BigBar data={dummyData} />
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

	.chart_container {
		/* border: solid blue; */
		height: 30rem;
		width: 90rem;
		/* width: 40rem; */
		display: flex;
		justify-content: space-around;
		margin-top: -11rem !important;
	}

	.chart_box {
		/* border: solid green; */
		background-color: var(--grey2);
		height: 100%;
		width: 27rem;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export default ChartData;
