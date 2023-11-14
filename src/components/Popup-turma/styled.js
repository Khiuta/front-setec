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
    width: 40%;
    min-height: 40vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
  }

  form {
    display: flex;
    flex: 1 1 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    label {
      display: flex;
      width: 60%;
      gap: 10px;
      font-size: 24px;

      input {
        width: 100%;
        background-color: rgba(255, 255, 255, 0);
        font-size: 20px;
      }
    }

    footer {
      display: flex;
      width: 60%;
      justify-content: space-between;

      button {
        width: 90px;
        height: 50px;
        border: none;
        border-radius: 5px;
        font-size: 20px;
        font-family: 'Raleway';
        cursor: pointer;
      }

      .cancel {
        background: ${statusRedColor};
      }
      .edit {
        background: ${statusGreenColor};
      }
    }
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
    width: 90%;
    min-height: 40vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
  }

  form {
    display: flex;
    flex: 1 1 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    label {
      display: flex;
      width: 60%;
      gap: 10px;
      font-size: 30px;

      input {
        width: 100%;
        background-color: rgba(255, 255, 255, 0);
        font-size: 30px;
      }
    }

    footer {
      display: flex;
      width: 60%;
      justify-content: space-between;

      button {
        width: 10vw;
        height: 4vh;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-family: 'Raleway';
        cursor: pointer;
      }

      .cancel {
        background: ${statusRedColor};
      }
      .edit {
        background: ${statusGreenColor};
      }
    }
  }
  }
  @media only screen and (min-width: 300px) and (max-width: 399px){
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
    width: 90%;
    min-height: 40vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
  }

  form {
    display: flex;
    flex: 1 1 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    label {
      display: flex;
      width: 60%;
      gap: 10px;
      font-size: 15px;

      input {
        width: 100%;
        background-color: rgba(255, 255, 255, 0);
        font-size: 15px;
      }
    }

    footer {
      display: flex;
      width: 60%;
      justify-content: space-between;

      button {
        width: 70px;
        height: 40px;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-family: 'Raleway';
        cursor: pointer;
      }

      .cancel {
        background: ${statusRedColor};
      }
      .edit {
        background: ${statusGreenColor};
      }
    }
  }
  }
  @media only screen and (min-width: 412px) and (max-width: 428px){
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
    width: 90%;
    min-height: 40vh;
    background: rgba(255, 255, 255, .6);
    box-shadow: 5px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
  }

  form {
    display: flex;
    flex: 1 1 90%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    label {
      display: flex;
      width: 60%;
      gap: 10px;
      font-size: 20px;

      input {
        width: 100%;
        background-color: rgba(255, 255, 255, 0);
        font-size: 20px;
      }
    }

    footer {
      display: flex;
      width: 60%;
      justify-content: space-between;

      button {
        width: 90px;
        height: 40px;
        border: none;
        border-radius: 10px;
        font-size: 20px;
        font-family: 'Raleway';
        cursor: pointer;
      }

      .cancel {
        background: ${statusRedColor};
      }
      .edit {
        background: ${statusGreenColor};
      }
    }
  }
  }
`;
