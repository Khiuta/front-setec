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
    font-size: 4vh;

    position: inherit;
  }

  input {
    font-size: 2.9vh;
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
    width: 8vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 3vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;

    position: absolute;
    top:80%;
    left: 80%;

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
    position: absolute;
    left: 40%;
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
    font-size: 2.6vh;

    position: inherit;
  }

  input {
    font-size: 1.7vh;
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
    min-width: 30vw;
    max-width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    margin-top: 6vh;
    height: 3vh;
    position: absolute;
    left:35%;

  }
  }
  @media only screen and (min-width: 400px) and (max-width: 499px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
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
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 25vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.8vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
   position: absolute;
   left: 35%;
   top: 88%;
  }
  }
  @media only screen and (min-width: 500px) and (max-width: 599px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 3.4vh;

    position: relative;
    top: 5%;
  }

  input {
    font-size: 2.5vh;
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
    width: 25vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.8vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;
   position: absolute;
   left: 35%;
   top: 105%;
  }
  }
  @media only screen and (min-width: 600px) and (max-width: 699px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    font-size: 3.3vh;
    justify-content: space-around;
  }

  input {
    font-size: 2.8vh;
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
    width: 20vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;


  }

  .botao {
    height: 3vh;
    position: absolute;
    left: 40%;
    top: 90%;
  }
  }
  @media only screen and (min-width: 700px) and (max-width: 799px) {
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
    gap: 1vh;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 12vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;

    position: absolute;
    top:80%;

  }
  }
  @media only screen and (min-width: 800px) and (max-width: 899px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: row;
    font-size: 3.4vh;

    position: inherit;
  }

  input {
    font-size: 2.5vh;
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
    width: 15vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;

    position: absolute;
    top:75%;

  }
  }
  @media only screen and (min-width: 900px) and (max-width: 999px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: row;
    font-size: 3.5vh;

    position: inherit;
  }

  input {
    font-size: 2.5vh;
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
    width: 12vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;

    position: absolute;
    top:75%;

  }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1410px) {
    display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: roe;
    font-size: 4vh;

    position: inherit;
  }

  input {
    font-size: 3vh;
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
    width: 12vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.5vh;
    font-weight: 300;
  }

  .botao {
    height: 3vh;

    position: absolute;
    top:80%;

  }
  }

`;
