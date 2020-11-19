import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GithubContext } from "./context/context";
import Search from "./Components/Search";
import Main from "./Components/Main";
import "./App.css";

function App() {
	const { githubUser } = useContext(GithubContext);
	const { avatar_url } = githubUser;
	// console.log(githubUser);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/home" component={Main} />
					<Route path="/" exact component={Search} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

/**<Profile />
			<Charts />
			<List /> */
