import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function ChartComponent({ data }) {
	const chartConfigs = {
		type: "pie3d",
		// height: "450", // Height of the chart
		// width: "402",
		height: "370",
		width: "300",
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: "Stars per language",
				theme: "candy",
				decimals: 0,
				pieRadius: "55%",
				showPercentValues: 0,
				showBorder: true,
				borderThickness: 20,
				borderColor: "#6a737d",
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
}

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component

export default ChartComponent;
