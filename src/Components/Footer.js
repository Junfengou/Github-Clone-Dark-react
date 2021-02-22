import React from "react";
import styled from "styled-components";
import Fullscreen from "../image/Readme/Fullscreen.png";
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
			</p>
			<p>
				<a
					href="https://react-icons.github.io/"
					target="_blank"
					rel="noopener noreferrer"
				>
					React Icons
				</a>{" "}
				&middot;{" "}
				<a
					href="https://www.npmjs.com/package/axios"
					target="_blank"
					rel="noopener noreferrer"
				>
					Axios
				</a>{" "}
				and more{" "}
			</p>
		</Wrapper>
	);
}

const Wrapper = styled.div`
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
		margin-left: 10px;
		margin-right: 10px;
	}
	@media (max-width: 1000px) {
		display: flex;
		flex-direction: column;
		p {
			line-height: 0.1rem;
		}
	}

	@media (max-width: 500px) {
		p {
			font-size: 0.9rem;
		}

		a {
			font-size: 0.9rem;
		}
	}
`;

export default Footer;

{
	/**
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

*/
}
