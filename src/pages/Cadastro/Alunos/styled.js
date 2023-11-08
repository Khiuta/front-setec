import styled from 'styled-components';
import { statusGreenColor, primaryLightColor } from '../../../config/colors';

export const Content = styled.main`
  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: row;
    font-size: 3vh;

    position: inherit;
  }

  input {
    font-size: 2vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 2vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 6vw;
    height: 6vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 80%;
    top:85%;
  }
  @media only screen and (min-width: 265px) and (max-width: 299px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 400px) and (max-width: 649px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 35%;
    top:96%;
  }
  }
  @media only screen and (min-width: 650px) and (max-width: 749px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 750px) and (max-width: 859px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 860px) and (max-width: 1000px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 1001px) and (max-width: 1250px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 1251px) and (max-width: 1410px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
  @media only screen and (min-width: 1411px) and (max-width: 1500px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 2.3vh;

    position: inherit;
  }

  input {
    font-size: 1.5vh;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 4vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
    display: flex;
    align-items: flex-end;
    position: absolute;

    left: 70%;
    top:98%;
  }
  }
`;
