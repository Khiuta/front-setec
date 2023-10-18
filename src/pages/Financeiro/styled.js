import styled from 'styled-components';
import { primaryLightColor, statusGreenColor } from '../../config/colors';

export const Content = styled.main`

  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);

  .lado-1 {
    border-right: 2px solid rgba(0, 0, 0, .5);
    display: flex;
    flex: 1 1 500px;
    flex-direction: column;
  }

  .lado-1 .sup {
    // background: #a1a1a1;
    display: flex;
    flex: 1 7 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
  }

  .lado-1 .sup button {
    height: 70%;
    width: 25%;
    font-size: 20px;
    border: none;
    background: ${statusGreenColor};
    border-radius: 10px;
    font-family: 'Raleway';
    cursor: pointer;
  }

  .lado-1 .inf {
    // background: red;
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    padding: 60px 15px;
    gap: 15px;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
      width: 10px;
  }
  ::-webkit-scrollbar-track {
      background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, .5);
  }

  .lado-1 section {
    width: 100%;
    background: ${primaryLightColor};
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 20px;
    gap: 15px;
  }

  .lado-2 {
    display: flex;
    flex: 5 1 600px;
    height: inherit;
    padding: 10px;
  }

  @media only screen and (min-width: 412px) and (max-width: 428px){

  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);

  .lado-1 {
    border-right: 2px solid rgba(0, 0, 0, .5);
    display: flex;
    flex: 1 1 500px;
    flex-direction: column;
  }

  .lado-1 .sup {
    display: flex;
    flex: 1 7 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
  }

  .lado-1 .sup button {
    height: 60%;
    width: 25%;
    font-size: 17px;
    border: none;
    background: ${statusGreenColor};
    border-radius: 10px;
    font-family: 'Raleway';
    cursor: pointer;
  }

  .lado-1 .inf {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    padding: 60px 15px;
    gap: 15px;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
      width: 10px;
  }
  ::-webkit-scrollbar-track {
      background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, .5);
  }

  .lado-1 section {
    width: 100%;
    background: ${primaryLightColor};
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 22px;
    gap: 15px;
  }

  .lado-2 {
    display: none;
  }
  }
  @media only screen and (min-width: 360px) and (max-width: 390px){

  display: flex;
  flex: 20 1 100vw;
  height: calc(100vh - 220px);

  .lado-1 {
    border-right: 2px solid rgba(0, 0, 0, .5);
    display: flex;
    flex: 1 1 500px;
    flex-direction: column;
  }

  .lado-1 .sup {
    display: flex;
    flex: 1 7 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding-right: 30px;
  }

  .lado-1 .sup button {
    height: 75%;
    width: 30%;
    font-size: 17px;
    border: none;
    background: ${statusGreenColor};
    border-radius: 10px;
    font-family: 'Raleway';
    cursor: pointer;
  }

  .lado-1 .inf {
    display: flex;
    flex: 1 1 100%;
    flex-direction: column;
    padding: 60px 15px;
    gap: 15px;
    overflow-y: auto;
    font-size: 20px;
  }

  ::-webkit-scrollbar {
      width: 10px;
  }
  ::-webkit-scrollbar-track {
      background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, .3);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, .5);
  }

  .lado-1 section {
    width: 100%;
    background: ${primaryLightColor};
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-size: 20px;
    gap: 15px;
  }

  .lado-2 {
    display: none;
  }
}
`;
