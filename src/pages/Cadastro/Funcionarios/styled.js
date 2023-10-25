import styled from 'styled-components';

export const Div = styled.main`
  height: calc(100vh - 100px);
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 30vw;
  min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 20px;


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
  @media only screen and (min-width: 768px) and (max-width: 900px){
    width: 100%;
    min-height: 50vh;


    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 4vh;

  font-size: 35px;

  input{
    font-size: 25px;
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
    width: 15vw;
    height: 5vh;
    border: none;
    border-radius: 5px;
    font-size: 25px;
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
  @media only screen and (min-width: 412px) and (max-width: 428px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 20px;


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
  @media only screen and (min-width: 360px) and (max-width: 390px){
    width: 100%;
    min-height: 50vh;


  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 4vh;

  font-size: 18px;


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
