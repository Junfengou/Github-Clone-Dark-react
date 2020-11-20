import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.candy";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function Doughnut2d({ data }) {
	const chartConfigs = {
		type: "doughnut2d", // The chart type
		height: "450", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				caption: "Programming language",
				theme: "candy", //make sure the candy theme is imported
				decimals: 0,
				doughnutRadius: "45%",
				pieRadius: "45%",
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
}

export default Doughnut2d;
