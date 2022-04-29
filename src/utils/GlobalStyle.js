import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
	@keyframes scanline {
    0% {
      background-position: 200% 200% 
    }
    100% {
      background-position: 0% 0%
    }
  }

  	background: linear-gradient(0deg, rgba(25,25,25,1) 0%, rgba(25,25,25,1) 54%, rgba(35,35,35,1) 55%, rgba(25,25,25,1) 85%, rgba(25,25,25,1) 100%);
	background-size: 100% 200%; 
	animation: scanline 10s linear infinite;
	height: calc(100vh - var(--padding-page)*2 - var(--margin-page)*2);

	color: var(--color-green);
    font-family: 'Press Start 2P', cursive;
	font-size: 100%;
	text-shadow: 0 0 5px var(--color-green);
	line-height: 1.5ch;

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
	font-family: inherit;
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
