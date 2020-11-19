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

	const searchGithubUser = async (user) => {
		const getProfile = await axios(`${rootUrl}/users/${user}`).catch((err) =>
			console.log(err)
		);
		const getRepos = await axios(
			`${rootUrl}/users/${user}/repos?per_page=100`
		).catch((err) => {
			console.log(err);
		});

		const getFollowers = await axios(
			`${rootUrl}/users/${user}/followers`
		).catch((err) => {
			console.log(err);
		});

		if (getProfile && getRepos && getFollowers) {
			//3:40:00 [https://www.youtube.com/watch?v=dR_Fol8nAzo] rewatch this part if run into error
			setGithubUser(getProfile.data);
			setRepos(getRepos.data);
			setFollowers(getFollowers.data);
			//This line of code will make sure every information is loaded before display them on the site
			//	instead of having each item load one at a time
			await Promise.allSettled([getProfile, getRepos, getFollowers]).then(
				(results) => {
					console.log("results: ", results);
				}
			);
		} else {
			console.log("do nothing for now");
		}
	};

	console.log("githubUser : ", githubUser);
	return (
		<GithubContext.Provider
			value={{ githubUser, repos, followers, searchGithubUser }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
