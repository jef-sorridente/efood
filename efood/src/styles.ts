import { createGlobalStyle } from "styled-components";

export const colors = {
  background: "#FFF8F2",
  primary: "#E66767",
  secundary: "#FFEBD9",
  tertiary: "#FFF",
};

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;    
        a{
            text-decoration: none;
        }
    }

    body{
        background-color: ${colors.background};
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        
    }

`;
