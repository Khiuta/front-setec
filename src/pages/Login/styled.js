import styled from 'styled-components';
import { primaryLightColor } from '../../config/colors';

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
  #labels{
    padding-top:5vh;
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
  #labels{
    padding-top:5vh;
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
  #labels{
    padding-top:5vh;
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
    justify-content: center;

    position: relative;
    top: 5vh;
  }
  }
`;
export const Div = styled.form`
  height: calc(100vh - 100px);
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  align-items: center;
`;
