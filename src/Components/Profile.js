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
					<div className="name_wrapper">
						<h1>{name}</h1>
						<a href={html_url}>@{name}</a>
					</div>
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
						<h5>
							Request: <span>{request}</span> / 60
						</h5>
						<p>
							<BiSearchAlt className="icon_color" />
							<a onClick={targetLink}>Search more users</a>
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
	span {
		color: var(--purple);
	}

	.name_wrapper {
		/* border: solid red; */
		width: 20rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 1rem;
		h1 {
			margin-bottom: -0.4rem;
		}
		@media (max-width: 1600px) {
			/* flex-direction: row; */
			width: 21rem;

			h1 {
				margin-bottom: -0.8rem;
			}
		}
	}

	.message {
		/* border: solid red; */
		height: 6rem;
		width: 50%;
		display: flex;
		justify-content: center;
		align-items: center;

		p {
			font-size: 1.3rem;
			margin-left: 1rem;
			/* border: solid red; */
			font-family: "Harmattan", sans-serif;
		}
		@media (max-width: 1500px) {
			/* border: solid purple; */
			justify-content: center;
			p {
				margin-left: 1rem;
			}
		}

		@media (max-width: 1000px) {
			flex-direction: column !important;
			h5 {
				margin-bottom: -1rem;
			}
		}
	}
	.item_container {
		/* border: solid yellow; */
		width: 30rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-bottom: 0.9rem;
		.info {
			/* border: solid red; */
			height: 1.9rem;
			display: flex;
			justify-content: center;
			align-items: center;

			h3 {
				margin-right: 4px;
			}
		}

		@media (max-width: 1000px) {
			flex-direction: column;
		}
	}

	.icon_color {
		color: var(--lightBlue);
	}

	.box_container {
		display: flex;
		justify-content: center;
		align-items: center;
		/* border: solid yellow; */
		width: 32rem;

		@media (max-width: 500px) {
			flex-direction: column;
		}
	}
	img {
		width: 125px;
		height: 125px;
		border-radius: 100%;
		border: solid var(--lightBlue);
		border-width: 0.6rem;
		/* border: solid red; */
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
	@media (max-width: 1000px) {
		height: 40rem;
		width: 100%;
		background-color: var(--black);
	}

	@media (max-width: 500px) {
		height: 40rem;
		/* width: 30rem; */
		width: 100%;
		/* border: solid red; */
		background-color: var(--black);

		.avatar {
			/* border: solid red; */
			img {
				/* border: solid blueviolet; */
				height: 90px;
				width: 90px;
			}
		}

		.name_wrapper {
			/* border: solid blue; */
			width: 8rem;
		}

		.box_container {
			/* border: solid yellow; */
			display: flex;
			flex-direction: row;
			width: 15rem;
		}

		.item_container {
			/* border: solid blue; */
			width: 10rem;
		}
	}

	/* @media (max-width: 400px) {
		height: 40rem;
		width: 100%;
		background-color: var(--black);
	} */
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
