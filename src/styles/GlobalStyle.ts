import {createGlobalStyle} from 'styled-components';
import { darken, lighten } from 'polished';

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  /* min-height: 100vh;
  min-height: -webkit-fill-available; */
  background: var(--color-primary);
  overflow-x:hidden;
}

body {
  overflow-x:hidden;
  -webkit-font-smoothing: antialiased;

  &:before {
    content:'';
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: -1;
    background-image: linear-gradient(var(--color-primary), var(--color-linear));
  }
}

*, button, input {
  border: 0;
  background: none;
  color: var(--color-terciary);
  font-family: 'Roboto', sans-serif;
}

a {
  text-decoration: none;
  color: var(--color-secondary);
  transition: opacity 0.4s;
}

p {
  font-size: 16px;
}

a:hover {
  opacity: 0.6;
}

h1 {
  font-size: 2rem;
}

:root {
  --color-primary: #fca311;
  --color-secondary: #14213d;
  --color-terciary: #e5e5e5;
  --color-black: #000;
  --color-white: #fff;
  --color-shadow: #0d0d0d;

  --color-linear: ${lighten(0.10, '#fca311')};

  --max-width: 960px;
}
`;
