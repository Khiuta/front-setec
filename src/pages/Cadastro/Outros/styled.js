import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Main = styled.main`
  display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 220px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;


  .sup {
    display: flex;
    flex-direction: row;
    flex: 1 1 100%;
    padding: 10px;
    gap: 10%;
  }

  .sup .inst,
  .sup .turma-div {
    display: flex;
    width: 45%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sup .inst header,
  .sup .turma-div header {
    // background: red;
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma {
    // background: #a1a1a1;
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 30px;
    font-size: 20px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label {
    display: flex;
    gap: 10px;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form {
    display: flex;
    width: 100%;
    // border: 1px solid blue;
    flex-direction: column;
    align-items: center;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao {
    display: flex;
    // border: 1px solid black;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 35px;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background: ${colors.statusGreenColor};
    font-family: 'Raleway';
    font-size: 20px;
    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};
    height: 20px;
    font-family: 'Raleway';
    font-size: 15px;
  }

  .inf {
    // background: #a1a1a1;
    display: flex;
    flex: 1 1 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }

  .inf .dis ,
  .inf .des{
    display: flex;
    width: 45%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    height: 100%;
  }

  .inf header {
    display: flex;
    flex: 1 1 60%;
    // background: blue;
    justify-content: center;
    padding-top: 20px;
    border-radius: 10px;
  }

  .inf .form-dis,
  .inf .form-des{
    display: flex;
    flex: 1 1 100%;
  }

  .inf .form-dis form,
  .inf .form-des form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    gap: 10px;
    padding: 0px 10px 0px 10px;
  }

  .inf .form-dis form label,
  .inf .form-des form label {
    display: flex;
    gap: 10px;
  }

  .inf .form-dis form .botao,
  .inf .form-des form .botao {
    display: flex;
    width: 100%;
    height: 100%;
    // background: #a1a1a1;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 35px;
    border-radius: 10px;
  }
  @media only screen and (min-width: 768px) and (max-width:900px){
  display: flex;
  flex: 20 1 100%;
  gap: 5%;
  flex-direction: column;

  height: calc(100vh - 200px);

  font-style: italic;

  overflow-y: auto;

  padding-bottom: 40px;

  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 5%;

    padding: 10px;

  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

    width: 100%;

    background: ${colors.primaryLightColor};

    border: 1px solid black;
    border-radius: 10px;
  }


  .sup .inst header,
  .sup .turma-div header,
  .inf .dis header,
  .inf .des header {
    display: flex;
    flex: 1 1 70%;
    justify-content: center;

    font-size: 30px;

    width: 100%;

    border-radius: 10px;

    padding-top: 20px;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .dis .form-dis ,
  .inf .des .form-des {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;

    width: 100%;

    border-radius: 10px;

    padding-top: 30px;

  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis form label,
  .inf .form-des form label {
    display: flex;
    align-items: center;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form  {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    width: 100%;

    font-size: 30px;

    padding: 0px 10px 0px 10px;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    width: 100%;
    height: 100%;


    padding: 35px;

    border-radius: 10px;
  }

  button {
    cursor: pointer;

    border: none;
    border-radius: 10px;

    background: ${colors.statusGreenColor};

    font-family: 'Raleway';
    font-size: 25px;

    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};

    height: 25px;

    font-family: 'Raleway';
    font-size: 25px;
  }
  }
  @media only screen and (min-width: 412px) and (max-width:428px){
  display: flex;
  flex: 20 1 100%;
  gap: 5%;
  flex-direction: column;

  height: calc(100vh - 200px);

  font-style: italic;

  overflow-y: auto;

  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 5%;

    padding: 10px;

  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background: ${colors.primaryLightColor};

    border: 1px solid black;
    border-radius: 10px;
  }


  .sup .inst header,
  .sup .turma-div header,
  .inf .dis header,
  .inf .des header {
    display: flex;
    flex: 1 1 70%;
    justify-content: center;
    gap: 10%;

    width: 100%;

    border-radius: 10px;

    padding-top: 20px;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .dis .form-dis ,
  .inf .des .form-des {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;

    width: 100%;

    border-radius: 10px;

    padding-top: 30px;

    font-size: 15px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis form label,
  .inf .form-des form label {
    display: flex;
    gap: 10px;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form  {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    width: 100%;

    font-size: 15px;

    padding: 0px 10px 0px 10px;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    width: 100%;
    height: 100%;


    padding: 35px;

    border-radius: 10px;
  }

  button {
    cursor: pointer;

    border: none;
    border-radius: 10px;

    background: ${colors.statusGreenColor};

    font-family: 'Raleway';
    font-size: 16px;

    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};

    height: 20px;

    font-family: 'Raleway';
    font-size: 15px;
  }
  }

  @media only screen and (min-width: 360px) and (max-width:390px){
  display: flex;
  flex: 20 1 100%;
  gap: 5%;
  flex-direction: column;

  height: calc(100vh - 200px);

  font-style: italic;

  overflow-y: auto;

  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 5%;

    padding: 10px;

  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background: ${colors.primaryLightColor};

    border: 1px solid black;
    border-radius: 10px;
  }


  .sup .inst header,
  .sup .turma-div header,
  .inf .dis header,
  .inf .des header {
    display: flex;
    flex: 1 1 70%;
    justify-content: center;
    gap: 10%;

    width: 100%;

    border-radius: 10px;

    padding-top: 20px;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .dis .form-dis ,
  .inf .des .form-des {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;

    width: 100%;

    border-radius: 10px;

    padding-top: 30px;

    font-size: 10px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis form label,
  .inf .form-des form label {
    display: flex;
    gap: 10px;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form  {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 20px;

    width: 100%;

    font-size: 13px;

    padding: 0px 10px 0px 10px;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    width: 100%;
    height: 100%;


    padding: 35px;

    border-radius: 10px;
  }

  button {
    cursor: pointer;

    border: none;
    border-radius: 10px;

    background: ${colors.statusGreenColor};

    font-family: 'Raleway';
    font-size: 15px;

    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};

    height: 20px;

    font-family: 'Raleway';
    font-size: 13px;
  }
  }
`;
