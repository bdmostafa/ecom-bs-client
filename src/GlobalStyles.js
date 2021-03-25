import { css } from 'styled-components'
import { createGlobalStyle } from 'styled-components';

const Styles = css`
	*,
	::after,
	::before {
		box-sizing: border-box;
		list-style: none;
		margin: 0;
		padding: 0;
	}
	* {
		scrollbar-width: thin;
		scrollbar-color: #024349 #011623;
	}
	*::-webkit-scrollbar {
		width: 12px;
	}
	*::-webkit-scrollbar-track {
		
	}
	*::-webkit-scrollbar-thumb {
		background-color: #024349;
		border-radius: 25px;
		border: 3px solid #011623;
	}
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
	body {
		font-family: 'Montserrat', sans-serif;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		radial-gradient(black, transparent);
		color: #000;
		background: #fff;
	}
	body::-webkit-scrollbar {
		display: none;
	}
	.body {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
	}
	a:hover {
		text-decoration: none;
	}
	button {
		cursor: pointer;
	}
	button:focus {
		outline: 0;
		box-shadow: none;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Rajdhani', sans-serif;
		font-weight: 550;
		line-height: 1.2;
	}
	h1,
	.h1 {
		font-size: 30px;
	}
	@media (min-width: 600px) {
		h1,
		.h1 {
			font-size: 50px;
		}
	}
	h2,
	.h2 {
		font-size: 28px;
	}
	@media (min-width: 1000px) {
		h2,
		.h2 {
			font-size: 36px;
		}
	}
	h3,
	.h3 {
		font-size: 20px;
	}
	@media (min-width: 1000px) {
		h3,
		.h3 {
			font-size: 22px;
		}
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	b {
		color: black;
	}
	p {
		color: #62d6e4;
		font-weight: bold
	}
`

export default createGlobalStyle`${Styles}`;