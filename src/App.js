import React, { useContext } from "react";
import { GithubContext } from "./context/context";
import MemeChart from "./Components/chartJSmeme";
import Profile from "./Components/Profile";
import Charts from "./Components/ChartData";
import List from "./Components/List";
import "./App.css";

function App() {
	const { githubUser } = useContext(GithubContext);
	const { avatar_url } = githubUser;
	// console.log(githubUser);

	return (
		<div className="App">
			{/* <MemeChart /> */}
			<Profile />
			<Charts />
			<List />
		</div>
	);
}

export default App;
