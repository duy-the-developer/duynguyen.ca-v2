import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    background-color: var(--color-gray-dark);
	height: calc(100vh - var(--padding-page)*2 - var(--margin-page)*2);

	color: var(--color-amber-light);
    font-family: 'Press Start 2P', cursive;
	font-size: 75%;
	text-shadow: 0 0 5px var(--color-amber-light);

	--padding-page: 0px;
	--margin-page: 0px;

	/* Old School Apple Terminal Palette */
    --color-green: rgb(51, 255, 51);
	--color-black: rgb(0,0,0);

	/* Old School VT320 Terminal Palette */
	--color-amber-dark: rgb(255,156,0);
	--color-amber-light: rgb(255,176,0);
	--color-amber-lighter: rgb(255,204,0);
	--color-gray-dark: rgb(35,35,35);

	/* Cyberpunk Color Palette */
	--color-pink-dark: rgb(113,28,145);
	--color-pink-light: rgb(255,0,217);
	--color-blue-light: rgb(10,189,198);
	--color-blue-dark: rgb(19,62,124);
	--color-blue-darker: rgb(9,24,31);
}

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	background-color: inherit;
    color: inherit;
	padding: 0 0 var(--padding-page) 0;
	text-shadow: inherit;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
	font-family: 'Press Start 2P', cursive;
}
`;
