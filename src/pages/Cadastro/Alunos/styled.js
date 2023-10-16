import styled from 'styled-components';
import { statusGreenColor, primaryLightColor } from '../../../config/colors';

export const Title = styled.header`
  width: 412px;
  height: 12vh;
  background: ${statusGreenColor};
  padding: 30px 35px;

  h1 {
    font-style: italic;
    font-weight: 100;
    text-shadow: 3px 3px rgba(0, 0, 0, .2);
    
  }

  @media only screen and (max-width: 412px){

  }
`;

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

  @media only screen and (max-width: 840px) {
    form {
      flex-direction: column;
    }

    .botao {
      height: 150px;
      align-items: center;
      justify-content: center;
    }

    button {
      width: 75%;
      font-size: 24px;
    }

    .lado-1 {
      padding: 0px 5px 7.5px 5px;
    }

    .lado-2 {
      padding: 7.5px 5px 0px 5px;
    }
  }

  @media only screen and (max-width: 360px) {
    form {
      font-size: 15px;
      font-weight: bold;
    }
  }
`;
