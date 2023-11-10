import styled from 'styled-components';

export const Div = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 50vw;
  min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 3.5vh;


  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 20px;

  }
  input{
    font-size: 2.9vh;
  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;
  }

  footer{
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (min-width: 265px) and (max-width: 299px){
    width: 100%;
    min-height: 50vh;


    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 4vh;

  font-size: 2vh;

  input{
    font-size: 1.4vh;
  }

  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 20px;

  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.3vh;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px){
    width: 100%;
    min-height: 50vh;


    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 4vh;

  font-size: 2.4vh;

  input{
    font-size: 1.7vh;
  }

  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 10px;

  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 30vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 2.3vh;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
  @media only screen and (min-width: 400px) and (max-width: 499px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 2.8vh;


  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 10px;

  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
  @media only screen and (min-width: 500px) and (max-width: 599px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 3.5vh;


  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 10px;

  }

  input{
    font-size: 2.7vh;
  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
  @media only screen and (min-width: 600px) and (max-width: 799px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 3.5vh;


  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 10px;

  }

  input{
    font-size: 2.9vh;
  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
  @media only screen and (min-width: 800px) and (max-width: 999px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 3.9vh;


  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 10px;

  }

  input{
    font-size: 3vh;
  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1400px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 3.9vh;


  label{
    display: flex;
    flex-direction:flex;

    justify-content: space-around;
    gap: 10px;

  }

  input{
    font-size: 3vh;
  }
  header{
    display: flex;
    align-items: start;
    text-align: center;

  }
  #cadastros{
    padding-top: 20px;
  }
  button {
    cursor: pointer;
    background: #6AEF6A;
    width: 80px;
    height: 50px;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 300;

    position: relative;
    top: 5vh;

  }

  footer{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  }
`;
