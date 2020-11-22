import React from "react";
import styled from "styled-components";

function Box({ data, text }) {
	var numForm = data.toLocaleString();
	// console.log("data: ", data);
	// console.log(text);
	return (
		<Wrapper>
			<h2>{numForm}</h2>
			<p>{text} </p>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	/* border: solid red; */
	background-color: var(--darkGrey);
	width: 9rem;
	height: 5rem;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-right: 1rem;
	h2 {
		font-family: "Big Shoulders Stencil Text", cursive;
	}

	p {
		margin-top: -1.2rem;
		color: var(--grey);
		font-size: 1.2rem;
		font-family: "Harmattan", sans-serif;
	}

	@media (max-width: 1500px) {
		width: 9rem;
		height: 5rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 1000px) {
		width: 8rem;
		height: 4rem;
		margin-bottom: 1rem;
	}
`;
export default Box;
