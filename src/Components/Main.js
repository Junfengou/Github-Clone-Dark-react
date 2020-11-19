import React from "react";
import Profile from "./Profile";
import Charts from "./ChartData";
import List from "./List";
import Footer from "./Footer";

function Main() {
	return (
		<div>
			<Profile />
			<Charts />
			<List />
			<Footer />
		</div>
	);
}

export default Main;
