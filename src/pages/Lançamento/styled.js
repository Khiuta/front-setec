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
    // padding-left:10vw;
  }

  .lado-1 section {
    display: flex;
    flex: 1 1 100%;
    height: 50%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    gap: 15px;
  }

  .lado-1 section label {
    display: flex;
    min-width: 80%;
    max-width: 100%;
    gap: 10px;
    word-wrap: break-word;
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


  }

  .lado-2 section {
    display: flex;
    flex: 1 1 100%;
    height: 50%;
    flex-direction: column;
    align-items: center;
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
  @media only screen and (min-width: 768px) and (max-width: 900px){
    display: flex;
    flex: 1 1 100%;
    height: calc(100vh - 300px);
    form {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 1 100%;
    height: 100%;
    flex-wrap: wrap;
    }
    input {
    width: 190px;
    font-size: 25px;
    font-family: 'Raleway';
    }
    #data_pag{
      width: 250px;
    font-size: 25px;
    }

    #mes_ref {
    width: 200px;
    font-size: 25px;
    }
    .lado-1 {
    display: flex;
    flex: 1 1 50%;
    height: 40%;
    align-items: center;
    justify-content: flex-start;

    }
    .lado-1 section {
    display: flex;
    flex: 1 1 50%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    position: relative;
    top: 20%;

    }
    .lado-1 section label {
    display: flex;
    min-width: 80%;
    max-width: 100%;
    gap: 10px;

    justify-content: flex-start;
    align-items: center;
    }
    .lado-1 .metodos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;


    input {
      width: 20px;
      height: 20px;
    }
    }
    .lado-2 {
      display: flex;
    flex: 1 1 50%;
    height: 40%;
    align-items: center;
    justify-content: flex-start;
    }
    .lado-2 section {
      display: flex;
    flex: 1 1 50%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    position: relative;
    top: 17%;

    }
    .lado-2 section label {
      display: flex;
      min-width: 80%;
      max-width: 100%;
      gap: 10px;

      justify-content: flex-start;
      align-items: center;
    }
    footer {
    display: flex;
    flex: 1 1 100%;
    height: 30%;
    align-items: flex-start;
    justify-content: center;

    position: relative;
    top: 0vh;
    }
    button {
    display: flex;
    width: 100px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background: ${colors.statusGreenColor};
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Raleway';
    cursor: pointer;
    }
  }
  @media only screen and (min-width: 412px) and (max-width: 428px){
    display: flex;
    flex: 1 1 100%;
    height: calc(100vh - 300px);
    form {
    display: flex;
    flex: 1 1 100%;
    height: 100%;
    flex-wrap: wrap;
    font-size: 15px;
    }
    input {
    width: 150px;
    font-size: 20px;
    padding: 2px 0px 2px 5px;
    font-family: 'Raleway';
    }
    #data_pag,
    #mes_ref {
    width: 150px;
    font-size: 15px;
    }
    .lado-1 {
    display: flex;
    flex: 1 1 50%;
    height: 40%;
    align-items: flex-end;
    justify-content: flex-start;

    }
    .lado-1 section {
    display: flex;
    flex: 1 1 50%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    position: relative;
    top: 4vh;

    }
    .lado-1 section label {
    display: flex;
    min-width: 80%;
    max-width: 100%;
    gap: 10px;

    justify-content: flex-start;
    align-items: center;
    }
    .lado-1 .metodos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;


    input {
      width: 20px;
      height: 20px;
    }
    }
    .lado-2 {
    display: flex;
    flex: 1 1 50%;
    height: 40%;
    justify-content: center;
    align-items: center;
    }
    .lado-2 section {
    display: flex;
    flex: 1 1 50%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    position: relative;
    top: 5vh;

    }
    .lado-2 section label {
      display: flex;
      min-width: 80%;
      max-width: 100%;
      gap: 10px;

      justify-content: flex-start;
      align-items: center;
    }
    footer {
    display: flex;
    flex: 1 1 100%;
    height: 30%;
    align-items: flex-start;
    justify-content: center;

    position: relative;
    top: 5vh;
    }
    button {
    display: flex;
    width: 100px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background: ${colors.statusGreenColor};
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Raleway';
    cursor: pointer;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 390px){
    display: flex;
    flex: 1 1 100%;
    height: calc(100vh - 300px);

    form {
    display: flex;
    flex: 1 1 100%;
    height: 100%;
    flex-wrap: wrap;
    font-size: 20px;
    }

    input {
    width: 140px;
    font-size: 15px;
    padding: 2px 0px 2px 5px;
    font-family: 'Raleway';
    }

    #data_pag,
    #mes_ref {
    width: 150px;
    font-size: 15px;
    }

    .lado-1 {
    display: flex;
    flex: 1 1 50%;
    height: 40%;
    align-items: flex-end;
    justify-content: flex-start;
    }

    .lado-1 section {
    display: flex;
    flex: 1 1 50%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;

    position: relative;
    top: 5vh;
    }

    .lado-1 section label {
    display: flex;
    min-width: 80%;
    max-width: 100%;
    gap: 10px;

    justify-content: flex-start;
    align-items: center;
    }

    .lado-1 .metodos {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;


    input {
      width: 20px;
      height: 20px;
    }

    }
    .lado-2 {
    display: flex;
    flex: 1 1 50%;
    height: 40%;
    justify-content: center;
    align-items: center;
    }
    .lado-2 section {
      display: flex;
    flex: 1 1 50%;
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: relative;
    top: 10vh;

    }
    .lado-2 section label {
      display: flex;
      min-width: 80%;
      max-width: 100%;
      gap: 10px;

      justify-content: flex-start;
      align-items: center;
    }
    footer {
    display: flex;
    flex: 1 1 100%;
    height: 30%;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    top: 13vh;
    }
    button {
    display: flex;
    width: 100px;
    height: 45px;
    align-items: center;
    justify-content: center;
    background: ${colors.statusGreenColor};
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-family: 'Raleway';
    cursor: pointer;
    }
  }
`;
