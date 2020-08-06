import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --primary: #2c9ddb;
  --danger: #f32013;
  --lightblue: #ccdee8;
  --lightgrey: #f2f2f2;
  --midgrey: #e0e0e0;
  --grey: #ccc;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p, blockquote, a, img, i,ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, footer, header,nav, section {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}

html {
  box-sizing: border-box;
  font-size:100%;
}
*, *:before, *:after{
  box-sizing: inherit;
}
body{
  padding: 0;
  margin: 0;
  font-family: "Fira Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ol, ul {
	list-style: none;
}

`;

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #e5e5e5;
`;

export default AppWrapper;
