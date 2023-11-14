import styled from 'styled-components';
import { statusGreenColor, statusRedColor } from '../../config/colors';

export const Pop = styled.main`
  display: flex;
  flex: 1 1 100%;
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur(5px) brightness(50%);
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    min-height: 35vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 0 50px 30px 50px;
    align-items: flex-end;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
  }

  #cancel,
  #confirm {
    width: 30%;
    height: 60px;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 20px;
    font-family: 'Raleway';
    font-weight: bold;
    cursor: pointer;
  }

  #cancel {
    background: ${statusRedColor};
  }

  #confirm {
    background: ${statusGreenColor};
  }
  @media only screen and (min-width: 820px) and (max-width: 900px){
    display: flex;
  flex: 1 1 100%;
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur(5px) brightness(50%);
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    min-height: 35vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 0 50px 30px 50px;
    align-items: flex-end;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  #cancel,
  #confirm {
    width: 35%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    font-family: 'Raleway';
    font-weight: bold;
    cursor: pointer;
  }

  #cancel {
    background: ${statusRedColor};
  }

  #confirm {
    background: ${statusGreenColor};
  }
  }

  @media only screen and (min-width: 300px) and (max-width: 399px){
    display: flex;
  flex: 1 1 100%;
  min-width: 50%;
  min-height: 100vh;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur(5px) brightness(50%);
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    min-height: 35vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 0 50px 30px 50px;
    align-items: flex-end;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    font-size: 10px;
  }

  #cancel,
  #confirm {
    width: 40%;
    height: 60px;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    font-family: 'Raleway';
    font-weight: bold;
    cursor: pointer;
  }

  #cancel {
    background: ${statusRedColor};
  }

  #confirm {
    background: ${statusGreenColor};
  }
  }
  @media only screen and (min-width: 400px) and (max-width: 599px){
    display: flex;
  flex: 1 1 100%;
  min-width: 50%;
  min-height: 100vh;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur(5px) brightness(50%);
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    min-height: 35vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 0 50px 30px 50px;
    align-items: flex-end;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  #cancel,
  #confirm {
    width: 35%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    font-family: 'Raleway';
    font-weight: bold;
    cursor: pointer;
  }

  #cancel {
    background: ${statusRedColor};
  }

  #confirm {
    background: ${statusGreenColor};
  }
  }
  @media only screen and (min-width: 600px) and (max-width: 899px){
    display: flex;
  flex: 1 1 100%;
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur(5px) brightness(50%);
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    min-height: 35vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 0 50px 30px 50px;
    align-items: flex-end;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  #cancel,
  #confirm {
    width: 35%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    font-family: 'Raleway';
    font-weight: bold;
    cursor: pointer;
  }

  #cancel {
    background: ${statusRedColor};
  }

  #confirm {
    background: ${statusGreenColor};
  }
  }
  @media only screen and (min-width: 900px) and (max-width: 999px){
    display: flex;
  flex: 1 1 100%;
  min-width: 100%;
  min-height: 100vh;
  position: absolute;
  z-index: 2000;
  backdrop-filter: blur(5px) brightness(50%);
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    min-height: 35vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 0 50px 30px 50px;
    align-items: flex-end;
    justify-content: space-between;
  }

  header {
    display: flex;
    flex: 1 1 100%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  #cancel,
  #confirm {
    width: 35%;
    height: 50px;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 15px;
    font-family: 'Raleway';
    font-weight: bold;
    cursor: pointer;
  }

  #cancel {
    background: ${statusRedColor};
  }

  #confirm {
    background: ${statusGreenColor};
  }
  }
`;
