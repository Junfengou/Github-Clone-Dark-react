import React, { useState, useEffect, createContext } from "react";
import mockUser from "./Data/mockUser";
import mockFollowers from "./Data/mockFollowers";
import mockRepos from "./Data/mockRepos";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
	const [githubUser, setGithubUser] = useState(mockUser);
	const [followers, setFollowers] = useState(mockFollowers);
	const [repos, setRepos] = useState(mockRepos);
	return (
		<GithubContext.Provider value={{ githubUser, repos, followers }}>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
