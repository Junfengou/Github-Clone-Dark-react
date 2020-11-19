import React from "react";
import styled from "styled-components";
function Footer() {
	return (
		<Wrapper>
			<p>
				Built with{" "}
				<a
					href="https://www.fusioncharts.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					FusionChart
				</a>{" "}
				&middot;
				<a
					href="https://styled-components.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Styled Components
				</a>{" "}
				&middot;{" "}
				<a
					href="https://react-icons.github.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Icons
				</a>{" "}
				and more{" "}
			</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	height: 5rem;
	/* border: solid gold; */
	background-color: var(--offWhite);
	display: flex;
	justify-content: center;
	align-items: center;
	p {
		font-family: "Harmattan", sans-serif;
		font-size: 1.2rem;
	}

	a {
		text-decoration: none;
		font-family: "Harmattan", sans-serif;
		font-size: 1.1rem;
	}
`;

export default Footer;
