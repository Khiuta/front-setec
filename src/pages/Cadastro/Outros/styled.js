import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Main = styled.main`
  display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;

  .sup,.inf {
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
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma {
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
    flex-direction: column;
    align-items: center;
    gap: 2vh;
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
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px
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
    gap: 2vh;
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
    align-items: flex-end;
    justify-content: flex-end;
    padding: 35px;
    border-radius: 10px;
  }

  //responsivo
  @media only screen and (min-width: 265px) and (max-width: 299px){
    display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;


  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 10%;
    margin-top: 10vh;
  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    width: 100%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sup .inst header,
  .sup .turma-div header,
  .inf header {
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px;
    font-size: 2vh;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .form-dis,
  .inf .form-des {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 30px;
    font-size: 20px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis label,
  .inf .form-des label {
    display: flex;
    gap: 10px;
    font-size: 2vh;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao  {
    display: flex;
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
    font-size: 2vh;
    position: relative;
    top: 15%;
    left: 13%;
    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};
    height: 20px;
    font-family: 'Raleway';
    font-size: 1vh;
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px){
    display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;


  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 10%;
    margin-top: 10vh;
  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    width: 100%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sup .inst header,
  .sup .turma-div header,
  .inf header {
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px;
    font-size: 2.3vh;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .form-dis,
  .inf .form-des {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 30px;
    font-size: 20px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis label,
  .inf .form-des label {
    display: flex;
    gap: 10px;
    font-size: 2.2vh;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap:2vh;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao  {
    display: flex;
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
    font-size: 2.3vh;
    position: relative;
    top: 15%;
    left: 5%;
    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};
    height: 20px;
    font-family: 'Raleway';
    font-size: 1.3vh;
  }
  }
  @media only screen and (min-width: 400px) and (max-width: 499px){
    display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;


  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
    gap: 10%;
    margin-top: 10vh;
  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    width: 100%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sup .inst header,
  .sup .turma-div header,
  .inf header {
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px;
    font-size: 2.4vh;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .form-dis,
  .inf .form-des {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 30px;
    font-size: 20px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis label,
  .inf .form-des label {
    display: flex;
    gap: 10px;
    font-size: 2.5vh;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao  {
    display: flex;
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
    font-size: 2.5vh;
    position: relative;
    top: 15%;
    left: 5%;
    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};
    height: 20px;
    font-family: 'Raleway';
    font-size: 1.8vh;
  }
  }
  @media only screen and (min-width: 500px) and (max-width: 799px){
    display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;


  .sup,
  .inf {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 100%;
    gap: 10%;
    margin-top: 10vh;
  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    width: 70%;
    height: 80%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sup .inst header,
  .sup .turma-div header,
  .inf header {
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 1vh;
    justify-content: center;
    padding-top: 20px;
    font-size: 2.4vh;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .form-dis,
  .inf .form-des {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    border-radius: 1vh;
    justify-content: center;
    padding-top: 30px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis label,
  .inf .form-des label {
    display: flex;
    gap: 10px;
    font-size: 2.6vh;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2vh;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao  {
    display: flex;
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
    font-size: 2.5vh;
    position: relative;
    top: 15%;
    left: 5%;
    padding: 10px;
  }

  input {
    background: ${colors.primaryLightColor};
    height: 20px;
    font-family: 'Raleway';
    font-size: 1.8vh;
  }
  }
  @media only screen and (min-width: 800px) and (max-width: 1100px){
    display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;


  .sup,
  .inf {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex: 1 1 100%;
    gap: 5%;
    margin-top: 2vh;
  }

  .sup .inst,
  .sup .turma-div,
  .inf .dis ,
  .inf .des {
    display: flex;
    width: 70%;
    height: 80%;
    background: ${colors.primaryLightColor};
    border: 1px solid black;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .sup .inst header,
  .sup .turma-div header,
  .inf header {
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 1vh;
    justify-content: center;
    margin-top: 10%;
    font-size: 2.2vh;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma,
  .inf .form-dis,
  .inf .form-des {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    border-radius: 1vh;
    justify-content: center;
    padding-top: 30px;
  }

  .sup .inst .form-inst label,
  .sup .turma-div .form-turma label,
  .inf .form-dis label,
  .inf .form-des label {
    display: flex;
    gap: 10px;
    font-size: 2.2vh;
  }

  .sup .inst .form-inst form,
  .sup .turma-div .form-turma form,
  .inf .form-dis form,
  .inf .form-des form {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 2vh;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao,
  .inf .form-dis form .botao,
  .inf .form-des form .botao  {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: flex-end;
    justify-content: flex-end;
  }

  button {
    cursor: pointer;
    border: none;
    border-radius: 10px;
    background: ${colors.statusGreenColor};
    font-family: 'Raleway';
    font-size: 2.5vh;

    position: relative;
    bottom:50%;
    left: 5%;
  }

  input {
    background: ${colors.primaryLightColor};
    height: 20px;
    font-family: 'Raleway';
    font-size: 1.7vh;
  }
  }
  @media only screen and (min-width: 1101px) and (max-width: 1800px){
    display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 150px);
  font-style: italic;
  flex-direction: column;
  overflow-y: auto;

  .sup,.inf {
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
    display: flex;
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px;
  }

  .sup .inst .form-inst,
  .sup .turma-div .form-turma {
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
    flex-direction: column;
    align-items: center;
    gap: 2vh;
  }

  .sup .inst .form-inst form .botao,
  .sup .turma-div .form-turma form .botao {
    display: flex;
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
    flex: 1 1 70%;
    width: 100%;
    border-radius: 10px;
    justify-content: center;
    padding-top: 20px
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
    gap: 2vh;
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
    align-items: flex-end;
    justify-content: flex-end;
    padding: 35px;
    border-radius: 10px;
  }

  }
`;
