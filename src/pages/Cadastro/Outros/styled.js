import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const Main = styled.main`
  display: flex;
  flex: 20 1 100%;
  height: calc(100vh - 220px);
  font-style: italic;
  flex-direction: column;
  // flex-wrap: wrap;

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

  @media only screen and (max-width: 1037px) {
    .form-dis label {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 994px) {
    .form-dis label {
      font-size: 17px;
    }
  }

  @media only screen and (max-width: 971px) {
    .sup {
      flex-direction: column;
      align-items: center;
      gap: 34px;
      height: calc((66px * 100vh - 220px) / 120);
    }

    .inst,
    .turma-div {
      height: 45%;
    }

    .inf .dis {
      width: 45%;
    }
  }
`;
