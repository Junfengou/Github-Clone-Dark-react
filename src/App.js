import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GithubContext } from "./context/context";
import Search from "./Components/Search";
import Main from "./Components/Main";
import Error from "./Components/Error";
import NoUser from "./Components/NoUser";
import "./App.css";

function App() {
	const { githubUser } = useContext(GithubContext);
	// console.log("look for name: ", fullname);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/home" component={Main} />
					<Route path="/nouser" component={NoUser} />
					<Route path="/" exact component={Search} />
					<Route path="/*" component={Error} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

/**<Profile />
			<Charts />
			<List /> */
