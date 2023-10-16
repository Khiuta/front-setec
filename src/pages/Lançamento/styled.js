import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.header`
  width: 100vw;
  height: 12vh;
  background: ${colors.primaryLightColor};
  padding: 30px 35px;

  h1 {
    font-style: italic;
    font-weight: 100;
    text-shadow: 3px 3px rgba(0, 0, 0, .2);
  }
`;

export const Content = styled.main`
  display: flex;
  flex: 1 1 100%;
  height: calc(100vh - 220px);

  button {
    display: flex;
    width: 100px;
    height: 50px;
    align-items: center;
    justify-content: center;
    background: ${colors.statusGreenColor};
    border: none;
    border-radius: 5px;
    font-size: 24px;
    font-family: 'Raleway';
    cursor: pointer;
  }

  form {
    display: flex;
    flex: 1 1 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  input {
    width: 360px;
    font-size: 24px;
    padding: 2px 0px 2px 5px;
    font-family: 'Raleway';
  }

  #meses_pagos {
    width: 160px;
  }

  #val_mat,
  #val_rec {
    width: 120px;
  }

  #data_pag,
  #mes_ref {
    width: 200px;
  }

  .lado-1 {
    display: flex;
    flex: 1 1 50%;
    height: 70%;
    align-items: center;
    justify-content: center;
    // padding-left:10vw;
  }

  .lado-1 section {
    display: flex;
    flex: 1 1 50%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // border: 1px solid black;
    font-size: 24px;
    gap: 15px;
  }

  .lado-1 section label {
    display: flex;
    min-width: 80%;
    max-width: 100%;
    gap: 10px;
    // border: 1px solid black;
    justify-content: center;
  }

  .lado-1 .metodos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid black;
    padding: 0;
    gap: 20px;

    input {
      width: 20px;
      height: 20px;
    }
  }

  .lado-2 {
    display: flex;
    flex: 1 1 50%;
    height: 70%;
    align-items: center;
    // background: beige;
    // padding-left:10vw;

  }

  .lado-2 section {
    display: flex;
    flex: 1 1 100%;
    height: 50%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 24px;
    gap: 15px;
  }

  .lado-2 section label {
    display: flex;
    min-width: 80%;
    max-width: 100%;
    gap: 10px;
    word-wrap: break-word;
  }

  footer {
    display: flex;
    flex: 1 1 100%;
    height: 30%;
    // background: #a1a1a1;
    align-items: center;
    justify-content: center;
  }
`;
