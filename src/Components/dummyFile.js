import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink, MdColorLens } from "react-icons/md";

function Profile() {
	const { githubUser } = useContext(GithubContext);
	const {
		avatar_url,
		bio,
		name,
		blog,
		company,
		followers,
		following,
		public_repos,
		location,
		html_url,
	} = githubUser;
	console.log(githubUser);

	const items = [
		{
			id: 1,
			icon: <MdBusiness className="icon" />,
			label: "business",
			value: company,
			color: "pink",
		},

		{
			id: 2,
			icon: <MdLocationOn className="icon" />,
			label: "location",
			value: location,
			color: "green", //this is coming from style component, find it down below
		},

		{
			id: 3,
			icon: <MdLink className="icon" />,
			label: "link",
			value: blog,
			color: "purple",
		},
	];

	const infos = [
		{
			id: 1,
			label: "Repositories",
			value: public_repos,
		},
		{
			id: 2,
			label: "Followers",
			value: followers,
		},
		{
			id: 1,
			label: "Following",
			value: following,
		},
	];

	return (
		<Wrapper>
			<div className="avatar">
				<img src={avatar_url} alt="avatar" />
				<h1>{name}</h1>
				<a href={html_url}>@{name}</a>
				<div className="item_container">
					{items.map((item) => {
						return <Item key={item.id} {...item} />;
					})}
				</div>
				<div className="info_container">
					{infos.map((info) => {
						return <Info key={info.id} {...info} />;
					})}
				</div>
			</div>
		</Wrapper>
	);
}

const Item = ({ icon, label, value, color }) => {
	return (
		<div className="info">
			<h3 className={color}>{icon}</h3>
			<p>{value}</p>
		</div>
	);
};

const Info = ({ label, value }) => {
	return (
		<div className="box">
			<h4>{value}</h4>
			<h4>{label}</h4>
		</div>
	);
};

const Wrapper = styled.div`
	height: 40rem;
	width: 100%;
	border: solid red;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: var(--black);
	color: var(--white);

	.avatar {
		border: solid blue;
		height: 30rem;
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.item_container {
		/* border: solid yellow; */
		width: 30rem;
		display: flex;
		justify-content: space-around;
		align-items: center;

		.info {
			display: flex;
			justify-content: center;
			align-items: center;

			h3 {
				margin-right: 4px;
			}
		}
	}

	.box {
		/* border: solid yellow; */
		width: 9rem;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 10px;
		background-color: var(--darkGrey);
	}

	.info_container {
		border: solid yellow;
		width: 30rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		width: 125px;
		height: 125px;
		border-radius: 100%;
		border: solid thick var(--lightBlue);
	}

	h1 {
		font-size: 2rem;
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--blue);
		cursor: pointer;
		&:hover {
			text-decoration: underline;
		}
	}

	.pink {
		color: var(--pink);
	}

	.green {
		color: var(--green);
	}

	.purple {
		color: var(--purple);
	}
`;

export default Profile;
