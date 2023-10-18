import styled from 'styled-components';
import { statusGreenColor, primaryLightColor } from '../../../config/colors';

export const Content = styled.main`
  // border: 5px red solid;
  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  // background: #a1a1a1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    // border: 1px solid #a1a1a1;
    display: flex;
    flex-direction: row;
    font-size: 24px;
  }

  input {
    font-size: 20px;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 30px;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 10px;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;
  }

  .botao {
    height: 212px;
    display: flex;
    align-items: flex-end;
  }

  @media only screen and (min-width: 412px) and (max-width: 428px) {
  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);
  // background: #a1a1a1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    // border: 1px solid #a1a1a1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  input {
    font-size: 15px;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;

    width: 100%;
    gap: 15px;
    padding: 30px;

    position: relative;
    top: 7vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 10px;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;
    position: relative;
    top: 3vh;
  }

  .botao {
    height: 212px;
    display: flex;
    align-items: center;
  }
  }

  @media only screen and (min-width: 360px) and (max-width: 390px){
  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 80px);
  // background: #a1a1a1;
  align-items: center;
  justify-content:center;
  flex-direction: column;

  form {
    // border: 1px solid #a1a1a1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }

  input {
    font-size: 12px;
    font-family: 'Raleway';
  }

  .lado-1,
  .lado-2 {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    padding: 30px;
    position: relative;
    top: 5vh;
  }

  .lado-1 label,
  .lado-2 label {
    display: flex;
    gap: 10px;
  }

  button {
    cursor: pointer;
    background: ${statusGreenColor};

    width: 80px;
    height: 50px;

    border: none;
    border-radius: 5px;

    font-size: 20px;
    font-weight: 300;

    position: relative;
    top: 6vh;
  }

  .botao {
    height: 230px;
    display: flex;
    align-items: flex-start;
  }
  }
`;
