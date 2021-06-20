import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin-top: 15%;

    font: 400 16px 'Roboto Slab', sans-serif;

    display: flex;
    justify-content: center;
  }

  *, button, input {
    font-family: 'Roboto Slab', sans-serif;

    border: 0;
    outline: 0;
  }

  button {
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.fonts.dark};
    font-size: 0.8rem;
    font-weight: 700;

    cursor: pointer;
    text-align: center;
    text-decoration: none;

    display: flex;
    align-items: center;

    &:hover {
    text-decoration: underline;
    }
  }
`;
