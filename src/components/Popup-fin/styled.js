import styled from 'styled-components';
import { primaryLightColor, statusGreenColor } from '../../config/colors';

export const Popup = styled.div`
  background: ${primaryLightColor};
  display: flex;
  flex: 1 1 200px;
  max-width: 400px;
  height: 200px;
  // flex-wrap: wrap;
  flex-direction: column;
  margin: 20px;
  font-weight: 500;
  border: 1px solid #000;
  border-radius: 10px;
  z-index: 100;
  position: absolute;

  .sup {
    display: flex;
    flex: 1 3 100%;
    // background: red;
  }

  .sup {
    align-items: center;
    padding: 10px;
  }

  .mid {
    display: flex;
    flex: 1 1 100%;
    align-items: flex-end;
    padding: 20px 20px;
    gap: 15px;
  }

  .inf {
    display: flex;
    flex: 1 1 100%;
    padding: 10px;
    justify-content: flex-end;
    align-items: center;
  }

  button {
      min-height: 40px;
      width: 100px;
      font-size: 15px;
      background: ${statusGreenColor};
      border: none;
      border-radius: 10px;
      font-family: 'Raleway';
      cursor: pointer;
    }

  input {
    background: ${primaryLightColor};
  }

  label {
    display: flex;
    gap: 10px;
  }

  #mes {
    width: 80px;
  }

  #ano {
    width: 70px;
  }

  @media only screen and (min-width: 412px) and (max-width: 428px){
    background: ${primaryLightColor};
    display: flex;
    flex: 1 1 200px;
    max-width: 400px;
    height: 200px;
    flex-direction: column;
    margin: 20px;
    font-weight: 500;
    border: 1px solid #000;
    border-radius: 10px;
    z-index: 100;
    position: absolute;
    top: 24%;

    .sup {
      display: flex;
      flex: 1 3 100%;
    }

    .sup {
      align-items: center;
      padding: 10px;
    }

    .mid {
      display: flex;
      flex: 1 1 100%;
      align-items: flex-end;
      padding: 20px 20px;
      gap: 15px;
    }

    .inf {
      display: flex;
      flex: 1 1 100%;
      padding: 10px;
      justify-content: flex-end;
      align-items: center;
    }

    button {
      min-height: 40px;
      width: 100px;
      font-size: 15px;
      background: ${statusGreenColor};
      border: none;
      border-radius: 10px;
      font-family: 'Raleway';
      cursor: pointer;
    }

    input {
      background: ${primaryLightColor};
    }

    label {
      display: flex;
      gap: 10px;
    }

    #mes {
      width: 80px;
    }

    #ano {
      width: 70px;
    }
  }
  @media only screen and (min-width: 360px) and (max-width: 390px){
    background: ${primaryLightColor};
    display: flex;
    flex: 1 1 200px;
    max-width: 400px;
    height: 200px;
    flex-direction: column;
    margin: 20px;
    font-weight: 500;
    border: 1px solid #000;
    border-radius: 10px;
    z-index: 100;
    position: absolute;
    top: 24%;

    .sup {
      display: flex;
      flex: 1 3 100%;
    }

    .sup {
      align-items: center;
      padding: 10px;
    }

    .mid {
      display: flex;
      flex: 1 1 100%;
      align-items: flex-end;
      padding: 20px 20px;
      gap: 15px;
    }

    .inf {
      display: flex;
      flex: 1 1 100%;
      padding: 10px;
      justify-content: flex-end;
      align-items: center;
    }

    button {
      min-height: 40px;
      width: 100px;
      font-size: 15px;
      background: ${statusGreenColor};
      border: none;
      border-radius: 10px;
      font-family: 'Raleway';
      cursor: pointer;
    }

    input {
      background: ${primaryLightColor};
    }

    label {
      display: flex;
      gap: 10px;
    }

    #mes {
      width: 80px;
    }

    #ano {
      width: 70px;
    }
  }
`;
