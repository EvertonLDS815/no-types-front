import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  
  * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  body {
    background: #f79332;
  }
  
  body::-webkit-scrollbar {
    width: 8px;               /* width of the entire scrollbar */
    background-color: #222;
  }

  body::-webkit-scrollbar-track {
      position: fixed;        /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
      background-color: #f79332;
  }
`;
