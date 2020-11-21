import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import Box from "./Box";

function Profile() {
	const { githubUser, request, invalidUser } = useContext(GithubContext);
	const {
		avatar_url,
		name,
		blog,
		company,
		followers,
		following,
		public_repos,
		location,
		html_url,
		login,
	} = githubUser;

	const history = useHistory();

	const targetLink = () => {
		history.push({
			pathname: "/",
		});
		history.go(0);
	};

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

	// console.log("items: ", items);
	return (
		<Wrapper>
			{invalidUser.show ? (
				<div>
					<p>{invalidUser.msg}</p>
					<p>
						<BiSearchAlt className="icon_color" />
						<a onClick={targetLink}>Search more users</a>
						{/* <Link to="/">Search more users</Link> */}
					</p>
				</div>
			) : (
				<div className="avatar">
					<img src={avatar_url} alt="avatar" />
					<h1>{name}</h1>
					<a href={html_url}>@{name}</a>
					<div className="item_container">
						{items.map((item) => {
							return <Item key={item.id} {...item} />;
						})}
					</div>
					<div className="box_container">
						<Box data={public_repos} text="Repositories" />
						<Box data={followers} text="Followers" />
						<Box data={following} text="Following" />
					</div>
					<div className="message">
						{invalidUser.msg}
						<p>Request: {request} / 60</p>
						<p>
							<BiSearchAlt className="icon_color" />
							<a onClick={targetLink}>Search more users</a>
							{/* <Link to="/">Search more users</Link> */}
						</p>
					</div>
				</div>
			)}
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

const Wrapper = styled.div`
	height: 40rem;
	width: 100%;
	/* border: solid red; */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: var(--black);

	color: var(--white);

	.avatar {
		/* border: solid blue; */
		height: 30rem;
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-top: -3rem !important;
	}

	.message {
		/* border: solid red; */
		width: 50%;
		display: flex;
		justify-content: space-evenly;
		align-items: center;

		p {
			font-size: 1.3rem;
			/* border: solid red; */
			font-family: "Harmattan", sans-serif;
		}
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

	.icon_color {
		color: var(--lightBlue);
	}

	.box_container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		/* border: solid yellow; */
		width: 32rem;
	}
	img {
		width: 125px;
		height: 125px;
		border-radius: 100%;
		border: solid var(--lightBlue);
		border-width: 0.6rem;
	}

	h1 {
		/* font-size: 2rem; */
		font-family: "Harmattan", sans-serif;
		font-size: 1.6rem;
		/* border: solid red; */
	}

	a {
		text-decoration: none;
		font-size: 1.2rem;
		color: var(--lightBlue);
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

{
	/**

		<Wrapper>
			{invalidUser.show ? (
				<div>
					<p>{invalidUser.msg}</p>
					<p>
						<BiSearchAlt className="icon_color" />
						<Link to="/">Search more users</Link>
					</p>
				</div>
			) : (
				<div className="avatar">
					<img src={avatar_url} alt="avatar" />
					<h1>{name}</h1>
					<a href={html_url}>@{name}</a>
					<div className="item_container">
						{items.map((item) => {
							return <Item key={item.id} {...item} />;
						})}
					</div>
					<div className="box_container">
						<Box data={public_repos} text="Repositories" />
						<Box data={followers} text="Followers" />
						<Box data={following} text="Following" />
					</div>
					<div className="message">
						{invalidUser.msg}
						<p>Request: {request} / 60</p>
						<p>
							<BiSearchAlt className="icon_color" />
							<Link to="/">Search more users</Link>
						</p>
					</div>
				</div>
			)}
		</Wrapper>

*/
}
