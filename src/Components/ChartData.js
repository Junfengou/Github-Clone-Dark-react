import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Line, Bar, Pie, Doughnut, HorizontalBar } from "react-chartjs-2";
import { GithubContext } from "../context/context";

function ChartData() {
	const { repos } = useContext(GithubContext);
	const [chartData, setChartData] = useState({});
	const [pieCharData, setPieChartData] = useState({});
	const [barCharData, setBarChartData] = useState({});
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

	const BarChart = () => {
		setBarChartData({
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
		PieChart();
		BarChart();
		LineChart();
	}, []);

	return (
		<Wrapper>
			<div className="chart_container">
				<div className="chart_box">
					<Pie
						data={pieCharData}
						options={{
							title: { text: "Most Starred", display: true },
							// maintainAspectRatio: false,
							responsive: true,
						}}
					/>
				</div>

				<div className="chart_box">
					<Bar
						data={barCharData}
						options={{
							title: { text: "Most Used", display: true },
							maintainAspectRatio: false,
						}}
					/>
				</div>

				<div className="chart_box">
					<HorizontalBar
						data={chartData}
						options={{
							title: { text: "Most Used", display: true },
							responsive: true,
						}}
					/>
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
		border: solid blue;
		height: 30rem;
		width: 70%;
		/* width: 40rem; */
		display: flex;
		justify-content: space-around;
		margin-top: -11rem !important;
	}

	.chart_box {
		border: solid green;
		background-color: var(--white);
		height: 30rem;
		width: 30%;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.chart_info {
		border: solid red;
		height: 100%;
	}
`;

export default ChartData;
