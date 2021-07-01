import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary--color: black;
  --secondary-color: white;
  --primary-bgcolor: seagreen;
  --secondary-bgcolor: darkseagreen;
}

body {
    text-align:center;
    font-family: Arial, Helvetica, sans-serif;
}

`;

export default Globalstyle;
