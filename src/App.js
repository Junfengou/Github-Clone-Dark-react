import React, { useContext } from "react";
import { GithubContext } from "./context/context";
import MemeChart from "./Components/chartJSmeme";
import Profile from "./Components/Profile";
import "./App.css";

function App() {
	const { githubUser } = useContext(GithubContext);
	const { avatar_url } = githubUser;
	// console.log(githubUser);

	return (
		<div className="App">
			{/* <MemeChart /> */}
			<Profile />
		</div>
	);
}

export default App;
