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
	const [request, setRequest] = useState(0);
	const [error, setError] = useState({ show: false, msg: "" });

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
			// toggleError(true, "there is no user with that username");
		}
		checkRequest();
	};

	// ------------------------------------------------------------->
	const checkRequest = () => {
		//axios by default is a get request
		axios(`${rootUrl}/rate_limit`)
			.then(({ data }) => {
				// console.log("result:", data);
				let {
					rate: { remaining },
				} = data;
				setRequest(remaining);
				if (remaining === 0) {
					// if the remaining request is 0
					//throw an error
					toggleError(true, "Sorry, you have exceeded your hourly rate limit");
					// console.log("Sorry, you have exceeded your hourly rate limit");
				}
			})
			.catch((err) => console.log(err));
	};

	// ------------------------------------------------------------->

	function toggleError(show = false, msg = "") {
		setError({ show, msg });
	}

	useEffect(checkRequest, []);
	// console.log("githubUser : ", githubUser);
	return (
		<GithubContext.Provider
			value={{ githubUser, repos, followers, searchGithubUser, request, error }}
		>
			{children}
		</GithubContext.Provider>
	);
};

export { GithubProvider, GithubContext };
