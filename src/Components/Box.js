import React from "react";
import styled from "styled-components";

function Box({ data, text }) {
	console.log("data: ", data);
	console.log(text);
	return (
		<Wrapper>
			<h2>{data}</h2>
			<h3>{text} </h3>
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
	h3 {
		margin-top: -1rem;
	}
`;
export default Box;
