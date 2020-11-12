import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #fff;
    color: #28292e;
  }

  body, input, button {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
